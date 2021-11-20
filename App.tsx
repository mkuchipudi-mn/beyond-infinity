import React from 'react';
import IndexApp from './Index';
import { Store } from './store/store';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-styled-toast';

export default function App() {
  return (
    <Store>
      <ToastProvider>
        <IndexApp />
      </ToastProvider>
    </Store>
  );
}
