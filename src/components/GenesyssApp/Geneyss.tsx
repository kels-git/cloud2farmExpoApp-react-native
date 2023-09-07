import React from "react";
import { ImageBackground, ScrollView, Image } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

import { BackgroundImg, Cloudfarmlogo } from "../../assets";
import { COLORS } from "../../constants/colors";
import { MetricsSizes } from "../../helpers/variables";
import { useOrientation } from "../../pages/useOrientation";
import { ResponsiveUi } from "../responsive-ui";
import ContainerWrapper from "../wrappers/ContainerWrapper";

const GenesyssApp = () => {
  const tailwind = useTailwind();
  const orientation = useOrientation();

  return (
    <ImageBackground
      style={[tailwind("flex-grow"), { backgroundColor: COLORS.WHITE }]}
      source={BackgroundImg}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[tailwind("flex-grow")]}
      >
        <ContainerWrapper
          style={[
            tailwind("flex-1 justify-center items-center"),
            {
              marginTop:
                orientation === "LANDSCAPE"
                  ? MetricsSizes.xlarge + MetricsSizes.medium
                  : -MetricsSizes.xlarge + MetricsSizes.medium,
            },
          ]}
        >
          <ContainerWrapper
            style={[
              tailwind("rounded-2xl justify-center items-center"),
              {
                width: "50%",
                height: orientation === "LANDSCAPE" ? "40%" : "20%",
                backgroundColor: COLORS.BACKGROUND_COLOR_ALT,
              },
            ]}
          >
            <Image
              style={[
                tailwind(""),
                {
                  width:
                    orientation === "LANDSCAPE"
                      ? MetricsSizes.xxxlarge
                      : MetricsSizes.xxlarge + MetricsSizes.large,
                  height:
                    orientation === "LANDSCAPE"
                      ? MetricsSizes.xxlarge + MetricsSizes.large
                      : MetricsSizes.xxlarge + MetricsSizes.tiny,
                },
              ]}
              source={Cloudfarmlogo}
              resizeMode="contain"
            />
          </ContainerWrapper>

          <ContainerWrapper
            style={[
              tailwind("justify-center items-center"),
              {
                marginTop:
                  orientation === "LANDSCAPE"
                    ? MetricsSizes.xlarge
                    : MetricsSizes.xlarge + MetricsSizes.xxlarge,
                marginBottom:
                  orientation === "LANDSCAPE"
                    ? MetricsSizes.large
                    : MetricsSizes.zero,
              },
            ]}
          >
            <ResponsiveUi.Text xl bold color={COLORS.WHITE}>
              Farm2Cloud
            </ResponsiveUi.Text>
            <ResponsiveUi.Text h1 regular color={COLORS.WHITE}>
              is a complete solution for
            </ResponsiveUi.Text>
            <ResponsiveUi.Text h1 regular color={COLORS.WHITE}>
              optimizing the management
            </ResponsiveUi.Text>
            <ResponsiveUi.Text h1 regular color={COLORS.WHITE}>
              of Acquaculture farms
            </ResponsiveUi.Text>
          </ContainerWrapper>
        </ContainerWrapper>
      </ScrollView>
    </ImageBackground>
  );
};

export default GenesyssApp;
