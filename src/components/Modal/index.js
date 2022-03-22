import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { Exit } from '_assets/img';
import { Text } from '_components';
import { modalContainer, modalTitleContainer, modalTitle, closeButton } from './styles';

const Mod = ({ visible, title = '', onClose, children }) => (
  <Modal
    hasBackdrop={true}
    backdropTransitionInTiming={0}
    backdropTransitionOutTiming={0}
    animationType="slide"
    transparent={true}
    isVisible={visible}
    onBackdropPress={onClose}
  >
    <View style={modalContainer}>
      <View style={modalTitleContainer}>
        <Text style={modalTitle}>{title}</Text>
        <TouchableOpacity style={closeButton} onPress={onClose}>
          <Exit />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  </Modal>
);

export default Mod;
