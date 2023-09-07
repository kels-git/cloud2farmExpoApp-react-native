import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { useTailwind } from "tailwind-rn";

import HeaderComponent from "../../components/HeaderComponent";
import { StickyBottomComponent } from "../../components/StickyBottomComponent";
import ContainerWrapper from "../../components/wrappers/ContainerWrapper";
import { COLORS } from "../../constants/colors";
import { SCREENS } from "../../constants/screens";
import { GridData } from "../../helpers/variables";
import { RootStackScreenProps } from "../../typings/navigation";

const IndexGridViewScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.GRIDVIEW_SCREEN>) => {
  const tailwind = useTailwind();
  const { title }: any = route.params;
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([5, 6, 7, 8, 9, 10]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
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
              <DataTable.Title>15 Mins</DataTable.Title>
              <DataTable.Title numeric>Average</DataTable.Title>
              <DataTable.Title numeric>Min</DataTable.Title>
              <DataTable.Title numeric>Max</DataTable.Title>
            </DataTable.Header>

            {GridData.slice(from, to).map((item) => (
              <DataTable.Row key={item.key}>
                <DataTable.Cell>{item.time}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {item.average.toString()}
                </DataTable.Cell>
                <DataTable.Cell numeric>{item.min.toString()}</DataTable.Cell>
                <DataTable.Cell numeric>{item.max.toString()}</DataTable.Cell>
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
