import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, ScrollView, View, Image} from 'react-native';
import {Cloudfarmlogo, backgroundImageDisplay} from '../../assets';
import {COLORS} from '../../constants/colors';
import {useTailwind} from 'tailwind-rn';
import {SCREENS} from '../../constants/screens';
import {RootStackScreenProps} from '../../typings/navigation';
import ContainerWrapper from '../../components/wrappers/ContainerWrapper';
import {ResponsiveUi} from '../../components/responsive-ui';
import TextInputComponent from '../../components/TextInputComponent';
import MainTouchableWrapper from '../../components/MainTouchableWrapper';
import {MetricsSizes} from '../../helpers/variables';

const IndexLoginUserEmail = ({
  navigation,
}: RootStackScreenProps<SCREENS.LOGIN_USER>) => {
  const tailwind = useTailwind();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userName, setUserName] = useState('');
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [sucessMark, setSucessMark] = useState(false);
  const [placeholder] = useState({
    userName: 'Username',
    password: 'Password',
  });

  const validate = (type: string) => {
    let errorCtr = 0;
    if (type === 'userName') {
      setIsUserNameValid(!userName);
      if (!userName) {
        errorCtr += 1;
      }
    } else if (type === 'password') {
      setIsPasswordValid(!password);
      if (!password) {
        errorCtr += 1;
      }
    }

    if (errorCtr > 0) {
      setHasError(true);
    }
  };

  const handleUserLogin = () => {
    setLoading(true);
    validate('userName');
    validate('password');
    setLoading(false);

    const data = {
      userName: userName,
      password: password,
    };
    if (isUserNameValid || isPasswordValid) {
      return;
    } else {
      if (userName.includes('Admin') && password.includes('12345678')) {
        navigation.navigate('HomeStack', {screen: SCREENS.HOME_SCREEN});
      }
    }
    console.log('login-->', data);
  };

  return (
    <SafeAreaView
      style={[tailwind('flex-1'), {backgroundColor: COLORS.PURPLE_COLOR}]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[tailwind(' flex-grow'), {}]}>
        <ImageBackground
          source={backgroundImageDisplay}
          style={[tailwind('flex-1 items-center justify-center')]}>
          <Image            style={[
              tailwind('mt-2 mb-20'),
              {
                width: MetricsSizes.xxlarge,
                height: MetricsSizes.xxlarge,
              },
            ]}
            source={Cloudfarmlogo}
            resizeMode={'contain'}
          />
          <View
            style={[
              tailwind(
                'rounded-xl ml-10 mr-10 w-11/12 items-center justify-center p-1',
              ),
              {backgroundColor: COLORS.BG_COLOR, marginTop: 150},
            ]}>
            <ContainerWrapper style={[tailwind('w-11/12')]}>
              <TextInputComponent
                value={userName}
                label={placeholder.userName}
                setValue={setUserName}
                isInputFocused={isUsernameFocused}
                isInputValid={isUserNameValid}
                onFocus={() => setIsUsernameFocused(true)}
                sucessMark={sucessMark}
                onBlur={() => {
                  setIsUsernameFocused(false);
                  if (userName !== '') {
                    setSucessMark(true);
                  } else {
                    setSucessMark(false); // Set it to false when the username is empty
                  }
                }}
                onEndEditing={() => {
                  if (userName !== '') {
                    setSucessMark(true);
                  } else {
                    setSucessMark(false); // Set it to false when the username is empty
                  }
                }}
              />

              <TextInputComponent
                value={password}
                label={placeholder.password}
                setValue={setPassword}
                isInputFocused={isPasswordFocused}
                isInputValid={isPasswordValid}
                imageIconPass={true}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />

              <MainTouchableWrapper
                style={[tailwind('w-full')]}
                onPress={() => {}}>
                <ResponsiveUi.Text
                  regular
                  h7
                  color={COLORS.PRIMARY_START_COLOR}
                  style={[tailwind('self-end mr-2 mb-10')]}>
                  Do not remember the password?
                </ResponsiveUi.Text>
              </MainTouchableWrapper>
            </ContainerWrapper>

            <ResponsiveUi.Button
              bold
              gradient={true}
              loading={loading}
              title="Sign In"
              colors={[COLORS.PRIMARY_START_COLOR, COLORS.PRIMARY_END_COLORS]}
              style={[tailwind('w-full top-3 mb-10')]}
              action={() => {
                handleUserLogin();
              }}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IndexLoginUserEmail;
