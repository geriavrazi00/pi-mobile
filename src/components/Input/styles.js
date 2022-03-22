import { colors } from "_constants";

const container = {
  marginLeft: 32,
  marginRight: 32,
  alignSelf: "stretch",
  height: 50,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: 25,
  paddingLeft: 26,
  paddingRight: 26,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 20,
  shadowOpacity: 0.06,
  elevation: 1
};

const textInput = {
  color: "grey",
  fontFamily: "Roboto-Regular",
  fontSize: 13,
  marginLeft: 10,
  flex: 1,
  zIndex: 1
};

export { container, textInput };
