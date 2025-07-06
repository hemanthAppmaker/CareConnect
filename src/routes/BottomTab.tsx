import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Platform } from 'react-native';
import HomeScreen from '../screens/Tabs/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/Tabs/ProfileScreen/ProfileScreen';
import Appoinments from '../screens/Tabs/FavouriteScreen/FavouriteScreen';
import Foots from '../screens/Tabs/FootScreen/FootScreen';
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
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Appoinments') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Foots') {
            iconName = focused ? 'footsteps' : 'footsteps-outline';
          }

          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
              }}
            >
              <Ionicons
                name={iconName}
                size={focused ? 22 : 20}
                color={color}
                style={{
                  opacity: focused ? 1 : 0.6,
                }}
              />
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -8,
                    width: 4,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: color,
                  }}
                />
              )}
            </View>
          );
        },
        tabBarActiveTintColor: '#111827',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.03,
          shadowRadius: 8,
          height: Platform.OS === 'ios' ? 88 : 68,
          paddingBottom: Platform.OS === 'ios' ? 34 : 16,
          paddingTop: 16,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarAccessibilityLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Appoinments"
        component={Appoinments}
        options={{
          tabBarAccessibilityLabel: 'Appointments',
        }}
      />
      <Tab.Screen
        name="Foots"
        component={Foots}
        options={{
          tabBarAccessibilityLabel: 'Steps',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarAccessibilityLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
