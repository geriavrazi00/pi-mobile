import { colors } from "_constants";
import { RFValue } from "react-native-responsive-fontsize";

const container = {
  flex: 1,
  alignSelf: "stretch",
  alignItems: "center"
};

const chartContainer = {
  flexDirection: "row",
  flex: 1,
  alignSelf: "stretch",
  justifyContent: "center",
  alignItems: "space-between"
};

const chartDescriptionStyle = {
  opacity: 0.7,
  color: colors.PRIMARY_TEXT,
  marginTop: 6,
  fontWeight: "300",
  fontFamily: "Roboto-Italic",
  fontSize: RFValue(10)
};

export { container, chartContainer, chartDescriptionStyle };
