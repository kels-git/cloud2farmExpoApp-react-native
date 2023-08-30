import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/screens';
import {HomeStackParamList, RootStackParamList} from '../typings/navigation';
import {enableScreens} from 'react-native-screens';
import {
  IndexLoginUserAccount,
  IndexWelcomeUserAccount,
} from '../pages';
import {RouteProp} from '@react-navigation/native';
import HomeStackNavigator from './home-stack';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();
// type HomeStackScreenProps<T extends keyof HomeStackParamList> = {
//   navigation: any;
//   route: RouteProp<HomeStackParamList, T>;
// };

export const PrivateStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME_STACK}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name={SCREENS.WELCOME_SCREEN}
        component={IndexWelcomeUserAccount}
        options={{
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name={SCREENS.LOGIN_USER}
        component={IndexLoginUserAccount}
        options={{
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name={SCREENS.HOME_STACK}
        component={HomeStackNavigator}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};
