import React from 'react';
import { View } from 'react-native';

import { Text } from '_components';
import { container, chartContainer, chartDescriptionStyle } from './styles';

const renderChartCols = data =>
  data.map(({ id, values }) => (
    <View
      key={id}
      style={{
        marginLeft: 4,
        marginRight: 4,
        width: 4,
        height: values === 0 ? 4 : 4 * values,
        borderRadius: 4,
        backgroundColor: values === 0 ? '#D8D8D8' : '#F26971'
      }}
    />
  ));

const LastSevenChart = ({ data, description }) => (
  <View style={container}>
    <View style={chartContainer}>{renderChartCols(data)}</View>
    <Text style={chartDescriptionStyle}>{description}</Text>
  </View>
);

export default LastSevenChart;
