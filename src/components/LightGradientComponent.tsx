import React from 'react';
import {TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useTailwind} from 'tailwind-rn';
import {COLORS} from '../constants/colors';
import {ResponsiveUi} from './responsive-ui';
import {MetricsSizes} from '../helpers/variables';

interface gradientprops {
  title: string;
  action?: () => void;
}

export const LightGradientComponent: React.FC<gradientprops> = ({
  title,
  action,
}) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity onPress={action}>
      <LinearGradient
        colors={['#A88BEB', '#F8CEEC']}
        style={[tailwind('mt-5 mb-5 rounded-lg w-full')]}>
        <ResponsiveUi.Text
          h3
          bold
          color={COLORS.BLACK}
          style={[
            {
              marginHorizontal: title.includes('Trending')
                ? MetricsSizes.large - 6
                : title.includes('Alarm')
                ? MetricsSizes.large + MetricsSizes.small
                : MetricsSizes.regular + 1,
              marginVertical: MetricsSizes.regular + 1,
            },
          ]}>
          {title}
        </ResponsiveUi.Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
