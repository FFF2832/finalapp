import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  const { colorMode } = useColorMode();
  const MyTheme = colorMode == 'light' ? lightTheme : darkTheme;
  return (
    <NavigationContainer theme={MyTheme} >
      <StatusBar
        barStyle={colorMode == "light" ? "dark-content" : "light-content"}
        backgroundColor={colorMode == "light" ? "white" : "black"}
      />
      {Platform.OS == 'ios' ?
        <MyTabs /> :
        <MyTabs />
      }
    </NavigationContainer>
  );
}



const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colorMode == 'light' ? '#FEFFEF' : '#574E45',
        tabBarActiveTintColor: colorMode == 'light' ? '#574E45' : '#ECD563',
        tabBarStyle: { backgroundColor: colorMode == 'light' ? '#F9E6A1' : '#9D8F72' },
        // headerShown: false
      }}
      >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <Foundation name="paw" color={color} size={30} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="ActionButton"
        component={NullScreen}
        options={{
          tabBarButton: () => <ActionButton />
        }}
      /> */}
         <Tab.Screen
        name="DTypeStack"
        component={DTypeStack}
        options={{
          headerShown: false,
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="MenuStack"
        component={MenuStack}
        options={{
          headerShown: false,
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="restaurant-menu" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
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
          title: "Settings",
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
            backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
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

export default Navigation;