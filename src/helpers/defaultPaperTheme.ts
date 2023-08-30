import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {COLORS} from '../constants/colors';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.PRIMARY_START_COLOR, // Set your primary color
    accent: COLORS.PRIMARY_START_COLOR, // Set your accent color
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Inter-Regular', // Set your desired font family
    },
    medium: {
      fontFamily: 'Inter-Medium',
      'semi-bold': 'Inter-SemiBold', // Set your desired font family
    },
    bold: 'Inter-Bold',
    // Add more font styles as needed
  },
};
