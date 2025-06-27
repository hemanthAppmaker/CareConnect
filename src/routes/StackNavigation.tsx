import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTab';

export type RootStackParamList = {
  MainTabs: undefined;
  ProfileScreen: undefined; 
  HomeScreens: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
