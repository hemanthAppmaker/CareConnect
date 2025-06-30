import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './ProfileStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import HealthInfo from './HealthInfo/HealthInfo';
const ProfileScreen = () => {
  const [tab, setTab] = useState('person');

  const SelectTab = tab => {
    setTab(tab);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Text style={styles.ProfileText}>SJ</Text>
            <View style={styles.camerIcon}>
              <Ionicons name={'camera'} size={15} color={'#fff'} />
            </View>
          </View>
          <View style={styles.DetailsContainer}>
            <Text style={styles.mainText}>Sarah Johnson</Text>
            <Text style={styles.descText}>34 years old .Female</Text>
            <View style={styles.rowContainer}>
              <View style={styles.row1}>
                <Text style={[styles.descText, { color: 'green' }]}>
                  Active Patient
                </Text>
              </View>
              <View style={[styles.row1, { backgroundColor: '#acd7e6' }]}>
                <Text style={[styles.descText, { color: 'blue' }]}>
                  Blue Cross Blue shield
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => SelectTab('person')}
          style={[
            styles.tabs,
            {
              marginLeft: 5,
              backgroundColor: tab === 'person' ? '#bae1ff' : 'transparent',
            },
          ]}
        >
          <Ionicons
            name={tab === 'person' ? 'person-sharp' : 'person-outline'}
            size={26}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SelectTab('health')}
          style={[
            styles.tabs,
            {
              marginLeft: 5,
              backgroundColor: tab === 'health' ? '#bae1ff' : 'transparent',
            },
          ]}
        >
          <Ionicons
            name={tab === 'health' ? 'heart-sharp' : 'heart-outline'}
            size={26}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SelectTab('about')}
          style={[
            styles.tabs,
            {
              marginLeft: 5,
              backgroundColor: tab === 'about' ? '#bae1ff' : 'transparent',
            },
          ]}
        >
          <Ionicons
            name={tab === 'about' ? 'clipboard-sharp' : 'clipboard-outline'}
            size={26}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {tab === 'person' && (
        <View>
          <PersonalInfo />
        </View>
      )}
      {tab == 'health' && (
        <View>
          <HealthInfo />
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
