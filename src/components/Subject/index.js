import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '_components';
import {
  container,
  bullet,
  titlesContainer,
  subjectTimeStyle,
  subjectTitleStyle,
  plusContainer,
  plusLine,
  separator,
  bulletContainer
} from './styles';

const Subject = ({ index, subject, onSubjectPress, id, strings, disabled = false }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={container}
      onPress={() => onSubjectPress({ id, subject, index })}
    >
      <View style={bulletContainer}>
        <View style={bullet} />
      </View>
      <View style={titlesContainer}>
        <Text style={subjectTitleStyle}>{subject}</Text>
        <Text style={subjectTimeStyle}>{strings().hoursNumber[index]}</Text>
      </View>
      <View style={plusContainer}>
        <View style={plusLine} />
        <View style={[plusLine, { width: 2, height: 18, position: 'absolute' }]} />
      </View>
      <View style={separator} />
    </TouchableOpacity>
  );
};

export default Subject;
