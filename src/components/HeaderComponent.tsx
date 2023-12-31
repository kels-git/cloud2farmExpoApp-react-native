import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTailwind } from "tailwind-rn";

import { ResponsiveUi } from "./responsive-ui";
import ContainerWrapper from "./wrappers/ContainerWrapper";
import { COLORS } from "../constants/colors";

interface HeaderProps {
  title: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ title }) => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <>
      <ContainerWrapper style={[tailwind("pt-2 pb-2")]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={[tailwind("flex-row items-center ml-2 mr-2")]}
        >
          <MaterialIcons
            size={32}
            color={COLORS.HIGH_GRAD_BLACK}
            name="arrow-back"
          />

          <ResponsiveUi.Text
            regular
            h6
            color={COLORS.HIGH_GRAD_BLACK}
            style={[tailwind("text-center")]}
          >
            {title}
          </ResponsiveUi.Text>
        </TouchableOpacity>
      </ContainerWrapper>
    </>
  );
};
export default HeaderComponent;
