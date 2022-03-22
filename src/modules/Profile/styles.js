import { colors } from '_constants';

const container = {
  flex: 1,
  alignItems: 'stretch'
};

const topContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.PRIMARY
};

const profileContainer = {
  width: 110,
  borderRadius: 55,
  height: 110,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.PRIMARY_DARK,
  padding: 2
};

const nameText = {
  color: colors.PRIMARY_DARK,
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 20
};

const bottomContainer = {
  flex: 2,
  alignItems: 'flex-start',
  paddingLeft: 30,
  paddingTop: 40
};

export { container, topContainer, profileContainer, nameText, bottomContainer };
