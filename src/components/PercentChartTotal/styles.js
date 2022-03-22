import { colors } from "_constants";

import { RFValue } from "react-native-responsive-fontsize";

const container = {
  alignSelf: "stretch",
  backgroundColor: "#F6F6F6",
  height: 144,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: 30,
  paddingRight: 30
};

const titleStyle = {
  position: "absolute",
  opacity: 0.3,
  fontSize: RFValue(11),
  fontWeight: "500",
  top: 18
};

const dataContainer = {
  alignSelf: "stretch",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between"
};

const dataTitleStyle = {
  fontWeight: "500",
  color: colors.PRIMARY_TEXT,
  fontSize: RFValue(18)
};

const dataDescriptionStyle = {
  fontSize: RFValue(8),
  marginTop: 4,
  fontWeight: "500",
  color: colors.PRIMARY_TEXT
};

export {
  container,
  titleStyle,
  dataContainer,
  dataTitleStyle,
  dataDescriptionStyle
};
