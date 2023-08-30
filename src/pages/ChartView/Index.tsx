import React from "react";
import ContainerWrapper from "../../components/wrappers/ContainerWrapper";
import { SCREENS } from "../../constants/screens";
import { RootStackScreenProps } from "../../typings/navigation";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { useTailwind } from "tailwind-rn";
import HeaderComponent from "../../components/HeaderComponent";
import { ResponsiveUi } from "../../components/responsive-ui";
import { BarChart } from "react-native-gifted-charts";
import { StickyBottomComponent } from "../../components/StickyBottomComponent";
import * as FileSystem from "expo-file-system";
// ExcelJS
import ExcelJS from "exceljs";
// Share excel via share dialog
import * as Sharing from "expo-sharing";
// From @types/node/buffer
import { Buffer as NodeBuffer } from "buffer";

const IndexChartViewScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.CHARTVIEW_SCREEN>) => {
  const tailwind = useTailwind();
  const { title }: any = route.params;
  const barData = [
    { id: 1, value: 250, label: "Mon" },
    { id: 2, value: 500, label: "Tue", frontColor: "#177AD5" },
    { id: 3, value: 745, label: "Wed" },
    { id: 4, value: 320, label: "Thu", frontColor: "#177AD5" },
    { id: 5, value: 600, label: "Fri" },
    { id: 6, value: 256, label: "Sat", frontColor: "#177AD5" },
    { id: 7, value: 300, label: "Sun" },
    { id: 8, value: 400, label: "Mon", frontColor: "#177AD5" },
    { id: 9, value: 400, label: "Tue" },
    { id: 10, value: 256, label: "Wed", frontColor: "#177AD5" },
    { id: 11, value: 300, label: "Thu" },
    { id: 12, value: 650, label: "Fri", frontColor: "#177AD5" },
    { id: 13, value: 650, label: "Sat" },
    { id: 14, value: 900, label: "Sun" },
    { id: 15, value: 432, label: "Mon" },
  ];

  function handleSignOut() {}

  function handleSearch() {}

  async function handleExportReport() {
    const shareableExcelUri: string = await generateShareableExcel();
    Sharing.shareAsync(shareableExcelUri, {
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Android
      dialogTitle: "Your dialog title here", // Android and Web
      UTI: "com.microsoft.excel.xlsx", // iOS
    })
      .catch((error) => {
        console.error("Error", error);
      })
      .then(() => {
        console.log("Return from sharing dialog");
      });
  }

  // This returns a local uri that can be shared
  const generateShareableExcel = async (): Promise<string> => {
    const now = new Date();
    const fileName = "cloud2fishdata.xlsx";
    const fileUri = FileSystem.cacheDirectory + fileName;
    return new Promise<string>((resolve, reject) => {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = "cloud2fish";
      workbook.created = now;
      workbook.modified = now;

      // Add a sheet to work on
      const worksheet = workbook.addWorksheet("My Sheet", {});
      
      // Just some columns as used on ExcelJS Readme
      worksheet.columns = [
        { header: "Id", key: "id", width: 10 },
        { header: "value", key: "value", width: 10 },
        { header: "Days", key: "Days", width: 10 },
      ];
      // Add some test data
      barData.map((data) => {
        worksheet.addRow([data.id, data.value, data.label]);
      });

      // Test styling

      // Style first row
      worksheet.getRow(1).font = {
        name: "Arial Black",
        family: 2,
        size: 14,
        bold: false,
        // color: { argb: 'FF0000'}
      };
      // Style second column
      worksheet.eachRow((row, rowNumber) => {
        row.getCell(1).font = {
          name: "Arial Black",
          family: 2,
          size: 14,
          bold: true,
          color: { argb: "FF0000" },
        };

        row.alignment = { vertical: "middle", horizontal: "center" };
      });

      // worksheet.getCell("A1").alignment = {
      //   vertical: "middle",
      //   horizontal: "center",
      // };

      // Write to file
      workbook.xlsx.writeBuffer().then((buffer: ExcelJS.Buffer) => {
        // Do this to use base64 encoding
        const nodeBuffer = NodeBuffer.from(buffer);
        const bufferStr = nodeBuffer.toString("base64");
        FileSystem.writeAsStringAsync(fileUri, bufferStr, {
          encoding: FileSystem.EncodingType.Base64,
        }).then(() => {
          resolve(fileUri);
        });
      });
    });
  };

  return (
    <SafeAreaView
      style={[tailwind("flex-1"), { backgroundColor: COLORS.LIGHT_GREY }]}
    >
      <ScrollView
        contentContainerStyle={[tailwind("flex-grow")]}
        showsVerticalScrollIndicator={false}
      >
        <HeaderComponent title={title} />

        <ContainerWrapper style={[tailwind("flex-1")]}>
          <View
            style={[
              tailwind("mt-20 mb-10 ml-2 mr-2"),
              { backgroundColor: COLORS.CHART_BG },
            ]}
          >
            <BarChart
              barWidth={22}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
            />
          </View>

          <ContainerWrapper
            style={[tailwind("justify-center items-center top-10 mb-20")]}
          >
            <ResponsiveUi.Button
              bold
              gradient={true}
              // loading={loading}
              title="Export Report"
              colors={[COLORS.PRIMARY_START_COLOR, COLORS.PRIMARY_END_COLORS]}
              style={[tailwind("w-9/12")]}
              action={() => handleExportReport()}
            />
          </ContainerWrapper>
        </ContainerWrapper>
      </ScrollView>

      <StickyBottomComponent
        actionSearch={handleSearch}
        actionSignOut={handleSignOut}
      />
    </SafeAreaView>
  );
};

export default IndexChartViewScreen;
