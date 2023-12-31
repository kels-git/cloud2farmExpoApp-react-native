import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { DataTable } from "react-native-paper";
import { useTailwind } from "tailwind-rn";

import HeaderComponent from "../../components/HeaderComponent";
import { StickyBottomComponent } from "../../components/StickyBottomComponent";
import ContainerWrapper from "../../components/wrappers/ContainerWrapper";
import { COLORS } from "../../constants/colors";
import { SCREENS } from "../../constants/screens";
import { GridData } from "../../helpers/variables";
import { RootStackScreenProps } from "../../typings/navigation";
import { ResponsiveUi } from "../../components/responsive-ui";

const IndexGridViewScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.GRIDVIEW_SCREEN>) => {
  const tailwind = useTailwind();
  const { title }: any = route.params;
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([5, 6, 7, 8, 9, 10]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, GridData.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView
      style={[tailwind("flex-1"), { backgroundColor: COLORS.LIGHT_GREY }]}
    >
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >
        <HeaderComponent title={title} />

        <ContainerWrapper
          style={[tailwind("flex-1"), { backgroundColor: COLORS.WHITE }]}
        >
          <DataTable>
            <DataTable.Header>
              <DataTable.Title
                numeric
                style={[tailwind("justify-center items-center")]}
              >
                <View>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    15 Mins
                  </ResponsiveUi.Text>
                </View>
              </DataTable.Title>
              <DataTable.Title
                numeric
                style={[tailwind("justify-center items-center")]}
              >
                <View>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Average
                  </ResponsiveUi.Text>
                </View>
              </DataTable.Title>
              <DataTable.Title
                numeric
                style={[tailwind("justify-center items-center")]}
              >
                <View>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Min
                  </ResponsiveUi.Text>
                </View>
              </DataTable.Title>

              <DataTable.Title
                numeric
                style={[tailwind("justify-center items-center")]}
              >
                <View>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Max
                  </ResponsiveUi.Text>
                </View>
              </DataTable.Title>
            </DataTable.Header>

            {GridData.slice(from, to).map((item) => (
              <DataTable.Row key={item.key}>
                 <DataTable.Cell
                  numeric
                  textStyle={{ color: COLORS.BLACK }}
                  style={[tailwind("justify-center items-center"), {}]}
                >
                  {item.time}
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  textStyle={{ color: COLORS.BLACK }}
                  style={[tailwind("justify-center items-center"), {}]}
                >
                   {item.average.toString()}
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  textStyle={{ color: COLORS.BLACK }}
                  style={[tailwind("justify-center items-center"), {}]}
                >
                   {item.min.toString()}
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  textStyle={{ color: COLORS.BLACK }}
                  style={[tailwind("justify-center items-center"), {}]}
                >
                   {item.max.toString()}
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(GridData.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${GridData.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel="Rows per page"
            />
          </DataTable>
        </ContainerWrapper>
      </ScrollView>
      <StickyBottomComponent />
    </SafeAreaView>
  );
};

export default IndexGridViewScreen;
