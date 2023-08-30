import React, {useState} from 'react';
import ContainerWrapper from '../../components/wrappers/ContainerWrapper';
import {SCREENS} from '../../constants/screens';
import {RootStackScreenProps} from '../../typings/navigation';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {useTailwind} from 'tailwind-rn';
import HeaderComponent from '../../components/HeaderComponent';
import {ResponsiveUi} from '../../components/responsive-ui';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

const IndexTestScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.TEST_SCREEN>) => {
  const tailwind = useTailwind();
  const {title}: any = route.params;
  const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];
  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
    {value: 400, label: 'F', frontColor: '#177AD5'},
    {value: 400, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
];

const barData2 = [
  {
    value: 230,
    label: 'Jan',
    frontColor: '#4ABFF4',
    sideColor: '#23A7F3',
    topColor: '#92e6f6',
  },
  {
    value: 180,
    label: 'Feb',
    frontColor: '#79C3DB',
    sideColor: '#68BCD7',
    topColor: '#9FD4E5',
  },
  {
    value: 195,
    label: 'Mar',
    frontColor: '#28B2B3',
    sideColor: '#0FAAAB',
    topColor: '#66C9C9',
  },
  {
    value: 250,
    label: 'Apr',
    frontColor: '#4ADDBA',
    sideColor: '#36D9B2',
    topColor: '#7DE7CE',
  },
  {
    value: 320,
    label: 'May',
    frontColor: '#91E3E3',
    sideColor: '#85E0E0',
    topColor: '#B0EAEB',
  },
]

const data3 = [
  {value: 2500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Jan'},
  {value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 3500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Feb'},
  {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 4500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Mar'},
  {value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 5200, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Apr'},
  {value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 3000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'May'},
  {value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
];

const lineData = [{value: 0},{value: 10},{value: 8},{value: 58},{value: 56},{value: 78},{value: 74},{value: 98}];
    const lineData2 = [{value: 0},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 85}];

  return (
    <SafeAreaView
      style={[tailwind('flex-1'), {backgroundColor: COLORS.LIGHT_GREY}]}>
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}>
        <HeaderComponent title={title} />

        <ContainerWrapper
          style={[
            tailwind('flex-1'),
            {backgroundColor: COLORS.WHITE},
          ]}>
         <View>
            <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
        <View style={{marginTop: 80, marginBottom: 40}}>
            <BarChart
            showFractionalValues
            showYAxisIndices
            hideRules
            noOfSections={4}
            maxValue={400}
            data={barData2}
            barWidth={22}
            sideWidth={15}
            isThreeD 
            side="right"
            />
        </View>

        <View
      style={{
        margin: 10,
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#232B5D',
      }}>
      <ResponsiveUi.Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
        Overview
      </ResponsiveUi.Text>
        <View style={{padding: 20, alignItems: 'center'}}>
        <BarChart
          data={data3}
          barWidth={22}
          initialSpacing={10}
          spacing={14}
          barBorderRadius={4}
          showGradient
          yAxisThickness={0}
          xAxisType={'dashed'}
          xAxisColor={'lightgray'}
          yAxisTextStyle={{color: 'lightgray'}}
          stepValue={1000}
          maxValue={6000}
          noOfSections={6}
          yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
          labelWidth={40}
          xAxisLabelTextStyle={{color: 'lightgray', textAlign: 'center'}}
          showLine
          lineConfig={{
            color: '#F29C6E',
            thickness: 3,
            curved: true,
            hideDataPoints: true,
            shiftY: 20,
            initialSpacing: -30,
          }}
        />
      </View>
      </View>

      <View>
            <LineChart
            areaChart
            curved
            data={lineData}
            data2={lineData2}
            height={250}
            showVerticalLines
            spacing={44}
            initialSpacing={0}
            color1="skyblue"
            color2="orange"
            textColor1="green"
            hideDataPoints
            dataPointsColor1="blue"
            dataPointsColor2="red"
            startFillColor1="skyblue"
            startFillColor2="orange"
            startOpacity={0.8}
            endOpacity={0.3}
            />
        </View>
        
        </ContainerWrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IndexTestScreen;
