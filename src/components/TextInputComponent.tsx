import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTailwind } from "tailwind-rn";

import { ResponsiveUi } from "./responsive-ui";
import ContainerWrapper from "./wrappers/ContainerWrapper";
import { SuccessImg } from "../assets";
import { COLORS } from "../constants/colors";
import { MetricsSizes } from "../helpers/variables";

interface InputProps {
  value: string;
  label: string;
  isInputFocused: boolean;
  isInputValid: boolean;
  setValue: (item: string) => void;
  sucessMark?: boolean;
  imageIconPass?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onEndEditing?: () => void;
}

const TextInputComponent: React.FC<InputProps> = ({
  value,
  label,
  setValue,
  isInputFocused,
  isInputValid,
  sucessMark,
  imageIconPass,
  onBlur,
  onFocus,
  onEndEditing,
  ...props
}) => {
  const tailwind = useTailwind();
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ContainerWrapper
      style={[
        tailwind("flex-row"),
        {
          backgroundColor: COLORS.LIGHT_GREY,
          padding: MetricsSizes.small - 2,
          borderRadius: MetricsSizes.regular + 1,
          marginVertical: MetricsSizes.tiny,
        },
      ]}
    >
      <TextInput
        mode="flat"
        value={value}
        onChangeText={(text) => setValue(text)}
        label={
          <ResponsiveUi.Text
            color={isInputFocused ? COLORS.PRIMARY_START_COLOR : COLORS.GREY}
            style={{
              fontWeight: "600",
              fontSize: isInputFocused ? 24 : 20,
            }}
          >
            {label}
          </ResponsiveUi.Text>
        }
        error={!isInputValid}
        selectionColor={COLORS.PRIMARY_START_COLOR}
        underlineColor={COLORS.PRIMARY_START_COLOR}
        activeUnderlineColor={COLORS.PRIMARY_START_COLOR}
        textColor={COLORS.HIGH_GRAD_BLACK}
        contentStyle={{
          backgroundColor: COLORS.LIGHT_GREY,
          fontSize: 20,
        }}
        underlineStyle={{ marginLeft: 12 }}
        style={{ flex: 1, fontSize: MetricsSizes.regular + 1 }}
        onFocus={onFocus}
        onBlur={onBlur}
        onEndEditing={() => onEndEditing}
        secureTextEntry={imageIconPass ? !hidePassword : undefined}
        {...props}
      />
      {sucessMark && (
        <Image
          source={SuccessImg}
          resizeMode="contain"
          style={[
            tailwind("mt-2 self-center"),
            {
              width: MetricsSizes.regular,
              height: MetricsSizes.regular,
              marginLeft: -15,
            },
          ]}
        />
      )}

      {imageIconPass && (
        <TouchableOpacity
          style={[tailwind("mt-2 self-center"), { marginLeft: -15 }]}
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <MaterialCommunityIcons
            size={20}
            color={COLORS.GREY}
            name={!hidePassword ? "eye-off-outline" : "eye-outline"}
          />
        </TouchableOpacity>
      )}
    </ContainerWrapper>
  );
};
export default TextInputComponent;
