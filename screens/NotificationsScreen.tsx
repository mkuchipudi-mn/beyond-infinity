import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Context } from '../context';
import { getAllNotifications } from '../redux/actions/notifs.actions';
import { RootTabScreenProps } from '../types';

import NotifService from "../services/Notif.service";
import { SET_ALL_NOTIF } from "../redux/types";
import NotificationScreenView from '../components/NotificationScreenView';
import { ActivityIndicator } from 'react-native-paper';
import { mapNotifications } from '../utils/map';


const notifService = new NotifService();

export default function NotificationsScreen({ navigation }: RootTabScreenProps<'Notifications'>) {
  const { state, dispatch } = React.useContext(Context);
  const [notifications, setNotifications] = React.useState<any>([]);
  const init = async () => { 
    const response = await notifService.search();
    setNotifications(mapNotifications(response.data));
  }

  React.useEffect(() => {
    init();
  },[])

  if(!notifications.length)
    return <ActivityIndicator size="small" color="#0000ff" />
  
  return (
    <View style={styles.container}>
      <NotificationScreenView notifications={notifications} navigation={navigation}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

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
function getAllUserNotifications() {
  throw new Error("Function not implemented.");
}

