import React, { useState } from "react";


import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Modal,
    ScrollView,
    Pressable,
    Alert,
    ListView,
    FlatList,
} from "react-native";

import { FormBuilder } from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';
import NotifService from "../services/Notif.service";
const notifService = new NotifService();

import { Button, TextInput } from 'react-native-paper';

export const NotificationsDetailsView = () => {
    const [acceptModal, setAcceptModal] = useState(false);
    const [rejectModal, setRejectModal] = useState(false);
    const [confirmPopup, setconfirmPopup] = useState(false);
    const detailsMeta = require('../config/resources/Notifications/DetailsPage/index.json');
    const doReject = () => {
        Alert.alert('Claim Reject', 'your claim has been rejected');
        //perform action
        setRejectModal(false);
        setconfirmPopup(true);
    };

    //{ pk, navigation }

    //const calimsdetails = await notifService.getCLaimDetails();

    const claimsdetails = { "associatedOrgDetailsList": null, "relName": null, "objectIdentifier": { "objectType": "DistRebatesClaim", "verNum": 0, "mgrId": 11100, "dateUpdated": 1638895527673, "uniqueObjIdString": "11100-769", "pk": 769 }, "properties": { "lockAcquired": { "type": "BOOLEAN", "name": "lockAcquired", "value": false } }, "rels1ToN": [{ "relName": "FetchLineStat", "dataObjects": [{ "associatedOrgDetailsList": null, "relName": null, "objectIdentifier": { "objectType": "", "verNum": 0, "mgrId": 0, "dateUpdated": 1639092117959, "uniqueObjIdString": "0-1", "pk": 1 }, "properties": {}, "rels1ToN": [], "rels1To1": [], "action": null, "newObjUniqueId": 0, "isNew": false, "attributes": [{ "type": "STRING", "name": "status", "value": "In Process" }, { "type": "INT", "name": "validCount", "value": 0 }, { "type": "INT", "name": "errorCount", "value": 1 }, { "type": "INT", "name": "fatalCount", "value": 0 }, { "type": "INT", "name": "warningCount", "value": 0 }, { "type": "INT", "name": "totalCount", "value": 1 }, { "type": "INT", "name": "submissionCount", "value": 1 }, { "type": "INT", "name": "acceptLinesCount", "value": 0 }, { "type": "INT", "name": "rejectedLinesCount", "value": 0 }] }] }], "rels1To1": [{ "associatedOrgDetailsList": null, "relName": "MemberUpdated", "objectIdentifier": { "objectType": "UserAcct", "verNum": 40638, "mgrId": 50105, "dateUpdated": 1639092068172, "uniqueObjIdString": "50105-44", "pk": 44 }, "properties": {}, "rels1ToN": [], "rels1To1": [], "action": null, "newObjUniqueId": 0, "isNew": false, "attributes": [{ "type": "STRING", "name": "PrintableName", "value": "System Administrator" }] }, { "associatedOrgDetailsList": null, "relName": "MemberCreated", "objectIdentifier": { "objectType": "UserAcct", "verNum": 40638, "mgrId": 50105, "dateUpdated": 1639092068172, "uniqueObjIdString": "50105-44", "pk": 44 }, "properties": {}, "rels1ToN": [], "rels1To1": [], "action": null, "newObjUniqueId": 0, "isNew": false, "attributes": [{ "type": "STRING", "name": "PrintableName", "value": "System Administrator" }] }], "action": null, "newObjUniqueId": 0, "isNew": false, "attributes": [{ "type": "STRING", "name": "Payee.MemberName", "value": "RECLS_53537_WHLID0060" }, { "type": "STRING", "name": "Payee.GroupFullname", "value": "RECLS_53537_WHLNAME0060" }, { "type": "STRING", "name": "PayeeAddress", "value": "" }, { "type": "STRING", "name": "ClaimNum", "value": "0000148" }, { "type": "STRING", "name": "Owner.MemberName", "value": "Administrator" }, { "type": "STRING", "name": "DebitMemoId", "value": "RECLS_53537_6_DM10060" }, { "type": "STRING", "name": "OrgUnit.DisplayName", "value": "US Operations" }, { "type": "EVENT_DATE", "name": "DateCreated", "value": { "date": "2021-12-07T08:45:27", "type": "EVENT_DATE", "timezone": "America/Los_Angeles" } }, { "type": "EVENT_DATE", "name": "DateUpdated", "value": { "date": "2021-12-07T08:45:27", "type": "EVENT_DATE", "timezone": "America/Los_Angeles" } }, { "type": "BOOLEAN", "name": "PublishFlag", "value": true }, { "type": "BOOLEAN", "name": "PurgeImpacted", "value": false }, { "type": "BOOLEAN", "name": "IsSubmissionStatusPendingClose", "value": false }, { "type": "ENUM", "name": "ClaimStatus", "value": { "code": 20, "displayName": "In Process", "className": "com.modeln.bp.distrebates.claim.CMnDistRebatesClaimStatus", "name": "INPR" } }, { "type": "ENUM", "name": "PaymentMethod", "value": { "code": 10, "displayName": "Check", "className": "com.modeln.bp.struct.doc.enums.CMnPaymentMethod", "name": "Check" } }, { "type": "ENUM", "name": "Currency", "value": { "code": 10, "displayName": "USD", "className": "com.modeln.util.unit.CMnCurrency", "name": "USD" } }, { "type": "FLOAT", "name": "DiscrepancyPercentage", "value": 1.0 }, { "type": "LONG", "name": "LineCount", "value": 1 }, { "type": "MONEY", "name": "TotalDistrRebateAmount", "value": { "currency": { "code": 10, "displayName": "USD", "className": "com.modeln.util.unit.CMnCurrency", "name": "USD" }, "money": 5000.0000 } }, { "type": "MONEY", "name": "TotalApprRebateAmount", "value": { "currency": { "code": 10, "displayName": "USD", "className": "com.modeln.util.unit.CMnCurrency", "name": "USD" }, "money": 0.0000 } }, { "type": "MONEY", "name": "TotalDiscrepancyAmount", "value": { "currency": { "code": 10, "displayName": "USD", "className": "com.modeln.util.unit.CMnCurrency", "name": "USD" }, "money": 5000.0000 } }] };
    const claimsdetailsMap = {}
    claimsdetails.attributes.forEach(item => {
        if (item.name === 'ClaimStatus')
            claimsdetailsMap[item.name] = item.value.displayName;
        else if (item.name === 'TotalDistrRebateAmount' || item.name === 'TotalApprRebateAmount' || item.name === 'TotalDiscrepancyAmount')
            claimsdetailsMap[item.name] = item.value.money;
        else
            claimsdetailsMap[item.name] = item.value;
    });
    const listData = [];
    detailsMeta.forEach(item => { listData.push(item.name + ':' + claimsdetailsMap[item.field] || ''); });

    return (
        //<View style={styles.detailscontainer}>
        //  <Text style={styles.title}>{"Notification Details for " + calimsdetails.objectIdentifier.pk}</Text>
        //  <View
        //    style={styles.separator}
        //  lightColor="#eee"
        //  darkColor="rgba(255,255,255,0.1)"
        ///>
        //</View>
        <View style={styles.containerStyle}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={confirmPopup}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setconfirmPopup(false);
                }}
            >
                <Text> Your claim has been successfully rejected </Text>
                <Button
                    mode={'contained'}
                    onPress={() => setconfirmPopup(false)}
                >
                    Home Page
                </Button>
            </Modal>
            <Modal
                animationType="slide"
                transparent={false}
                visible={acceptModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setAcceptModal(false);
                }}
            >
                <TextInput placeholder="Type your comment here" />
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setAcceptModal(false)}
                >
                    <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
            </Modal>
            <Modal
                animationType="slide"
                transparent={false}
                visible={rejectModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setRejectModal(false);
                }}
            >
                <TextInput placeholder="Type your comment here" />
                <View style={styles.buttongroup}>
                    <View style={styles.buttonContainer}>
                        <Button
                            mode={'contained'}
                            onPress={() => doReject()}
                        >
                            Reject
                        </Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            mode={'contained'}
                            onPress={() => setRejectModal(false)}
                        >
                            Cancel
                        </Button>
                    </View>
                </View >
            </Modal>

            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <Text style={styles.headingStyle}>Claim Details</Text>
                <FlatList data={listData} renderItem={({ item }) => <View style={styles.itemhead}> <Text style={styles.itemfirst}>{item.split(':')[0]}</Text> <Text style={styles}>{':  ' + item.split(':')[1]}</Text></View>} />
                <View style={styles.buttongroup}>
                    <View style={styles.buttonContainer}>
                        <Button
                            mode={'contained'}
                            onPress={() => setAcceptModal(true)}
                        >
                            Accept
                        </Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            mode={'contained'}
                            onPress={() => setRejectModal(true)}
                        >
                            Reject
                        </Button>
                    </View>
                </View >
            </ScrollView >
        </View >
    );
}






const styles = StyleSheet.create({
    itemhead: {
        flex: 1,
        flexDirection: 'row',

    },
    itemfirst: {
        width: 200,
    },
    headingStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 200,
    },
    container: {
        backgroundColor: "#f4f4f4",
        flex: 1,
    },
    backTextWhite: {
        color: "#FFF",
    },
    rowFront: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 60,
        margin: 5,
        marginBottom: 15,
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    rowFrontVisible: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15,
    },
    rowBack: {
        alignItems: "center",
        backgroundColor: "#DDD",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
    },
    backRightBtn: {
        alignItems: "flex-end",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: "#1f65ff",
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: "red",
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
        fontWeight: "bold",
        marginBottom: 5,
        color: "#666",
    },
    details: {
        fontSize: 12,
        color: "#999",
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
    buttongroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
    },
    buttonContainer: {
        flex: 1,
    }
});