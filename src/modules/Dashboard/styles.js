import { RFValue } from "react-native-responsive-fontsize";

import { colors } from "_constants";

const container = {
  flex: 1
};

const topBar = {
  backgroundColor: colors.PRIMARY,
  height: 70,
  paddingLeft: 24,
  alignSelf: "stretch",
  alignItems: "flex-start"
};

const profile = {
  width: 70,
  marginTop: 35,
  height: 70,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.PRIMARY_DARK,
  padding: 2,
  borderRadius: 35
};

const dataContainer = {
  flex: 1,
  marginTop: 35,
  alignSelf: "stretch",
  justifyContent: "flex-start"
};

const nameText = {
  paddingLeft: 40,
  marginTop: 16,
  fontSize: 18,
  fontWeight: "500"
};

const classRoomText = {
  paddingLeft: 40,
  fontSize: 11,
  opacity: 0.4,
  marginTop: 4
};

const sectionTitle = {
  paddingLeft: 40,
  marginTop: 34,
  fontSize: 20,
  fontWeight: "bold"
};

const ranksContainer = {
  backgroundColor: "#30363D",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 14,
  paddingBottom: 14,
  marginTop: 20
};

export {
  container,
  topBar,
  dataContainer,
  profile,
  nameText,
  classRoomText,
  sectionTitle,
  ranksContainer
};
