import React, { useEffect, useState } from "react";
import ContainerWrapper from "../../components/wrappers/ContainerWrapper";
import { ResponsiveUi } from "../../components/responsive-ui";
import { SCREENS } from "../../constants/screens";
import { RootStackScreenProps } from "../../typings/navigation";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS } from "../../constants/colors";
import {
  DashBoardOverviewTest,
  MetricsSizes,
  PondHeader,
  PondsData,
} from "../../helpers/variables";
import { useTailwind } from "tailwind-rn";
import HeaderComponent from "../../components/HeaderComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ModalCategoryComponent } from "../../components/ModalCategoryComponent";
import CardGridComponent from "../../components/CardGridComponent";
import { NodataDisplay } from "../../assets";
import { StickyBottomComponent } from "../../components/StickyBottomComponent";

interface pondDataType {
  name: string;
  details: PondDetail[]; // Use PondDetail[] to specify an array of PondDetail objects
}

interface PondDetail {
  view_feedpump_id?: number;
  view_backwash_id?: number;
  view_waterlevel_id?: number;
  view_Power_id?: number;
  title: string;
  status: string;
  volume?: string;
  LastRunTime?: string;
  watertemp?: string;
  reservoirwaterlevel?: string;
}

const IndexDashBoardScreen = ({
  route,
  navigation,
}: RootStackScreenProps<SCREENS.DASHBOARD_SCREEN>) => {
  const { title }: any = route.params;
  const tailwind = useTailwind();
  const [selectedPondData, setSelectedPondData] = useState("");
  const [tempWaterData, setTempWaterData] = useState<
    { watertemp: string; reservoirwaterlevel: string }[]
  >([]);
  const [selectedTempWater, setSelectedTempWater] = useState<
    { watertemp?: string; reservoirwaterlevel?: string }[]
  >([]);

  const [selectedPondDataDetails, setSelectedPondDataDetails] = useState<
    PondDetail[]
  >([]);
  const [isPondVisible, setIsPondVisible] = useState(false);
  const pondDataView: pondDataType[] = DashBoardOverviewTest;

  function handlePondDataSelected(item: string): void {
    if (item !== "") {
      setIsPondVisible(false);
      setSelectedPondData(item);
      const selectedPondData = pondDataView.find((type) => type.name === item);
      if (selectedPondData) {
        setSelectedPondDataDetails(selectedPondData.details);
        console.log("this details-> ", selectedPondDataDetails);
      }
    }
  }

  function changeModaVisibility(bool: boolean): void {
    setIsPondVisible(bool);
  }
  useEffect(() => {
    // Map selectedPondDataDetails to extract watertemp and reservoirwaterlevel values
    const newWaterTempData = selectedPondDataDetails.map((item) => ({
      watertemp: item.watertemp || "",
      reservoirwaterlevel: item.reservoirwaterlevel || "",
    }));

    // Update the state with the new data
    setTempWaterData(newWaterTempData);
  }, [selectedPondDataDetails]);

  console.log("=====>", selectedTempWater);

  return (
    <SafeAreaView
      style={[tailwind("flex-1"), { backgroundColor: COLORS.LIGHT_GREY }]}
    >
      <ScrollView
        contentContainerStyle={[tailwind("flex-grow"), {}]}
        showsVerticalScrollIndicator={false}
      >
        <HeaderComponent title={title} />
        <ModalCategoryComponent
          categories={PondsData}
          visible={isPondVisible}
          modalTitle={"Select"}
          setData={handlePondDataSelected}
          setVisibility={() => changeModaVisibility(false)}
          changeModaVisibility={changeModaVisibility}
        />

        <ContainerWrapper style={[tailwind("mr-4 ml-4 mt-2")]}>
          <ResponsiveUi.Text
            bold
            h6
            color={COLORS.GREY}
            style={[tailwind("mb-2")]}
          >
            Select Your Ponds/Properties
          </ResponsiveUi.Text>
          <TouchableOpacity
            style={[
              tailwind("flex-row flex-1 rounded justify-between"),
              { padding: 4 },
            ]}
            onPress={() => {
              changeModaVisibility(true);
            }}
          >
            <ResponsiveUi.Text
              h5
              color={
                selectedPondData.includes("Select")
                  ? COLORS.TEXT_GREY
                  : COLORS.BLACK
              }
              tailwind="font-regular"
            >
              {"Select"}
            </ResponsiveUi.Text>
            <MaterialCommunityIcons
              size={25}
              color={COLORS.TEXT_GREY}
              name={"chevron-right"}
              style={[tailwind("self-center")]}
            />
          </TouchableOpacity>
          <ContainerWrapper
            style={[tailwind("items-center justify-center mt-10")]}
          >
            <ResponsiveUi.Text h2 bold color={COLORS.HIGH_GRAD_BLACK}>
              {selectedPondData}
            </ResponsiveUi.Text>
          </ContainerWrapper>
        </ContainerWrapper>

        {selectedPondData === "" ? (
          <ContainerWrapper
            style={[
              tailwind("flex-1 justify-center items-center mt-10"),
              { backgroundColor: COLORS.LIGHT_GREY },
            ]}
          >
            <Image
              source={NodataDisplay}
              resizeMode={"cover"}
              style={[
                tailwind("mt-2 mb-20"),
                {
                  width: 200,
                  height: 200,
                },
              ]}
            />
          </ContainerWrapper>
        ) : (
          <ContainerWrapper>
            <ContainerWrapper
              style={[
                tailwind(
                  "flex-1 justify-center items-center mt-5 h-full mb-5"
                ),
                {},
              ]}
            >
              <ContainerWrapper
                style={[
                  tailwind("w-full justify-around"),
                  {
                    backgroundColor: COLORS.BG_COLOR,
                    borderTopLeftRadius: MetricsSizes.medium + 1,
                    borderTopRightRadius: MetricsSizes.medium + 1,
                    paddingHorizontal: MetricsSizes.small,
                  },
                ]}
              >
                {selectedPondDataDetails.map((item: any, index: any) => (
                  <>
                    <CardGridComponent
                      isDashBoard={true}
                      key={item.title}
                      gridTitle={item.title}
                      gridStatus={item.status}
                      gridVolume={item.volume}
                      gridTime={item.LastRunTime}
                      gridIconDisplay={PondHeader.filter((icons) => icons.type)}
                      gridTemperature={tempWaterData.filter(
                        (tempItem) => tempItem.watertemp
                      )}
                      gridWaterReservoir={tempWaterData.filter(
                        (tempItem) => tempItem.reservoirwaterlevel
                      )} //
                      isLastItem={index === selectedPondDataDetails.length - 1}
                    />
                  </>
                ))}
              </ContainerWrapper>
            </ContainerWrapper>
          </ContainerWrapper>
        )}
      </ScrollView>
      <StickyBottomComponent />
    </SafeAreaView>
  );
};

export default IndexDashBoardScreen;
