import { colors } from '_constants';

const container = {
  minHeight: 57,
  alignSelf: 'stretch',
  paddingLeft: 30,
  paddingRight: 30,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
};

const bulletContainer = {
  flex: 1,
  alignSelf: 'stretch',
  justifyContent: 'center',
  alignItems: 'flex-start'
};

const bullet = {
  width: 10,
  height: 10,
  backgroundColor: colors.PRIMARY_TEXT,
  opacity: 0.1
};

const titlesContainer = {
  textAlign: 'left',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  flex: 10
};

const subjectTitleStyle = {
  color: colors.PRIMARY_TEXT,
  fontWeight: 'bold',
  fontSize: 18,
  lineHeight: 21
};

const subjectTimeStyle = {
  fontWeight: '500',
  fontSize: 13,
  lineHeight: 15,
  color: colors.PRIMARY_TEXT,
  opacity: 0.2
};

const plusContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1
};

const plusLine = {
  backgroundColor: 'black',
  borderRadius: 1,
  height: 2,
  width: 18
};

const separator = {
  alignSelf: 'stretch',
  height: 1,
  bottom: 0,
  left: 0,
  right: 0,
  position: 'absolute',
  backgroundColor: colors.PRIMARY_TEXT,
  opacity: 0.05
};

export {
  container,
  bulletContainer,
  bullet,
  titlesContainer,
  subjectTimeStyle,
  subjectTitleStyle,
  plusContainer,
  plusLine,
  separator
};
