import React from 'react';
import { Text, View } from 'react-native';

import { colors } from '_constants';

const RobotoTxt = ({ style, children }) => (
  <Text
    style={[{ fontFamily: 'Roboto-Regular', color: colors.DARK_TEXT }, style]}
  >
    {children}
  </Text>
);

export default RobotoTxt;
