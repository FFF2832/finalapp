// import React from 'react';
// import { Platform } from 'react-native';
// import { NavigationContainer, useTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Foundation from 'react-native-vector-icons/Foundation' 
// import Ionicons from 'react-native-vector-icons/Ionicons' 
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { StatusBar, Divider, Image, Input, HStack, Box } from 'native-base';
// import { extendTheme, useColorMode } from 'native-base';
// import MapScreen from'../screens/MapScreen';
// import AlbumScreen from '../screens/AlbumScreen';
// import DetailScreen from '../screens/DetailScreen';
// import CatDetailScreen from '../screens/CatDetailScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import DTypeScreen from '../screens/DTypeScreen'
// import ContentScreen from '../screens/ContentScreen';
// import DisplaySettingScreen from '../screens/DisplaySettingScreen';
// import AccountSettingScreen from '../screens/AccountSettingScreen';
// import MenuScreen from '../screens/MenuScreen'
// import NullScreen from '../screens/NullScreen';
// import { lightTheme, darkTheme } from '../Theme';
// import ActionButton from '../components/ActionButton';

// import albumData from "../json/albums.json";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


// const Navigation = () => {
//   const { colorMode } = useColorMode();
//   const MyTheme = colorMode == 'light' ? lightTheme : darkTheme;
//   return (
//     <NavigationContainer theme={MyTheme} >
//       <StatusBar
//         barStyle={colorMode == "light" ? "dark-content" : "light-content"}
//         backgroundColor={colorMode == "light" ? "white" : "black"}
//       />
//       {Platform.OS == 'ios' ?
//         <MyTabs /> :
//         <MyTabs />
//       }
//     </NavigationContainer>
//   );
// }



// const MyTabs = () => {
//   const { colors } = useTheme();
//   const { colorMode } = useColorMode();

//   return (
//     <Tab.Navigator
//       initialRouteName="HomeStack"
//       screenOptions={{
//         tabBarInactiveTintColor: colorMode == 'light' ? '#FEFFEF' : '#574E45',
//         tabBarActiveTintColor: colorMode == 'light' ? '#574E45' : '#ECD563',
//         tabBarStyle: { backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#9D8F72' },
//         // headerShown: false
//       }}
//       >
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{
//           headerShown: false,
//           title: "",
//           tabBarIcon: ({ color }) => (
//             <Foundation name="paw" color={color} size={30} />
//           ),
//         }}
//       />
//       {/* <Tab.Screen
//         name="ActionButton"
//         component={NullScreen}
//         options={{
//           tabBarButton: () => <ActionButton />
//         }}
//       /> */}
//          <Tab.Screen
//         name="DTypeStack"
//         component={DTypeStack}
//         options={{
//           headerShown: false,
//           title: "",
//           headerTitleStyle: {
//             fontWeight: '400',
//             fontSize: 20
//           },
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="heart-outline" color={color} size={30} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="MenuStack"
//         component={MenuStack}
//         options={{
//           headerShown: false,
//           title: "",
//           headerTitleStyle: {
//             fontWeight: '400',
//             fontSize: 20
//           },
//           tabBarIcon: ({ color }) => (
//             <MaterialIcons name="restaurant-menu" color={color} size={30} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="SettingsStack"
//         component={SettingsStack}
//         options={{
//           headerShown: false,
//           title: "",
//           headerTitleStyle: {
//             fontWeight: '400',
//             fontSize: 20
//           },
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="information-circle" color={color} size={30} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// const SettingsStack = ({ navigation }) => {
//   const { colorMode } = useColorMode();

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="資訊"
//         component={SettingsScreen}
//         options={{
//           title: "Settings",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
          
//         }}
//       />
//       <Stack.Screen
//         name="DisplaySetting"
//         component={DisplaySettingScreen}
//         options={{
//           title: "切換主題",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
//           },
//           headerTintColor: colorMode == 'light' ? 'black' : 'white',
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//         }}
//       />
//       <Stack.Screen
//         name="Map"
//         component={MapScreen}
//         options={{
//           title: "地圖",
//           headerStyle: {
//             backgroundColor: '#F9E6A1',
//           },
//           headerTintColor: colorMode == 'light' ? 'black' : 'white',
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//         }}
//       />
     

//     </Stack.Navigator>
//   );
// }

// const HomeStack = ({ navigation }) => {
//   const { colorMode } = useColorMode();

//   return (
//     <Stack.Navigator
//     // screenOptions={{
//     //   headerShown: false
//     // }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={AccountSettingScreen}
//         options={{
//           title: "浪浪別哭",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
          
//         }}
//       />
//       <Stack.Screen
//         name="Detail"
//         component={DetailScreen}
//         options={{
//           title: "詳細",
//           headerStyle: {
//             backgroundColor: '#F9E6A1',
//           },
//           headerTintColor: colorMode == 'light' ? 'black' : 'white',
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//         }}
//       />
//       <Stack.Screen
//         name="CatDetail"
//         component={CatDetailScreen}
//         options={{
//           title: "詳細",
//           headerStyle: {
//             backgroundColor: '#F9E6A1',
//           },
//           headerTintColor: colorMode == 'light' ? 'black' : 'white',
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//         }}
//       />
      
//     </Stack.Navigator>
//   );
// }
// const DTypeStack = ({ navigation }) => {
//   const { colorMode } = useColorMode();

//   return (
//     <Stack.Navigator
//     >
//       <Stack.Screen
//         name="DType"
//         component={DTypeScreen}
//         options={{
//           title: "我的收藏",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
//           },
          
         
//         }}
//       />
//       {/* <Stack.Screen
//         name="Content"
//         component={ContentScreen}
//         options={({ route }) => ({
//           title:"",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
//           },
//           headerTintColor: colorMode == 'light' ? 'black' : 'white',
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//         })}
//       /> */}
     
//     </Stack.Navigator>
//   );
// }

// const MenuStack = ({ navigation }) => {
//   const { colorMode } = useColorMode();

//   return (
//     <Stack.Navigator
//     // screenOptions={{
//     //   headerShown: false
//     // }}
//     >
//       <Stack.Screen
//         name="Menu"
//         component={MenuScreen}
//         options={{
//           title: "菜單",
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
          
//         }}
//       />
//       <Stack.Screen
//         name="Detail"
//         component={DetailScreen}
//         options={{
//           title: "詳細",
//           headerStyle: {
//             backgroundColor: '#F9E6A1',
//           },
//           headerTintColor: colorMode == 'light' ? 'black' : 'white',
//           headerStyle: {
//             backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
//           },
//           headerTitleStyle: {
//             color: colorMode == 'light' ? 'black' : 'white',
//             fontWeight: '400',
//             fontSize: 20
//           },
//         }}
//       />
      
//     </Stack.Navigator>
//   );
// }

// export default Navigation;

import React,{ useRef }  from 'react';
import { Animated, Dimensions,  Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'

import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation' 
import Ionicons from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StatusBar, Divider, Image, Input, HStack, Box } from 'native-base';
import { extendTheme, useColorMode } from 'native-base';
import MapScreen from'../screens/MapScreen';
import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import CatDetailScreen from '../screens/CatDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DTypeScreen from '../screens/DTypeScreen'
import ContentScreen from '../screens/ContentScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';
import MenuScreen from '../screens/MenuScreen'
import NullScreen from '../screens/NullScreen';
import { lightTheme, darkTheme } from '../Theme';
import ActionButton from '../components/ActionButton';

import albumData from "../json/albums.json";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// Hiding Tab Names...
export default function index() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const { colorMode } = useColorMode();
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        
      }}
            screenOptions={{
        tabBarInactiveTintColor: colorMode == 'light' ? '#FEFFEF' : '#574E45',
        tabBarActiveTintColor: colorMode == 'light' ? '#574E45' : '#ECD563',
        tabBarStyle: { backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#9D8F72' },
        // headerShown: false
      }}
      >

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen name="HomeStack" component={HomeStack} options={{
          headerShown: false,
          // focused
          tabBarIcon: ({ color }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20,
              
            }}>
              <FontAwesome5
                name="paw"
                size={20}
                color={color}
              ></FontAwesome5>
              
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 1,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"我的收藏"} component={DTypeStack} options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="heart"
                size={20}
                color={color}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*1.3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


       

        

        <Tab.Screen name={"菜單"} component={ MenuStack } options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              {/* <FontAwesome5
                name="bell"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5> */}
              <MaterialIcons name="restaurant-menu"  size={25}
                color={color}  />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2.65,
              useNativeDriver:true,
              
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Settings"} component={SettingsStack} options={
          {headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="info-circle"
                size={20}
                color={color}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 10,
        height: 3,
        backgroundColor: colorMode=="light"?"#35322E" : "#ECD563",
        position: 'absolute',
        bottom:80,
        // Horizontal Padding = 20...
        left:20,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
      
    </NavigationContainer>
  );
}

const HomeStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Home"
        component={AccountSettingScreen}
        options={{
          title: "浪浪別哭",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "詳細",
          headerStyle: {
            backgroundColor: '#F9E6A1',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="CatDetail"
        component={CatDetailScreen}
        options={{
          title: "詳細",
          headerStyle: {
            backgroundColor: '#F9E6A1',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      
    </Stack.Navigator>
    
  );
}
const SettingsStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="資訊"
        component={SettingsScreen}
        options={{
          title: "資訊",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "切換主題",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "地圖",
          headerStyle: {
            backgroundColor: '#F9E6A1',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
     

    </Stack.Navigator>
  );
}
const MenuStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: "菜單",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "詳細",
          headerStyle: {
            backgroundColor: '#F9E6A1',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      
    </Stack.Navigator>
  );
}
const DTypeStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="DType"
        component={DTypeScreen}
        options={{
          title: "我的收藏",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#BCB9A7',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          
         
        }}
      />
      {/* <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={({ route }) => ({
          title:"",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      /> */}
     
    </Stack.Navigator>
  );
}
function getWidth() {
  let width = Dimensions.get("window").width
  // Horizontal Padding = 20...
  width = width - 30

  // Total five Tabs...
  return width / 5
}

// function EmptyScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function NotificationScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }

// function SearchScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Search!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E6A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
