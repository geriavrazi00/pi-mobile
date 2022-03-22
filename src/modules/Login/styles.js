import { colors } from '_constants';

const container = {
  flex: 1,
  alignItems: 'center'
};

const logoText = {
  fontFamily: 'RobotoCondensed-Italic',
  fontSize: 30,
  fontWeight: 'bold',
  color: colors.DARK_BACKGROUND
};

const button = {
  marginTop: 30,
  height: 50,
  alignSelf: 'stretch',
  marginLeft: 32,
  marginRight: 32,
  borderRadius: 25,
  backgroundColor: colors.PRIMARY
};

const buttonText = {
  fontSize: 18,
  fontWeight: '500'
};

export { container, logoText, button, buttonText };
