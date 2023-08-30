import {ReactNode, ComponentProps} from 'react';
import {TextInputProps} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ExtraInputProps {
  label: ReactNode;
  icon?: ComponentProps<typeof MaterialCommunityIcons>['name'];
  isPasswordIcon?: boolean;
  isPasswordText?: boolean;
  isValid?: boolean;
  hasError?: boolean;
}

export type InputProps = TextInputProps & ExtraInputProps;
