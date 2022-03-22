import React from 'react';
import { TouchableOpacity } from 'react-native';

import Text from './Text';

const Button = ({
  style,
  text,
  textStyle,
  onPress,
  disabled = false,
  Icon
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[
      { alignItems: 'center', justifyContent: 'center' },
      style,
      Icon && { flexDirection: 'row' }
    ]}
    onPress={onPress}
  >
    {Icon && <Icon />}
    <Text style={[{ textAlign: 'center', padding: 10 }, textStyle]}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default Button;
