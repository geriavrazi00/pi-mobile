import { colors } from '_constants';

const container = {
  flex: 1
};

const titleStyle = {
  fontWeight: '500',
  color: '#FFFFFF',
  fontSize: 16,
  lineHeight: 19
};

const dataContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 14
};

const imgContainer = {
  width: 50,
  height: 50,
  borderWidth: 2,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: colors.PRIMARY
};

const rankTextContainer = {
  flexDirection: 'row',
  marginLeft: 12
};

const rankText = {
  fontWeight: '500',
  color: '#FFFFFF',
  fontSize: 16,
  lineHeight: 19
};

export {
  container,
  titleStyle,
  dataContainer,
  imgContainer,
  rankTextContainer,
  rankText
};
