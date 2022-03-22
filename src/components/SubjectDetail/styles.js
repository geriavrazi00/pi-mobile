import { colors } from "_constants";

const container = {
  paddingLeft: 27,
  paddingBottom: 10,
  alignItems: "flex-start",
  minHeight: 124,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  shadowColor: "black"
};

const titleStyle = {
  color: colors.PRIMARY_TEXT,
  fontWeight: "bold",
  fontSize: 13
};

const rightTitleStyle = {
  fontWeight: "bold",
  fontSize: 13,
  lineHeight: 15,
  alignSelf: "stretch",
  textAlign: "right",
  marginRight: 15
};

const leftBar = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: 4
};

const bottomTextContainer = {
  flexDirection: "row",
  alignSelf: "stretch",
  marginTop: 6,
  flexWrap: "wrap",
  marginRight: 8
};

const separator = {
  position: "absolute",
  bottom: 0,
  height: 1,
  left: 0,
  right: 0,
  backgroundColor: colors.PRIMARY_DARK,
  opacity: 0.1
};

export {
  container,
  leftBar,
  titleStyle,
  rightTitleStyle,
  bottomTextContainer,
  separator
};
