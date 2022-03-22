import { colors } from '_constants';

const container = {
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 75,
  marginLeft: 5,
  marginRight: 5
};

const titleStyle = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 14,
  color: colors.PRIMARY_TEXT,
  opacity: 0.2
};

const indicator = {
  backgroundColor: colors.PRIMARY_TEXT,
  width: 14,
  height: 4,
  borderRadius: 2,
  opacity: 0
};

export { container, titleStyle, indicator };
