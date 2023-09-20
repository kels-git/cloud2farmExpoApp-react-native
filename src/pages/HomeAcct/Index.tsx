import React from "react";
import {
  ScrollView,
  ImageBackground,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTailwind } from "tailwind-rn";

import { Cloudfarmlogo, backgroundImageDisplay } from "../../assets";
import CardGridComponent from "../../components/CardGridComponent";
import { ResponsiveUi } from "../../components/responsive-ui";
import ContainerWrapper from "../../components/wrappers/ContainerWrapper";
import { COLORS } from "../../constants/colors";
import { SCREENS } from "../../constants/screens";
import { MetricsSizes, OverviewScreenIcons } from "../../helpers/variables";
import { RootStackScreenProps } from "../../typings/navigation";
import StatusBarWrapper from "../../components/StatusBarWrapper";

const IndexUserHomeAccount = ({
  navigation,
}: RootStackScreenProps<SCREENS.HOME_SCREEN>) => {
  const tailwind = useTailwind();

  function viewContent(item: any) {
    if (item.view_dashboard_id) {
      navigation.navigate(SCREENS.DASHBOARD_SCREEN, { title: item.title });
    } else if (item.view_production_id) {
      navigation.navigate(SCREENS.PRODUCTION_SCREEN, { title: item.title });
    } else if (item.view_trending_id) {
      navigation.navigate(SCREENS.TRENDING_SCREEN, { title: item.title });
    }
  }

console.log('text==>')

  return (
    <SafeAreaView
      style={[tailwind("flex-1"), { backgroundColor: COLORS.LIGHT_GREY }]}
    >
      <StatusBarWrapper />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[tailwind(" flex-grow"), {}]}
      >
        <ContainerWrapper
          style={[
            tailwind("flex-1 items-center justify-center"),
            { backgroundColor: COLORS.LIGHT_GREY },
          ]}
        >
          <Image
            style={[
              tailwind("mt-2 mb-10"),
              {
                width: MetricsSizes.xxlarge,
                height: MetricsSizes.xxlarge,
              },
            ]}
            source={Cloudfarmlogo}
            resizeMode="contain"
          />
          <View
            style={[
              tailwind("rounded-xl  p-1 mt-10"),
              {
                backgroundColor: COLORS.WHITE,
                marginHorizontal: 20,
                width: "94%",
              },
            ]}
          >
            <ContainerWrapper
              style={[tailwind("items-center justify-center ml-5 mr-5")]}
            >
              <ContainerWrapper
                style={[
                  tailwind(
                    "w-full flex-row flex-wrap justify-around mt-10 mb-10"
                  ),
                  {
                    paddingHorizontal: MetricsSizes.small,
                    paddingTop: MetricsSizes.medium,
                  },
                ]}
              >
                {OverviewScreenIcons.map((item: any, index: any) => (
                  <CardGridComponent
                    key={index}
                    gridTitle={item.title}
                    gridIcon={item.type}
                    action={() => viewContent(item)}
                  />
                ))}
              </ContainerWrapper>
            </ContainerWrapper>
          </View>
          <ContainerWrapper style={[tailwind("w-11/12 mt-4 mb-4 items-end")]}>
            <TouchableOpacity style={[tailwind("items-center justify-center")]}>
              <MaterialCommunityIcons
                size={30}
                color={COLORS.PRIMARY}
                name="account-outline"
              />
              <ResponsiveUi.Text h7 bold color={COLORS.PRIMARY}>
                Log Out
              </ResponsiveUi.Text>
            </TouchableOpacity>
          </ContainerWrapper>
        </ContainerWrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IndexUserHomeAccount;
