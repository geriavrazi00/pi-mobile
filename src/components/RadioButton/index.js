import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { container, radioInnerCircle, radioOuterCircle } from './styles';

const RadioButton = ({ selected = true, children, style, onRadioSelect }) => (
  <TouchableOpacity style={[container, style]} onPress={onRadioSelect}>
    <View style={radioOuterCircle}>
      <View style={[radioInnerCircle, !selected && { backgroundColor: 'white' }]} />
    </View>
    {children}
  </TouchableOpacity>
);

export default RadioButton;
