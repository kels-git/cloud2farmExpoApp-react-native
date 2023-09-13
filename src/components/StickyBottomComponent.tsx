import React from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTailwind } from "tailwind-rn";
import { ResponsiveUi } from "./responsive-ui";
import ContainerWrapper from "./wrappers/ContainerWrapper";
import { COLORS } from "../constants/colors";
import { MetricsSizes } from "../helpers/variables";
import { useOrientation } from "../pages/useOrientation";

export function StickyBottomComponent({}) {
  const tailwind = useTailwind();
  const orientation = useOrientation();
  const SCREEN_HEIGHT = useWindowDimensions().height;
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  // const user = useSelector((state: RootState) => state.auth.user);

  function handleLogout() {}

  return (
    <ContainerWrapper
      style={[
        tailwind("flex-row justify-between pl-5 pr-5 pt-2"),
        {
          backgroundColor: COLORS.WHITE,
          height:
            orientation === "LANDSCAPE"
              ? SCREEN_HEIGHT * 0.3
              : SCREEN_HEIGHT * 0.1,
          borderTopColor: COLORS.LIGHT_GRAY,
          borderTopWidth: MetricsSizes.tiny - 4,
        },
      ]}
    >
      <ContainerWrapper style={[tailwind("w-11/12 mt-4 mb-4 items-end")]}>
        <TouchableOpacity
          style={[tailwind("items-center justify-center")]}
          onPress={handleLogout}
        >
          <MaterialCommunityIcons
            size={30}
            color={COLORS.ORANGE}
            name="account-outline"
          />
          <ResponsiveUi.Text h7 bold color={COLORS.PRIMARY}>
            Log Out
          </ResponsiveUi.Text>
        </TouchableOpacity>
      </ContainerWrapper>
    </ContainerWrapper>
  );
}
