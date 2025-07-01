import { View, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import styles from './splashScreenStyles';
import auth from '@react-native-firebase/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        
        if (user) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'MainTabs' }],
          });
        } else {
          
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          });
        }
      }, 1000);
    });

    return unsubscribe; 
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

