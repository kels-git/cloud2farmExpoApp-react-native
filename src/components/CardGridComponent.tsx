import React, { useCallback } from "react";
import { useTailwind } from "tailwind-rn";
import { COLORS } from "../constants/colors";
import { MetricsSizes } from "../helpers/variables";
import { ResponsiveUi } from "./responsive-ui";
import ContainerWrapper from "./wrappers/ContainerWrapper";
import {
  GestureResponderEvent,
  Platform,
  TouchableOpacity,
  Image,
  View,
  Text
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen';

interface CardGridOverViewProps {
  gridTitle?: string;
  gridIcon?: any;
  isDashBoard?: boolean;
  gridStatus?: string;
  gridVolume?: string;
  gridTime?: string;
  gridIconDisplay?: any[];
  isLastItem?: boolean;
  gridTemperature?: any[];
  gridWaterReservoir?: any[];
  action?: ((event: GestureResponderEvent) => void) | undefined;
}

const CardGridComponent: React.FC<CardGridOverViewProps> = ({
  gridTitle,
  gridIcon,
  action,
  isDashBoard,
  gridStatus,
  gridVolume,
  gridTime,
  gridIconDisplay,
  isLastItem,
  gridTemperature,
  gridWaterReservoir,
}) => {
  const tailwind = useTailwind();


  return isDashBoard ? (
    <>
      <ContainerWrapper
        style={[
          tailwind(""),
          {
            backgroundColor: "red",
            overflow: Platform.OS === "android" ? "hidden" : "visible",
            borderRadius: MetricsSizes.regular + 1,
            marginBottom: MetricsSizes.medium,
            // width: '45%',
            shadowColor: COLORS.GREY,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 11,
          },
        ]}
      >
        <ContainerWrapper
          style={[tailwind("flex-row"), { backgroundColor: COLORS.WHITE }]}
        >
          <ContainerWrapper
            style={[
              tailwind("justify-center items-center p-2 flex-row flex-1"),
              {},
            ]}
          >
            {gridIconDisplay?.map((item, index) => {
              if (item.title === gridTitle) {
                return (
                  <ContainerWrapper
                    style={[tailwind("items-center justify-center")]}
                  >
                    <Image
                      key={index} // Make sure to add a unique key for each icon
                      source={item.type}
                      resizeMode={"cover"}
                      style={{
                        width: MetricsSizes.xlarge - MetricsSizes.small,
                        height: MetricsSizes.xlarge - MetricsSizes.small,
                      }}
                    />
                    <ResponsiveUi.Text
                      h7
                      bold
                      color={COLORS.MEDIUM_BLACK}
                      style={[tailwind("mt-2 mb-2")]}
                    >
                      {gridTitle}
                    </ResponsiveUi.Text>
                  </ContainerWrapper>
                );
              }
            })}
          </ContainerWrapper>

          <ContainerWrapper
            style={[tailwind("justify-center items-center p-2.5 flex-2"), {}]}
          >
            <ContainerWrapper
              style={[tailwind("w-full justify-center items-center")]}
            >
              <ResponsiveUi.Text
                h7
                color={COLORS.MEDIUM_BLACK}
                style={[tailwind("")]}
              >
                {gridTitle === "Power" ? "Last Check" : gridTime}
              </ResponsiveUi.Text>
              <ResponsiveUi.Text
                h7
                color={COLORS.MEDIUM_BLACK}
                style={[tailwind("")]}
              >
                {gridTitle === "Feed Pump"
                  ? "Total Feed : "
                  : gridTitle === "Power"
                  ? ""
                  : "Total Usage : "}{" "}
                {gridTitle === "Power" ? gridTime : gridVolume}
              </ResponsiveUi.Text>
            </ContainerWrapper>
          </ContainerWrapper>

          <ContainerWrapper
            style={[tailwind("justify-center items-center flex-1")]}
          >
            <ContainerWrapper
              style={[
                tailwind(""),
                {
                  padding: 18,
                  backgroundColor:
                    gridStatus === "Idle"
                      ? COLORS.GREEN_BG
                      : COLORS.PRIMARY_START_COLOR,
                },
              ]}
            >
              <ResponsiveUi.Text h5 color={COLORS.WHITE}>
                {gridStatus}
              </ResponsiveUi.Text>
            </ContainerWrapper>
          </ContainerWrapper>
        </ContainerWrapper>
      </ContainerWrapper>
      {isLastItem ? (
        <ContainerWrapper
          style={[tailwind("flex-row justify-around mt-4 mb-4")]}
        >
          {gridTemperature?.map((tempItem, index) => (
            <ContainerWrapper
              key={index}
              style={[
                tailwind(
                  "pt-7 pb-7 pl-7 pr-7 items-center justify-center rounded-lg"
                ),
                { backgroundColor: COLORS.GREEN_BG },
              ]}
            >
              <ResponsiveUi.Text h7 color={COLORS.WHITE}>
                {"Temperature"}
              </ResponsiveUi.Text>
              <ResponsiveUi.Text h2 color={COLORS.WHITE}>
                {tempItem.watertemp}
              </ResponsiveUi.Text>
            </ContainerWrapper>
          ))}

          {gridWaterReservoir?.map((tempWater, index) => (
            <ContainerWrapper
              key={index}
              style={[
                tailwind("p-2 items-center justify-center rounded-lg"),
                { backgroundColor: COLORS.PRIMARY_START_COLOR },
              ]}
            >
              <ResponsiveUi.Text h7 color={COLORS.WHITE}>
                {"Reservoir Water level"}
              </ResponsiveUi.Text>
              <ResponsiveUi.Text h2 color={COLORS.WHITE}>
                {tempWater.reservoirwaterlevel}
              </ResponsiveUi.Text>
            </ContainerWrapper>
          ))}
        </ContainerWrapper>
      ) : null}
    </>
  ) : (
    <TouchableOpacity
      onPress={action}
      style={[
        tailwind(""),
        {
          overflow: Platform.OS === "android" ? "hidden" : "visible",
          borderRadius: MetricsSizes.regular + 1,
          marginBottom: MetricsSizes.medium,
          width: "45%",
          shadowColor: "#2D368A",
          shadowOffset: {
            width: MetricsSizes.zero,
            height: MetricsSizes.tiny - 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: MetricsSizes.small + 1,
        },
      ]}
    >
      <View
        style={[
          tailwind("justify-center items-center pt-5 pb-5 overflow-hidden"),
          {
            backgroundColor: COLORS.WHITE,
          },
        ]}
        // onLayout={onLayoutRootView}
      >
        <Image
          source={gridIcon}
          resizeMode={"cover"}
          style={{
            width: MetricsSizes.large + MetricsSizes.regular,
            height: MetricsSizes.large + MetricsSizes.regular,
          }}
        />
        <ResponsiveUi.Text
          h7
          color={COLORS.MEDIUM_BLACK}
          style={[tailwind("mt-2 font-bold"),]}
        >
          {gridTitle}
        </ResponsiveUi.Text>
       
      </View>
    </TouchableOpacity>
  );
};

export default CardGridComponent;
