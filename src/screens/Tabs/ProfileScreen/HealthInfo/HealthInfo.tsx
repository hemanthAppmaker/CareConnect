import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import styles from './HealthInfoStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {healthData} from '../../../../DummyData';

const HealthInfo = () => {
  const data = healthData;

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.MainText}>Health Summary</Text>
        </View>
        <View>
          {data.map((item, id) => (
            <View
              key={id}
              style={[
                styles.rowContainer,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              <View style={styles.DetailsContainer}>
                <Text style={[styles.subText, { color: item.color }]}>
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.MainText,
                    { color: item.color, fontSize: 26 },
                  ]}
                >
                  {item.value}
                </Text>
                <Text style={[styles.DescText, { color: item.color }]}>
                  {item.content}
                </Text>
              </View>
              <View style={styles.IconContainer}>
                <Ionicons name={item.icon} size={30} color={item.color} />
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.LogoutContianer}>
        <TouchableOpacity style={styles.Logout}>
          <Text style={[styles.MainText, { color: '#808080' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HealthInfo;
