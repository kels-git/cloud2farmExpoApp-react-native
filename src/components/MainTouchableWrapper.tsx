import React, {ReactNode} from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface ExtraIconTextProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
type IconTextProps = TouchableOpacityProps & ExtraIconTextProps;

const MainTouchableWrapper: React.FC<IconTextProps> = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
export default MainTouchableWrapper;
