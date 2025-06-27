import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Tabs/HomeScreen';
import ProfileScreen from '../screens/Tabs/ProfileScreen';
import Favourite from '../screens/Tabs/FavouriteScreen';
import Foots from '../screens/Tabs/FootScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'file-tray-full-sharp' : 'file-tray-full-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'Foots') {
            iconName = focused ? 'flame-sharp' : 'flame-outline';
          }

          return <Ionicons name={iconName} size={26} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle:{
            fontSize:13
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Foots" component={Foots} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
