import React from 'react';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {COLORS} from '../constants/colors';
import {ResponsiveUi} from './responsive-ui';
import {MetricsSizes} from '../helpers/variables';
import ContainerWrapper from './wrappers/ContainerWrapper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useOrientation} from '../pages/useOrientation';

interface StickyBottomProps {
  actionSearch?: () => void;
  actionSignOut?: () => void;
}

export const StickyBottomComponent: React.FC<StickyBottomProps> = ({
  actionSearch,
  actionSignOut,
}) => {
  const tailwind = useTailwind();
  const orientation = useOrientation();
  const SCREEN_HEIGHT = useWindowDimensions().height;

  return (
    <ContainerWrapper
      style={[
        tailwind('flex-row justify-between pl-5 pr-5 pt-2'),
        {
          backgroundColor: COLORS.WHITE,
          height:
            orientation === 'LANDSCAPE'
              ? SCREEN_HEIGHT * 0.3
              : SCREEN_HEIGHT * 0.1,
          borderTopColor: COLORS.LIGHT_GRAY,
          borderTopWidth: MetricsSizes.tiny - 4,
        },
      ]}>
      <ContainerWrapper style={[tailwind('items-center')]}>
        <TouchableOpacity
          onPress={() => {
            actionSearch;
          }}>
          <MaterialCommunityIcons
            size={orientation === 'LANDSCAPE' ? 40 : 25}
            color={COLORS.PRIMARY_ALTERNATIVE}
            name={'magnify'}
            style={[tailwind('')]}
          />
        </TouchableOpacity>
        <ResponsiveUi.Text h7 bold color={COLORS.BLACK}>
          Search
        </ResponsiveUi.Text>
      </ContainerWrapper>

      <ContainerWrapper style={[tailwind('items-center')]}>
        <TouchableOpacity
          onPress={() => {
            actionSignOut;
          }}>
          <MaterialCommunityIcons
            size={orientation === 'LANDSCAPE' ? 40 : 25}
            color={COLORS.ORANGE}
            name={'account-outline'}
            style={[tailwind('')]}
          />
        </TouchableOpacity>
        <ResponsiveUi.Text h7 bold color={COLORS.BLACK}>
          Log Out
        </ResponsiveUi.Text>
      </ContainerWrapper>
    </ContainerWrapper>
  );
};
