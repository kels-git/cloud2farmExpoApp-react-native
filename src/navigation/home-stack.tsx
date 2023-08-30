import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../typings/navigation';
import {SCREENS} from '../constants/screens';
import {
  IndexChartViewScreen,
  IndexDashBoardScreen,
  IndexGridViewScreen,
  IndexProductionScreen,
  IndexTestScreen,
  IndexTrendingScreen,
  IndexUserHomeAccount,
} from '../pages';

// Import your screen components here

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={SCREENS.HOME_SCREEN} // Set the initial screen for the stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <HomeStack.Screen
        name={SCREENS.HOME_SCREEN}
        component={IndexUserHomeAccount}
      />
      <HomeStack.Screen
        name={SCREENS.DASHBOARD_SCREEN}
        component={IndexDashBoardScreen}
      />
      <HomeStack.Screen
        name={SCREENS.PRODUCTION_SCREEN}
        component={IndexProductionScreen}
      />

      <HomeStack.Screen
        name={SCREENS.TRENDING_SCREEN}
        component={IndexTrendingScreen}
      />

      <HomeStack.Screen
        name={SCREENS.CHARTVIEW_SCREEN}
        component={IndexChartViewScreen}
      />

      <HomeStack.Screen
        name={SCREENS.GRIDVIEW_SCREEN}
        component={IndexGridViewScreen}
      />
        <HomeStack.Screen
        name={SCREENS.TEST_SCREEN}
        component={IndexTestScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
