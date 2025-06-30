import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './PersonalInfoStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PersonalInfo = () => {
  const data = [
    {
      id: 1,
      icon: 'call-outline',
      name: 'phone',
      color: '#bae1ff',
      content: '+91 98787889',
    },
    {
      id: 2,
      icon: 'mail-outline',
      name: 'Email',
      color: '#f1cbff',
      content: 'sarah.joshnson@gmail.com',
    },
    {
      id: 3,
      icon: 'location-outline',
      name: 'Address',
      color: '#baffc9',
      content: '123, Oak street, San Francisco, CA 1902',
    },
    {
      id: 4,
      icon: 'heart-outline',
      name: 'Blood Group',
      color: '#ffb3ba',
      content: 'O+',
    },
  ];

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
        <TouchableOpacity style={styles.Logout}>
          <Text style={[styles.MainText, { color: '#808080' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalInfo;
