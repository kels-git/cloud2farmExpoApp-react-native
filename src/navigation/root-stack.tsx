import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { PrivateStack } from "./private-stack";
import { SCREENS } from "../constants/screens";
import { StackParams } from "../typings/navigation";

const Stack = createNativeStackNavigator<StackParams>();

export const RootNavigation = () => {
  console.log("Test==> ");

  return (
    <>
      <Stack.Navigator
        initialRouteName={SCREENS.MAIN_STACK}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREENS.MAIN_STACK} component={PrivateStack} />
      </Stack.Navigator>
    </>
  );
};
