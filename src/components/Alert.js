import React from 'react';
import { Alert } from 'react-native';

const AlertMsg = ({
  title,
  message,
  actions = [
    {
      text: 'Ok',
      onPress: () => {}
    }
  ],
  cancelable = false
}) => Alert.alert(title, message, actions, { cancelable: cancelable });

export default AlertMsg;
