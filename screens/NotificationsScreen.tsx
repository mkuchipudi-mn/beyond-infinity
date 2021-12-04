import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Context } from '../context';
import NotifService from '../services/Notif.service';
import { RootTabScreenProps } from '../types';

const notifService = new NotifService();



export default function NotificationsScreen({ navigation }: RootTabScreenProps<'Notifications'>) {
  const { state } = React.useContext(Context);
  console.log(state)
  notifService.search({});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
