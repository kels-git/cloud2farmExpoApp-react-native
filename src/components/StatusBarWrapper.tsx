import React, { useState } from "react";
import { StatusBar, StatusBarStyle, View } from "react-native";
import { COLORS } from "../constants/colors";

interface StatusProps {
  barStyle?: StatusBarStyle;
  backgroundColor?: string;
}

const StatusBarWrapper: React.FC<StatusProps> = ({
  barStyle,
  backgroundColor,
}) => {
  const STYLES = ["default", "dark-content", "light-content"] as const;
  const TRANSITIONS = ["fade", "slide", "none"] as const;
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[1]
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    "fade" | "slide" | "none"
  >(TRANSITIONS[0]);

  return (
    <StatusBar
      animated={true}
      backgroundColor={COLORS.LIGHT_GREY}
      barStyle={statusBarStyle}
      showHideTransition={statusBarTransition}
      hidden={hidden}
    />
  );
};
export default StatusBarWrapper;
