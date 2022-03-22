import React, { Component } from "react";
import { View, TextInput } from "react-native";

import { container, textInput } from "./styles";
class Input extends Component {
  render() {
    const {
      style,
      placeholder,
      secureTextEntry = false,
      keyboardType = "default",
      Icon = () => null,
      value = "",
      onChange = () => {}
    } = this.props;
    return (
      <View style={[container, style]}>
        {Icon !== null && <Icon style={{ zIndex: 0 }} />}

        <TextInput
          style={textInput}
          placeholder={placeholder}
          placeholderTextColor={"grey"}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChange}
        />
      </View>
    );
  }
}

export default Input;
