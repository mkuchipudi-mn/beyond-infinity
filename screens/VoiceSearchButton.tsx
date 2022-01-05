import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const VoiceSearchButton = ({ toggleListening }: { toggleListening: any }) => {
  return (
    <>
      <Text>Press the button and start speaking.</Text>
      <TouchableOpacity onPressIn={toggleListening} onPressOut={toggleListening}>
        <FontAwesome name='microphone' size={40}></FontAwesome>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
