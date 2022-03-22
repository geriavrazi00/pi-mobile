import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from '_components';
import {
  container,
  button,
  selectedButton,
  selectedButtonText
} from './styles';

class SegmentedControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButtonId: 0
    };
  }

  render() {
    const { buttons, style, onControlSelect } = this.props;
    const { selectedButtonId } = this.state;
    return (
      <View style={[container, style]}>
        {buttons.map(({ text, id }) => (
          <Button
            style={[button, id === selectedButtonId && selectedButton]}
            key={id}
            onPress={() => {
              this.setState({ selectedButtonId: id });
              onControlSelect(id);
            }}
            textStyle={selectedButtonId === id ? selectedButtonText : {}}
            text={text}
          />
        ))}
      </View>
    );
  }
}

export default SegmentedControl;
