import { ParamListBase, RouteProp } from "@react-navigation/native";

import { SCREENS } from "../constants/screens";

interface ISubNavigator<T extends ParamListBase, K extends keyof T> {
  screen: K;
  params?: T[K];
  initial?: boolean;
}

export type HomeStackParamList = {
  [SCREENS.HOME_SCREEN]: undefined;
  [SCREENS.DASHBOARD_SCREEN]: undefined;
  [SCREENS.PRODUCTION_SCREEN]: undefined;
  [SCREENS.TRENDING_SCREEN]: undefined;
  [SCREENS.CHARTVIEW_SCREEN]: undefined;
  [SCREENS.GRIDVIEW_SCREEN]: undefined;
  [SCREENS.GRIDVIEW_PRODUCTION_SCREEN]: undefined;
  [SCREENS.TEST_SCREEN]: undefined;
};

export type RootStackParamList = {
  [SCREENS.MAIN_STACK]: undefined;
  [SCREENS.LOGIN_USER]: undefined;
  [SCREENS.WELCOME_SCREEN]: undefined;
  [SCREENS.HOME_STACK]: ISubNavigator<
    HomeStackParamList,
    keyof HomeStackParamList
  >;
};

export type StackParams = RootStackParamList & HomeStackParamList;

export type RootStackScreenProps<T extends keyof StackParams> = {
  navigation: any;
  route: RouteProp<StackParams, T>;
};
