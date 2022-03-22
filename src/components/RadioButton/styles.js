import { colors } from '_constants';

const container = {
  flexDirection: 'row',
  minWidth: 80,
  maxWidth: 100,
  elevation: 1,
  alignItems: 'center'
};

const radioOuterCircle = {
  height: 24,
  width: 24,
  borderRadius: 12,
  borderWidth: 3,
  borderColor: colors.PRIMARY,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 7
};

const radioInnerCircle = {
  height: 12,
  width: 12,
  borderRadius: 6,
  backgroundColor: colors.PRIMARY
};

export { container, radioInnerCircle, radioOuterCircle };
