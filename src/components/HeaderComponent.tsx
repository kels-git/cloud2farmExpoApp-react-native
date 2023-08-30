import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {ResponsiveUi} from './responsive-ui';
import {COLORS} from '../constants/colors';
import {TouchableOpacity} from 'react-native';
import ContainerWrapper from './wrappers/ContainerWrapper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({title}) => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <>
      <ContainerWrapper style={[tailwind('pt-2 pb-2 mt-10')]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={[tailwind('flex-row items-center ml-2 mr-2')]}>
          <MaterialIcons
            size={32}
            color={COLORS.HIGH_GRAD_BLACK}
            name={'arrow-back'}
          />

          <ResponsiveUi.Text
            regular
            h6
            color={COLORS.HIGH_GRAD_BLACK}
            style={[tailwind('text-center')]}>
            {title}
          </ResponsiveUi.Text>
        </TouchableOpacity>
      </ContainerWrapper>
    </>
  );
};
export default HeaderComponent;
