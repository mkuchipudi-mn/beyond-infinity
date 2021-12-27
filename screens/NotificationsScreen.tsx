import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { Context } from '../context';
import { RootTabScreenProps } from '../types';
import NotifService from '../services/Notif.service';
import DetailInfoService from '../services/Detail.service';
import ApprovalsService from '../services/Approval.service';
import { SET_ALL_NOTIF } from '../redux/types';
import NotificationScreenView from '../components/NotificationScreenView';
import { ActivityIndicator } from 'react-native-paper';
import { mapClaimDetails, mapNotifications } from '../utils/map';
import { NotificationsDetailsView } from '../components/NotificationsDetailsView';
import { FontAwesome } from '@expo/vector-icons';

const notifService = new NotifService();
const detailInfoService = new DetailInfoService();
const approvalsService = new ApprovalsService();


export default function NotificationsScreen({ navigation }: RootTabScreenProps<'Notifications'>) {
  //const { state, dispatch } = React.useContext(Context);
  const [notifications, setNotifications] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [claimDetails, setClaimDetails] = useState<any>([]);
  const [claimId, setClaimId] = useState<any>(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ }) => <FontAwesome
        name='refresh'
        size={23}
        style={styles.refresh}
        onPress={async () => await init()}
      ></FontAwesome>,
    });
  }, [navigation]);

  const init = async () => {
    const response = await notifService.search();
    //setNotifications(mapNotifications(response.data));
    setNotifications(JSON.parse(JSON.stringify(mapNotifications(response.data))));
  };

  const onClickNotification = async (data: any) => {
    if (data.item.unread) {
      await notifService.unReadFlagUpdate(data.item.objectIdentifier, data.item.pk);
    }
    const response = await detailInfoService.fetchDetails(data.item.claimPk);
    setClaimId(data.item.claimPk);
    setClaimDetails(mapClaimDetails(response))
    setShowDetails(true);
  };
  const onBackClick = () => {
    setShowDetails(false);
  };

  const onAprovalClick = async (message: string) => {
    await approvalsService.approve(claimId, message);
    setShowDetails(false);
  };

  const onRejectClick = async (message: string) => {
    await approvalsService.reject(claimId, message);
    setShowDetails(false);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await init();
      setShowDetails(false);
    });
    return unsubscribe;
  }, [navigation]);

  if (!notifications.length) return <ActivityIndicator size='small' color='#0000ff' />;

  return (
    <View style={styles.container}>
      {!showDetails && (
        <NotificationScreenView
          notifications={notifications}
          navigation={navigation}
          onClickNotification={onClickNotification}
        />
      )}
      {showDetails && (
        <NotificationsDetailsView
          claimDetails={claimDetails}
          onBackClick={onBackClick}
          onClickApprove={onAprovalClick}
          onClickReject={onRejectClick}
          headerTitle={'Claim Details'}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  refresh: {
    paddingRight: 20,
    color: 'white',
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
