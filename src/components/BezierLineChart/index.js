import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const BezierLineChart = ({ data }) => (
  <View>
    <LineChart
      data={data}
      width={Dimensions.get('window').width} // from react-native
      height={220}
      withOuterLines={false}
      withInnerLines={false}
      withShadow={true}
      chartConfig={{
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(122,222, 129, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      bezier
    />
  </View>
);

export default BezierLineChart;
