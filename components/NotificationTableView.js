import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import { Picker } from "@react-native-community/picker";

// Example component for section:headerComponent
const CustomSectionHeader = () => (
  <View>
    <Text>Custom header!</Text>
  </View>
);

const generateNotifLinkView = (notif, key) => {
  var notifDescription = notif["Resource.Description"];
  var uniqId = notif["objectIdentifier"].uniqueObjIdString;
  var dateCreated = notif["dateCreated"];
  var unRead = notif["Unread"];

  var notifTitle = notifDescription + " for " + uniqId;
  var notifSubTitle = dateCreated.date;
  if (notif) {
    return (
      <React.Fragment>
        <Cell
          key={key}
          cellStyle="Subtitle"
          title={notifTitle}
          detail={notifSubTitle}
          accessory="DisclosureIndicator"
          onPress={() => console.log("Heyho!")}
          titleTextColor="#007AFF"
          // image={
          //   <Image
          //     style={{ borderRadius: 5 }}
          //     source={{
          //       uri: "https://reactjs.org/favicon.ico",
          //     }}
          //   />
          // }
        />
      </React.Fragment>
    );
  } else {
    return <React.Fragment />;
  }
};

const NotifTableView = ({ notificationsdata }) => {
  const [showPicker, setShowPicker] = useState(false);
  console.log("reder view");
  var noficationTitle = "";

  return (
    <ScrollView>
      <TableView
        style={{ flex: 1 }}
        allowsToggle
        allowsMultipleSelection
        // appearance="dark"
        onPress={(event) => console.log(event)}
      >
        <Section
          footer="All Rights Reserved to Model N"
          footerTextStyle={{
           // textTransform: "capitalize",
            color: "#007AFF",
          }}
        >
          {notificationsdata.map((notification, key) => (
            <>{generateNotifLinkView(notification)}</>
          ))}
        </Section>
      </TableView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: "#EFEFF4", // Change to #000 to preview Dark Mode/Appereance
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default NotifTableView;
