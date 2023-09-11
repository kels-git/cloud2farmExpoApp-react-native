import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { DataTable } from "react-native-paper";
import { useTailwind } from "tailwind-rn";

import HeaderComponent from "../../components/HeaderComponent";
import { StickyBottomComponent } from "../../components/StickyBottomComponent";
import ContainerWrapper from "../../components/wrappers/ContainerWrapper";
import { COLORS } from "../../constants/colors";
import { SCREENS } from "../../constants/screens";
import { GridDataProduction } from "../../helpers/variables";
import { RootStackScreenProps } from "../../typings/navigation";
import { ResponsiveUi } from "../../components/responsive-ui";

const IndexGridViewProductionScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.GRIDVIEW_SCREEN>) => {
  const tailwind = useTailwind();
  const { title }: any = route.params;
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4, 5, 6, 7]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, GridDataProduction.length);

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
            <DataTable.Header style={{}}>
              <DataTable.Title
                textStyle={{ fontWeight: "bold" }}
                style={[tailwind("justify-center items-center"), {}]}
              >
                <View>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Date
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
                    Total
                  </ResponsiveUi.Text>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Cost
                  </ResponsiveUi.Text>
                </View>
              </DataTable.Title>
              <DataTable.Title
                numeric
                style={[tailwind("justify-center items-end")]}
              >
                <View>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Gross
                  </ResponsiveUi.Text>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Income
                  </ResponsiveUi.Text>
                </View>
              </DataTable.Title>
              <DataTable.Title
                numeric
                style={[tailwind("justify-center items-end")]}
              >
                <View>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Net
                  </ResponsiveUi.Text>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    Income
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
                    Weight
                  </ResponsiveUi.Text>
                  <ResponsiveUi.Text
                    h7
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    color={COLORS.MEDIUM_BLACK}
                  >
                    (kg)
                  </ResponsiveUi.Text>
                </View>
              </DataTable.Title>
            </DataTable.Header>

            {GridDataProduction.slice(from, to).map((item) => (
              <DataTable.Row key={item.key}>
                <DataTable.Cell
                  textStyle={{ color: COLORS.BLACK }}
                  style={{ flex: 1.1 }}
                >
                  {item.date}
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  textStyle={{ color: COLORS.BLACK }}
                  style={[tailwind("justify-center items-center"), {}]}
                >
                  {item.total_cost.toString()}
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  textStyle={{ color: COLORS.BLACK }}
                  style={[tailwind("justify-center items-center")]}
                >
                  {item.gross_income.toString()}
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  textStyle={{ color: COLORS.BLACK }}
                  style={[tailwind("justify-center items-center")]}
                >
                  {item.net_income.toString()}
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  textStyle={{ color: COLORS.BLACK }}
                  style={[tailwind("justify-center items-center")]}
                >
                  {item.weight.toString()}
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(
                GridDataProduction.length / itemsPerPage
              )}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${GridDataProduction.length}`}
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

export default IndexGridViewProductionScreen;
