import React from "react";
import { TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTailwind } from "tailwind-rn";

import { ResponsiveUi } from "./responsive-ui";
import ContainerWrapper from "./wrappers/ContainerWrapper";
import { COLORS } from "../constants/colors";

interface TextViewProps {
  title: string;
  value: string;
  action?: () => void;
}

export const TextViewComponent: React.FC<TextViewProps> = ({
  title,
  value,
  action,
}) => {
  const tailwind = useTailwind();

  return (
    <ContainerWrapper style={[tailwind("pl-3 pr-3 pt-1 pb-2")]}>
      <ResponsiveUi.Text h7 color={COLORS.GREY}>
        {title}
      </ResponsiveUi.Text>
      <ContainerWrapper>
        <TouchableOpacity
          style={[tailwind("flex-row justify-between mt-1")]}
          onPress={action}
        >
          <ResponsiveUi.Text h5 color={COLORS.HIGH_GRAD_BLACK}>
            {value}
          </ResponsiveUi.Text>
          <MaterialCommunityIcons
            size={20}
            color={COLORS.GREY}
            name="chevron-right"
            style={[tailwind("self-center")]}
          />
        </TouchableOpacity>
        <View
          style={[
            tailwind("mb-3 mt-2"),
            { borderColor: COLORS.BG_SECONDARY_COLOR, borderWidth: 1 },
          ]}
        />
      </ContainerWrapper>
    </ContainerWrapper>
  );
};
