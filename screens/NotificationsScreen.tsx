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


const notifService = new NotifService();

export default function NotificationsScreen({ navigation }: RootTabScreenProps<'Notifications'>) {
  const { state, dispatch } = React.useContext(Context);
  console.log(state);




  // useEffect(() => {

  //   async function fecthAll() {
  //     debugger;
  //     await getAllNotifications();
  //   }
  //   if(!state.notifications.notificationsLoading) {
  //     fecthAll();
  //   }
  // }, [state.notifications.notificationsLoading]);
  // //dispatch(getAllNotifications()); 

  // console.log(state.notifications);

  // // useEffect(() => {

  // // },
  // // [])

  if (!state.notifications.notificationsLoading) {
    notifService.search().then((data: any) => {
      dispatch({
        type: SET_ALL_NOTIF,
        payload: data
      });
      console.log(data);
    });
  }
  var mappedNotifications: any = [];

  if (state.notifications.data && state.notifications.data.length > 0) {
    console.log(state.notifications.data);
    mappedNotifications = generateData(state.notifications.data);
    console.log('-----mapped notifications -------')
    console.log(mappedNotifications);
  }


  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Notifications</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {Array.isArray(mappedNotifications) && mappedNotifications.length > 0 && ( 
        <NotificationScreenView notificationsdata={mappedNotifications} navigation={navigation}/>
      )}
    </View>
  );
}


function generateData(data: any) {
  const result: any = [];
  data.forEach((item: any) => {
    if (item) {
      const childResult: any = {};
      item.forEach((child: any) => {
        childResult[`${child['name']}`] = child['value'];
      });
      result.push(childResult);
    }
  }
  );
  return result;
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

