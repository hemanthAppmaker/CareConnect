import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './PersonalInfoStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getAuth } from '@react-native-firebase/auth';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {Personalhealth} from '../../../../DummyData'
const PersonalInfo = () => {
    const navigation = useNavigation();

const data = Personalhealth

  const logout = async () => {
    try {
      await getAuth().signOut();

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }], // or 'Login' or 'Signup' depending on your flow
        })
      );
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.MainText}>Personal Information</Text>
          <Ionicons name={'create-outline'} size={22} color={'#black'} />
        </View>
        <View>
          {data.map(data => {
            return (
              <View style={styles.rowContainer}>
                <View
                  style={[
                    styles.IconContainer,
                    { backgroundColor: data.color },
                  ]}
                >
                  <Ionicons name={data.icon} size={22} color={'#black'} />
                </View>
                <View style={styles.DetailsContainer}>
                  <Text style={styles.subText}>{data.name}</Text>
                  <Text style={styles.DescText}>{data.content}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.LogoutContianer}>
        <TouchableOpacity style={styles.Logout} onPress={logout}>
          <Text style={[styles.MainText, { color: '#808080' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalInfo;
