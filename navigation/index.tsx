/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, ColorSchemeName, Pressable, Text } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Context } from '../context';
import { logoutAction } from '../redux/actions/login.action';
import NotificationsScreen from '../screens/NotificationsScreen';
import SearchCardsScreen from '../screens/SearchCardsScreen';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import VoiceSearchScreen from '../screens/VoiceSearchScreen';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootDrawer />
      {/* <RootStackNavigator/> */}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props: any) {
  const { dispatch } = React.useContext(Context);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label={() => <Text style={{ color: 'white' }}>Logout</Text>}
        style={{ backgroundColor: 'black' }}
        onPress={() => dispatch(logoutAction())}
      />
    </DrawerContentScrollView>
  );
}

function RootDrawer() {

  return (
    <Drawer.Navigator drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Notifications" component={NotificationsScreen}
        options={({ navigation, route } : any) => ({
          drawerIcon: (config : any) => <FontAwesome
            name='bell'
            size={23}
          ></FontAwesome>,
        })} />
      <Drawer.Screen name="Search Cards" component={SearchCardsScreen}
        options={{
          drawerIcon: (config : any) => <FontAwesome
            name='vcard-o'
            size={23}
          ></FontAwesome>
        }}
      />
      <Drawer.Screen name="Search" component={VoiceSearchScreen}
        options={{
          drawerIcon: (config : any) => <FontAwesome
            name='microphone'
            size={23}
          ></FontAwesome>
        }}
      />
    </Drawer.Navigator>
  );
}


function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Cards" component={SearchCardsScreen} />
    </Stack.Navigator>
  );
}


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}



function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { dispatch } = React.useContext(Context);
  return (
    <BottomTab.Navigator
      initialRouteName="Cards"
      screenOptions={{

        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>

      <BottomTab.Screen
        name="Cards"
        component={SearchCardsScreen}
        options={({ navigation }: RootTabScreenProps<'Cards'>) => ({
          title: 'Cards',
          unmountInactiveRoutes: true,
          tabBarIcon: ({ color } : {color : string}) => <TabBarIcon name="link" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => dispatch(logoutAction())}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="close"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color } : {color : string}) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}