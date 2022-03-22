import React from 'react';
import { View } from 'react-native';

import { Avatar } from '_assets/img';
import { Text } from '_components';
import {
  container,
  titleStyle,
  dataContainer,
  imgContainer,
  rankTextContainer,
  rankText
} from './styles';

const Rank = ({ title, position, total }) => (
  <View style={container}>
    <Text style={titleStyle}>{title}</Text>
    <View style={dataContainer}>
      <View style={imgContainer}>
        <Avatar />
      </View>
      <View style={rankTextContainer}>
        <Text style={[rankText, { color: '#7ADE81' }]}>{`#${position}`}</Text>
        <Text style={rankText}>{`/${total}`}</Text>
      </View>
    </View>
  </View>
);

export default Rank;
