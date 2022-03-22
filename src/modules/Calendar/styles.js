import { colors } from '_constants';

const topBar = {
  backgroundColor: colors.PRIMARY,
  height: 100,
  alignSelf: 'stretch'
};

const segmentControl = {
  marginTop: 10,
  marginLeft: 20,
  marginRight: 20,
  marginBottom: 30
};

const infoButtonContainer = {
  width: 60,
  height: 60,
  borderRadius: 30,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.BLUE,
  marginLeft: 20
};

const infoButton = {
  width: 50,
  height: 50,
  borderRadius: 25,
  borderWidth: 3,
  backgroundColor: colors.BLUE,
  borderColor: 'white',
  justifyContent: 'center',
  alignItems: 'center'
};

const infoButtonText = {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold'
};

const infoRow = {
  flexDirection: 'row',
  marginTop: 5,
  marginRight: 5,
  marginLeft: 10,
  marginRight: 10,
  borderBottomColor: '#00000040',
  borderBottomWidth: 1,
  padding: 10,
  alignItems: 'center'
};

const infoRoundIcon = {
  width: 30,
  height: 30,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center'
};

const infoSquareIcon = {
  width: 28,
  height: 28,
  borderWidth: 2,
  borderColor: colors.PRIMARY,
  justifyContent: 'center',
  alignItems: 'center'
};

const buttonsContainer = {
  alignSelf: 'stretch',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 20
};

const todayButton = {
  backgroundColor: colors.BLUE,
  padding: 3,
  borderRadius: 4,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 1,
  marginRight: 20
};

const todayButtonText = {
  fontWeight: 'bold',
  color: 'white'
};

export {
  topBar,
  segmentControl,
  infoButton,
  infoButtonContainer,
  infoButtonText,
  infoRow,
  infoRoundIcon,
  infoSquareIcon,
  buttonsContainer,
  todayButton,
  todayButtonText
};
