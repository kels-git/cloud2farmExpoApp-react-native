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
import { PondSite, PondsData } from "../../helpers/variables";
import { RootStackScreenProps } from "../../typings/navigation";
import { dropShadow } from "../../components/wrappers/drop-shadow";

const IndexProductionScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.PRODUCTION_SCREEN>) => {
  const tailwind = useTailwind();
  const { title }: any = route.params;
  const [pondSite, setPondSite] = useState(PondSite[0]);
  const [pondName, setPondName] = useState(PondsData[0]);
  const [isPondPropsVisible, setIsPondProsVisible] = useState(false);
  const [isPondNameVisible, setIsPondNameVisible] = useState(false);

  function changeModalPondSiteVisibility(bool: boolean): void {
    setIsPondProsVisible(bool);
  }

  function changeModalPondNameVisibility(bool: boolean): void {
    setIsPondNameVisible(bool);
  }

  function handlePondSite() {
    changeModalPondSiteVisibility(true);
  }

  function handlePondName() {
    changeModalPondNameVisibility(true);
  }

  function setDataPondSite(item: string): void {
    if (item !== "") {
      setPondSite(item);
      changeModalPondSiteVisibility(false);
    }
  }

  function setDataPondName(item: string): void {
    if (item !== "") {
      setPondName(item);
      changeModalPondNameVisibility(false);
    }
  }

  function handleLoadReport() {
    navigation.navigate(SCREENS.GRIDVIEW_PRODUCTION_SCREEN, { title: title });
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

        <ModalCategoryComponent
          categories={PondSite}
          visible={isPondPropsVisible}
          modalTitle="Select Pond"
          setData={setDataPondSite}
          setVisibility={() => changeModalPondSiteVisibility(false)}
          changeModaVisibility={changeModalPondSiteVisibility}
        />

        <ModalCategoryComponent
          categories={PondsData}
          visible={isPondNameVisible}
          modalTitle="Pond Name"
          setData={setDataPondName}
          setVisibility={() => changeModalPondNameVisibility(false)}
          changeModaVisibility={changeModalPondNameVisibility}
        />

        <ContainerWrapper
          style={[
            tailwind("ml-3 mr-3 mt-10 mb-10 p-2 rounded-lg"),
            { backgroundColor: COLORS.WHITE },
            dropShadow["1x"],
          ]}
        >
          <TextViewComponent
            value={pondSite}
            title="Select Your Site"
            action={() => handlePondSite()}
          />

          <TextViewComponent
            value={pondName}
            title="Pond Name"
            action={() => handlePondName()}
          />

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

export default IndexProductionScreen;
