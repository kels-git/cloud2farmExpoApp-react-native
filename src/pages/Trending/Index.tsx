import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { useTailwind } from "tailwind-rn";

import HeaderComponent from "../../components/HeaderComponent";
import { ModalCalendarComponent } from "../../components/ModalCalendarComponent";
import { ModalCategoryComponent } from "../../components/ModalCategoryComponent";
import { StickyBottomComponent } from "../../components/StickyBottomComponent";
import { TextViewComponent } from "../../components/TextViewComponent";
import { ResponsiveUi } from "../../components/responsive-ui";
import ContainerWrapper from "../../components/wrappers/ContainerWrapper";
import { COLORS } from "../../constants/colors";
import { SCREENS } from "../../constants/screens";
import {
  MetricsSizes,
  PondsData,
  TemperatureType,
  TimeLine,
} from "../../helpers/variables";
import { RootStackScreenProps } from "../../typings/navigation";

const IndexTrendingScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.TRENDING_SCREEN>) => {
  const tailwind = useTailwind();
  const { title }: any = route.params;
  const [pondProperties, setPondProperties] = useState(PondsData[0]);
  const [tempType, setTempType] = useState("Temperature");
  const [timelineValue, setTimelineValue] = useState("15 Minutes");
  const [selectedDate, setSelectedDate] = useState("Feb 25, 2018");
  const [isPondPropsVisible, setIsPondProsVisible] = useState(false);
  const [isTempTypeVisible, setIsTempTypeVisible] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [isSelectedDateisible, setIsSelectedDateVisible] = useState(false);
  const [checkGridView, setCheckGridView] = useState(false);
  const [checkChartView, setCheckChartView] = useState(false);
  const [checkedGridViewData, setCheckedGridViewData] = useState("");
  const [checkedChartViewData, setCheckedChartViewData] = useState("");

  function changeModalPondVisibility(bool: boolean): void {
    setIsPondProsVisible(bool);
  }

  function changeModalTempTypeVisibility(bool: boolean): void {
    setIsTempTypeVisible(bool);
  }

  function changeModalTimelineVisibility(bool: boolean): void {
    setIsTimelineVisible(bool);
  }

  function changeModalDateVisibility(bool: boolean) {
    setIsSelectedDateVisible(bool);
  }
  function handlePondProperties() {
    changeModalPondVisibility(true);
  }

  function handleTempratureType() {
    changeModalTempTypeVisibility(true);
  }

  function handleSelectedDate() {
    changeModalDateVisibility(true);
  }

  function handleTimeline() {
    changeModalTimelineVisibility(true);
  }

  function setDataPond(item: string): void {
    if (item !== "") {
      setPondProperties(item);
      changeModalPondVisibility(false);
    }
  }

  function setDataTemp(item: string): void {
    if (item !== "") {
      setTempType(item);
      changeModalTempTypeVisibility(false);
    }
  }

  function setDataTimeline(item: string): void {
    if (item !== "") {
      setTimelineValue(item);
      changeModalTimelineVisibility(false);
    }
  }

  function setSelectedDateData(item: string): void {
    const pickedDate = moment(item).format("ll");
    setSelectedDate(pickedDate);
  }

  function handleGridView() {
    if (!checkGridView) {
      setCheckedGridViewData("GridView");
    } else {
      setCheckedGridViewData("");
    }
    setCheckGridView(!checkGridView);
  }


  function handleChartView() {
    if (!checkChartView) {
      setCheckedChartViewData("ChartView");
    } else {
      setCheckedChartViewData("");
    }
    setCheckChartView(!checkChartView);
  }

  function handleLoadReport() {
    if (checkedChartViewData.includes("ChartView")) {
      navigation.navigate(SCREENS.CHARTVIEW_SCREEN, { title: pondProperties });
    } else if (checkedGridViewData.includes("GridView")) {
      navigation.navigate(SCREENS.GRIDVIEW_SCREEN, { title: pondProperties });
    }
  }

  return (
    <SafeAreaView
      style={[tailwind("flex-1"), { backgroundColor: COLORS.LIGHT_GREY }]}
    >
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >
        <HeaderComponent title={title} />
        <ModalCalendarComponent
          visible={isSelectedDateisible}
          setData={setSelectedDateData}
          modalTitle="Please Select Date"
          setVisibility={() => changeModalDateVisibility(false)}
          changeModaVisibility={changeModalDateVisibility}
        />

        <ModalCategoryComponent
          categories={PondsData}
          visible={isPondPropsVisible}
          modalTitle="Select Pond"
          setData={setDataPond}
          setVisibility={() => changeModalPondVisibility(false)}
          changeModaVisibility={changeModalPondVisibility}
        />

        <ModalCategoryComponent
          categories={TemperatureType}
          visible={isTempTypeVisible}
          modalTitle="Select Temp Type"
          setData={setDataTemp}
          setVisibility={() => changeModalTempTypeVisibility(false)}
          changeModaVisibility={changeModalTempTypeVisibility}
        />

        <ModalCategoryComponent
          categories={TimeLine}
          visible={isTimelineVisible}
          modalTitle="Select Timeline"
          setData={setDataTimeline}
          setVisibility={() => changeModalTimelineVisibility(false)}
          changeModaVisibility={changeModalTimelineVisibility}
        />

        <ContainerWrapper
          style={[
            tailwind("ml-3 mr-3 mt-10 p-2 rounded-lg"),
            { backgroundColor: COLORS.WHITE },
          ]}
        >
          <TextViewComponent
            value={pondProperties}
            title="Select Your Ponds/Properties"
            action={() => handlePondProperties()}
          />

          <TextViewComponent
            value={tempType}
            title="Select Temprature Type"
            action={() => handleTempratureType()}
          />

          <TextViewComponent
            value={timelineValue}
            title="Select Timeline"
            action={() => handleTimeline()}
          />

          <TextViewComponent
            value={selectedDate}
            title="Select Date"
            action={() => handleSelectedDate()}
          />

          <ContainerWrapper style={[tailwind("pl-3 pr-3 pt-1 pb-2")]}>
            <ResponsiveUi.Text h7 color={COLORS.GREY}>
              Report Type
            </ResponsiveUi.Text>
            <ContainerWrapper style={[tailwind("flex-row")]}>
              <ContainerWrapper style={[tailwind("flex-row")]}>
                <CheckBox
                  title="Grid View"
                  checked={checkGridView}
                  onPress={handleGridView}
                  containerStyle={{
                    backgroundColor: COLORS.WHITE,
                    borderWidth: MetricsSizes.zero,
                  }}
                  textStyle={[
                    {
                      fontSize: 16,
                      fontWeight: "400",
                      color: COLORS.BLACK,
                    },
                  ]}
                />
              </ContainerWrapper>
              <ContainerWrapper style={[tailwind("flex-row")]}>
                <CheckBox
                  title="Chart View"
                  checked={checkChartView}
                  onPress={handleChartView}
                  containerStyle={{
                    backgroundColor: COLORS.WHITE,
                    borderWidth: MetricsSizes.zero,
                  }}
                  textStyle={[
                    {
                      fontSize: 16,
                      fontWeight: "400",
                      color: COLORS.BLACK,
                    },
                  ]}
                />
              </ContainerWrapper>
            </ContainerWrapper>
            <View
              style={[
                tailwind("mb-3 mt-2"),
                { borderColor: COLORS.BG_SECONDARY_COLOR, borderWidth: 1 },
              ]}
            />
          </ContainerWrapper>
          <ContainerWrapper style={[tailwind("justify-center items-center")]}>
            <ResponsiveUi.Button
              bold
              gradient
              // loading={loading}
              title="Load Report"
              colors={[COLORS.PRIMARY_START_COLOR, COLORS.PRIMARY_END_COLORS]}
              style={[tailwind("w-10/12 top-3 mb-10")]}
              action={() => {
                handleLoadReport();
              }}
            />
          </ContainerWrapper>
        </ContainerWrapper>
      </ScrollView>
      <StickyBottomComponent />
    </SafeAreaView>
  );
};

export default IndexTrendingScreen;
