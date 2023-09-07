import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  Modal,
  View,
  useWindowDimensions,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTailwind } from "tailwind-rn";

import { ResponsiveUi } from "./responsive-ui";
import ContainerWrapper from "./wrappers/ContainerWrapper";
import { COLORS } from "../constants/colors";

interface DataPondCategoryProps {
  item: string;
  isLastItem: boolean;
  action?: () => void;
}

export const DataPondCategory: React.FC<DataPondCategoryProps> = ({
  item,
  isLastItem,
  action,
}) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity onPress={action}>
      <ResponsiveUi.Text
        h5
        regular
        color={COLORS.MEDIUM_BLACK}
        style={[
          tailwind(
            "text-center m-4 " +
              `${isLastItem ? "" : "border-b border-light-border"}`,
          ),
        ]}
      >
        {item}
      </ResponsiveUi.Text>
    </TouchableOpacity>
  );
};

interface ModalResource<T> {
  categories: T;
  visible: boolean;
  modalTitle: string;
  setData: (item: string) => void;
  setVisibility: (item: boolean) => void;
  changeModaVisibility: (item: boolean) => void;
}
export const ModalCategoryComponent: React.FC<ModalResource<string[]>> = ({
  setData,
  categories,
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
      transparent
      visible={visible}
      onRequestClose={() => changeModaVisibility(false)}
    >
      <View
        style={[
          tailwind("flex-1 justify-center items-center"),
          {
            backgroundColor: COLORS.BACKGROUND_COLOR,
          },
        ]}
      >
        <View
          style={[
            tailwind("absolute bottom-0 inset-x-px rounded-t-2xl"),
            {
              height: SCREEN_HEIGHT * 0.6,
            },
          ]}
        >
          <ContainerWrapper style={[tailwind("mb-6 items-end")]}>
            <ContainerWrapper
              style={[
                tailwind("w-[35px] h-[35px] justify-center items-center mr-3"),
                {
                  backgroundColor: COLORS.PRIMARY_START_COLOR,
                  borderRadius: 17,
                },
              ]}
            >
              <TouchableOpacity onPress={() => setVisibility(false)}>
                <MaterialCommunityIcons
                  size={25}
                  color={COLORS.WHITE}
                  name="close"
                  style={[tailwind("self-center")]}
                />
              </TouchableOpacity>
            </ContainerWrapper>
          </ContainerWrapper>
          <ContainerWrapper
            style={[
              tailwind("flex-1 rounded-t-2xl"),
              { backgroundColor: COLORS.WHITE },
            ]}
          >
            <ContainerWrapper
              style={[tailwind("flex-row mt-5 justify-between ml-5 mr-5"), {}]}
            >
              <ResponsiveUi.Text
                h4
                bold
                color={COLORS.MEDIUM_BLACK}
                style={[tailwind("flex-1 text-center"), {}]}
              >
                {modalTitle}
              </ResponsiveUi.Text>
            </ContainerWrapper>

            <TouchableOpacity
              onPress={() => {
                changeModaVisibility(false);
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                {categories.map((item: string, index: number) => (
                  <DataPondCategory
                    item={item}
                    key={index}
                    isLastItem={index === categories.length - 1}
                    action={() => onPressItem(item)}
                  />
                ))}
              </ScrollView>
            </TouchableOpacity>
          </ContainerWrapper>
        </View>
      </View>
    </Modal>
  );
};
