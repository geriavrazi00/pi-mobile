import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '_components';
import { container, titleStyle, indicator } from './styles';

const Title = ({ selected, title, onPress, id }) => (
  <TouchableOpacity style={container} onPress={() => onPress(id)}>
    <Text style={[titleStyle, selected && { opacity: 1 }]}>{title}</Text>
    <View style={[indicator, selected && { opacity: 1 }]} />
  </TouchableOpacity>
);

export default Title;
