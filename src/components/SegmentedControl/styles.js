import { colors } from '_constants';

const container = {
  height: 50,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: colors.GREEN,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'stretch',
  flexWrap: 'wrap',
  overflow: 'hidden'
};

const button = {
  backgroundColor: 'white',
  alignSelf: 'stretch',
  flex: 1
  // borderLeftWidth: 1,
  // borderLeftColor: colors.GREEN
};

const selectedButton = {
  backgroundColor: colors.GREEN
};

const selectedButtonText = {
  color: 'white',
  fontWeight: 'bold'
};

export { container, button, selectedButton, selectedButtonText };
