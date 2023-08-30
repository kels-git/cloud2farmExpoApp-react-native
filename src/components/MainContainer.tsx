import React from 'react';
import {ScrollView} from 'react-native';
import {ContainerProps} from '../typings/Container';

const MainContainer: React.FC<ContainerProps> = props => {
  return (
    <ScrollView contentContainerStyle={props.style}>
      {props.children}
    </ScrollView>
  );
};
export default MainContainer;
