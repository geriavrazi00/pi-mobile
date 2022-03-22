import React from "react";
import { View } from "react-native";

import { colors } from "_constants";
import { Text } from "_components";
import {
  container,
  leftBar,
  titleStyle,
  rightTitleStyle,
  separator,
  bottomTextContainer
} from "./styles";

const SubjectDetail = ({
  color = colors.BLUE,
  title,
  subtitle,
  rightText,
  bottomTextLabel = "",
  bottomText = "",
  behaviorLabel = "",
  evaluationLabel = "",
  behavior,
  evaluation,
  style
}) => (
  <View style={[container, style]}>
    <View style={[leftBar, { backgroundColor: color }]} />
    <View
      style={{
        alignSelf: "stretch",
        justifyContent: "center",
        flex: 1
      }}
    >
      <Text style={[titleStyle, title.length > 30 && { marginTop: 20 }]}>
        {title}
      </Text>
      {rightText && (
        <Text
          style={[
            rightTitleStyle,
            { color: color },
            title.length > 30 && { top: 5 }
          ]}
        >
          {rightText}
        </Text>
      )}
      <Text style={[titleStyle, { fontWeight: "normal", marginTop: 6 }]}>
        {subtitle}
      </Text>
      {!!behavior && (
        <Text
          style={[titleStyle, { fontWeight: "normal", marginTop: 6 }]}
        >{`${behaviorLabel}: ${behavior}`}</Text>
      )}
      {!!evaluation && (
        <Text
          style={[titleStyle, { fontWeight: "normal", marginTop: 6 }]}
        >{`${evaluationLabel}: ${evaluation}`}</Text>
      )}
      {!!bottomText && (
        <View style={bottomTextContainer}>
          <Text style={[titleStyle, { opacity: 0.5 }]}>
            {`${bottomTextLabel}: `}
            <Text style={[titleStyle, { fontWeight: "normal", opacity: 1 }]}>
              {bottomText}
            </Text>
          </Text>
        </View>
      )}
    </View>
    <View style={separator} />
  </View>
);

export default SubjectDetail;
