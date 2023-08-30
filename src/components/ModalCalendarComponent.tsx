import React, {useState} from 'react';
import {TouchableOpacity, Modal, View, useWindowDimensions} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {COLORS} from '../constants/colors';
import {ResponsiveUi} from './responsive-ui';
import ContainerWrapper from './wrappers/ContainerWrapper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Calendar} from 'react-native-calendars';

interface ModalResource {
  visible: boolean;
  modalTitle: string;
  setData: (item: string) => void;
  setVisibility: (item: boolean) => void;
  changeModaVisibility: (item: boolean) => void;
}
export const ModalCalendarComponent: React.FC<ModalResource> = ({
  setData,
  modalTitle,
  visible,
  setVisibility,
  changeModaVisibility,
}) => {
  const tailwind = useTailwind();
  const SCREEN_HEIGHT = useWindowDimensions().height;

  const onPressItem = (item: string) => {
    setData(item);
    changeModaVisibility(false);
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => changeModaVisibility(false)}>
      <View
        style={[
          tailwind('flex-1 justify-center items-center'),
          {
            backgroundColor: COLORS.BACKGROUND_COLOR,
          },
        ]}>
        <View
          style={[
            tailwind('absolute bottom-0 inset-x-px rounded-t-2xl'),
            {
              height: SCREEN_HEIGHT * 0.7,
            },
          ]}>
          <ContainerWrapper style={[tailwind('mb-6 items-end')]}>
            <ContainerWrapper
              style={[
                tailwind('w-[35px] h-[35px] justify-center items-center mr-3'),
                {backgroundColor: COLORS.PRIMARY_START_COLOR, borderRadius: 17},
              ]}>
              <TouchableOpacity onPress={() => setVisibility(false)}>
                <MaterialCommunityIcons
                  size={25}
                  color={COLORS.WHITE}
                  name={'close'}
                  style={[tailwind('self-center')]}
                />
              </TouchableOpacity>
            </ContainerWrapper>
          </ContainerWrapper>
          <ContainerWrapper
            style={[
              tailwind('flex-1 rounded-t-2xl'),
              {backgroundColor: COLORS.WHITE},
            ]}>
            <ContainerWrapper
              style={[
                tailwind('flex-row mt-5 justify-between ml-5 mr-5 mb-5'),
                {},
              ]}>
              <ResponsiveUi.Text
                h4
                bold
                color={COLORS.MEDIUM_BLACK}
                style={[tailwind('flex-1 text-center'), {}]}>
                {modalTitle}
              </ResponsiveUi.Text>
            </ContainerWrapper>

            <TouchableOpacity
              onPress={() => {
                changeModaVisibility(false);
              }}>
              <Calendar
                onDayPress={day => {
                  onPressItem(day.dateString);
                  console.log('selected day==> ', day.dateString);
                }}
              />
            </TouchableOpacity>
          </ContainerWrapper>
        </View>
      </View>
    </Modal>
  );
};
