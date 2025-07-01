import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTab';
import splashScreen from '../screens/SplashScreen/splashScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import SignupScreen from '../screens/SignupScreen/SignupScreen'
export type RootStackParamList = {
  MainTabs: undefined;
  splashScreen: undefined;
  ProfileScreen: undefined; 
  HomeScreens: undefined; 
  LoginScreen: undefined; 
  SignupScreen: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="splashScreen" component={splashScreen} />
      <Stack.Screen options={{animation:'slide_from_left'}} name="SignupScreen" component={SignupScreen} />
      <Stack.Screen options={{animation:'slide_from_right'}} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
