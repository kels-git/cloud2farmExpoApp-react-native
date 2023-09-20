import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { enableScreens } from "react-native-screens";

import HomeStackNavigator from "./home-stack";
import { SCREENS } from "../constants/screens";
import { IndexLoginUserAccount, IndexWelcomeUserAccount } from "../pages";
import { RootStackParamList } from "../typings/navigation";


enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

export const PrivateStack = () => {
  // const isAuthenticated = useSelector(
  //   (state: RootState) => state.auth.isAuthenticated
  // );


  return (
    <Stack.Navigator
      initialRouteName={SCREENS.WELCOME_SCREEN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name={SCREENS.WELCOME_SCREEN}
        component={IndexWelcomeUserAccount}
        options={{
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name={SCREENS.LOGIN_USER}
        component={IndexLoginUserAccount}
        options={{
          animation: "slide_from_right",
        }}
      />

   
        <Stack.Screen
          name={SCREENS.HOME_STACK}
          component={HomeStackNavigator}
          options={{
            animation: "slide_from_right",
          }}
        />
    </Stack.Navigator>
  );
};
