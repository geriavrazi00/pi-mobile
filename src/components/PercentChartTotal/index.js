import React from "react";
import { View } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import { RFValue } from "react-native-responsive-fontsize";

import { Text } from "_components";
import LastSevenChart from "./LastSevenChart";
import {
  container,
  titleStyle,
  dataContainer,
  dataTitleStyle,
  dataDescriptionStyle
} from "./styles";

const PercentChartTotal = ({
  title,
  dataTitle,
  dataDescription,
  chartData = [],
  chartDescription,
  percent,
  style
}) => {
  return (
    <View style={[container, style]}>
      <Text style={titleStyle}>{title}</Text>
      <View style={dataContainer}>
        <View style={{ flexDirection: "column" }}>
          <Text style={dataTitleStyle}>{dataTitle}</Text>
          <Text style={dataDescriptionStyle}>{dataDescription}</Text>
        </View>
        {chartData && (
          <LastSevenChart data={chartData} description={chartDescription} />
        )}
        <ProgressCircle
          percent={percent}
          radius={50}
          borderWidth={8}
          color="#F26971"
          shadowColor="#999"
          bgColor="#EDEDED"
        >
          <Text style={{ fontSize: RFValue(18) }}>{`${percent}%`}</Text>
        </ProgressCircle>
      </View>
    </View>
  );
};

export default PercentChartTotal;
