import { colors } from '_constants';

const modalContainer = {
  backgroundColor: 'white'
};

const modalTitleContainer = {
  backgroundColor: colors.PRIMARY,
  height: 55,
  alignItems: 'center',
  flexDirection: 'row'
};

const modalTitle = {
  fontWeight: 'bold',
  marginLeft: 16,
  fontSize: 18,
  lineHeight: 21
};

const closeButton = {
  width: 55,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colors.PRIMARY_DARK,
  justifyContent: 'center',
  alignItems: 'center'
};

export { modalContainer, modalTitleContainer, modalTitle, closeButton };
