import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './HealthInfoStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HealthInfo = () => {
  const data = [
    {
      id: 1,
      icon: 'pulse',
      name: 'Blood Pressure',
      value: 120,
      backgroundColor: '#d4fffc',
      color: 'blue',
      content: 'normal',
    },
    {
      id: 2,
      icon: 'heart-outline',
      name: 'Heart Rate',
      value: 120,
      backgroundColor: '#f1cbff',
      color: 'red',
      content: 'normal',
    },
    {
      id: 3,
      icon: 'person-outline',
      value: 120,
      backgroundColor: '#c9e7db',
      name: 'BMI',
      color: 'green',
      content: 'normal',
    },
  ];

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.MainText}>Health Summery</Text>
        </View>
        <View>
          {data.map(data => {
            return (
              <View
                style={[
                  styles.rowContainer,
                  { backgroundColor: data.backgroundColor },
                ]}
              >
                <View style={styles.DetailsContainer}>
                  <Text style={[styles.subText, { color: data.color }]}>
                    {data.name}
                  </Text>
                  <Text
                    style={[
                      styles.MainText,
                      { color: data.color, fontSize: 26 },
                    ]}
                  >
                    {data.value}
                  </Text>
                  <Text style={[styles.DescText, { color: data.color }]}>
                    {data.content}
                  </Text>
                </View>
                <View style={[styles.IconContainer]}>
                  <Ionicons name={data.icon} size={30} color={data.color} />
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

export default HealthInfo;
