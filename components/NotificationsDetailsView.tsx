import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import DialogInput from 'react-native-dialog-input';
import { Card } from 'react-native-paper';
import { Button, TextInput } from 'react-native-paper';
import { SwipeGesture } from './SwipeGesture';

export const NotificationsDetailsView = ({
  claimDetails,
  onBackClick,
  onClickApprove,
  onClickReject,
  hideButtons,
  headerTitle,
  hasPrev,
  hasNext,
  onPrevClick,
  onNextClick,
  index,
  count,
}: {
  claimDetails: any;
  onBackClick: any;
  onClickApprove: any;
  onClickReject: any;
  hideButtons: boolean;
  headerTitle: any;
  hasPrev: any;
  hasNext: any;
  onPrevClick: any;
  onNextClick: any;
  index: number;
  count: number;
}) => {
  const [approveConfirm, setApproveConfirm] = useState(false);
  const [rejectConfirm, setRejectConfirm] = useState(false);
  const claimStatus = claimDetails.find((item: any) => item.label === 'Claim Status');
  const disableActions = claimStatus && claimStatus.value !== 'Pending Approval';

  const onSwipePerformed = (action) => {
    /// action : 'left' for left swipe
    /// action : 'right' for right swipe
    /// action : 'up' for up swipe
    /// action : 'down' for down swipe

    switch (action) {
      case 'left': {
        if (hasNext) {
          onNextClick();
        }
        console.log('left Swipe performed');
        break;
      }
      case 'right': {
        if (hasPrev) {
          onPrevClick();
        }
        console.log('right Swipe performed');
        break;
      }
      case 'up': {
        console.log('up Swipe performed');
        break;
      }
      case 'down': {
        console.log('down Swipe performed');
        break;
      }
      default: {
        console.log('Undeteceted action');
      }
    }
  };

  const onClickApproveAction = (text: string) => {
    setApproveConfirm(false);
    onClickApprove(text);
  };

  const onClickRejectAction = (text: string) => {
    setRejectConfirm(false);
    onClickReject(text);
  };

  const hideApproveConfirm = () => {
    setApproveConfirm(false);
  };

  const hideRejectConfirm = () => {
    setRejectConfirm(false);
  };

  return (
    <View>
      <Button mode={'contained'} onPress={() => onBackClick()}>
        Back
      </Button>

      <DialogInput
        isDialogVisible={approveConfirm}
        title={'Approval Reason'}
        hintInput={'Enter Comment'}
        submitInput={(inputText: string) => {
          onClickApproveAction(inputText);
        }}
        closeDialog={() => {
          hideApproveConfirm();
        }}
      ></DialogInput>

      <DialogInput
        isDialogVisible={rejectConfirm}
        title={'Reject Reason'}
        hintInput={'Enter Comment'}
        submitInput={(inputText: string) => {
          onClickRejectAction(inputText);
        }}
        closeDialog={() => {
          hideRejectConfirm();
        }}
      ></DialogInput>
      <ScrollView>
        <Card>
          <SwipeGesture onSwipePerformed={onSwipePerformed}>
            <Text style={styles.headingStyle}> {headerTitle}</Text>
            <FlatList
              data={claimDetails}
              renderItem={({ item }) => (
                <View style={styles.itemhead}>
                  <Text style={styles.itemFirst}>{item.label}</Text>
                  <Text style={styles.itemSecond}>{item.value}</Text>
                </View>
              )}
            />
            {!hideButtons && (
              <View style={styles.buttonGroup}>
                <Button
                  disabled={disableActions}
                  mode={'contained'}
                  onPress={() => setApproveConfirm(true)}
                >
                  Approve
                </Button>
                <Button
                  disabled={disableActions}
                  mode={'contained'}
                  onPress={() => setRejectConfirm(true)}
                >
                  Reject
                </Button>
              </View>
            )}
            {onNextClick && (
              <View>
                {' '}
                <Text style={styles.footer}>
                  {index + 1}/{count}
                </Text>
              </View>
            )}
          </SwipeGesture>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  itemhead: {
    flex: 1,
    flexDirection: 'row',
  },
  itemFirst: {
    width: 150,
  },
  itemSecond: {
    width: 300,
    fontWeight: 'bold',
  },
  headingStyle: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 15,
    width: 13,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },

  detailscontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonGroup: {
    paddingTop: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  buttonContainer: {
    flex: 1,
  },
});
