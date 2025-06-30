import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './FavouriteStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import NetInfo from '@react-native-community/netinfo';

export default function FavouriteScreen() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [tab, setTab] = useState('upcoming');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const SelectTab = (tab: string) => {
    setTab(tab);
  };

  const appointments = [
    {
      id: 1,
      name: 'Dr. Kavita Rao',
      dept: 'Pediatrics',
      slot: 'Routine Checkup',
      slottime: '25min',
      date: 'Tue, July 9',
      time: '09:00 AM',
      location: 'City Children Hospital - Room 210',
      phone: '+91 9812312312',
    },
    {
      id: 2,
      name: 'Dr. Arjun Deshmukh',
      dept: 'ENT Specialist',
      slot: 'Ear Consultation',
      slottime: '20min',
      date: 'Wed, July 10',
      time: '01:45 PM',
      location: 'Sanjeevani ENT Clinic - Cabin A2',
      phone: '+91 9887654321',
    },
    {
      id: 3,
      name: 'Dr. Meera Shah',
      dept: 'Psychiatry',
      slot: 'Therapy Session',
      slottime: '60min',
      date: 'Fri, July 12',
      time: '11:00 AM',
      location: 'MindCare Clinic - Suite 5',
      phone: '+91 9991234567',
    },
  ];

  const pastAppointments = [
    {
      id: 4,
      name: 'Dr. Sarah Johnson',
      dept: 'Advanced Cardiology',
      slot: 'Consultation',
      slottime: '45min',
      date: 'Mon, June 10',
      time: '09:30 AM',
      location: 'Neo Medical Complex - Suite 2045',
      phone: '+91 9749279723',
    },
    {
      id: 5,
      name: 'Dr. Rahul Mehta',
      dept: 'Orthopedic Specialist',
      slot: 'Follow-up',
      slottime: '30min',
      date: 'Thu, June 13',
      time: '03:15 PM',
      location: 'Medistar Clinic - Block B, Room 112',
      phone: '+91 9876543210',
    },
    {
      id: 6,
      name: 'Dr. Priya Verma',
      dept: 'Dermatology',
      slot: 'Skin Checkup',
      slottime: '20min',
      date: 'Sat, June 15',
      time: '12:00 PM',
      location: 'Glow Skin Center - Cabin 3',
      phone: '+91 9123456789',
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.Name}>{item.name}</Text>
      <Text style={styles.dept}>{item.dept}</Text>
      <View style={[styles.slots]}>
        <View style={styles.slotContainer}>
          <Text style={[styles.slot, { color: '#d783c9' }]}>{item.slot}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={[styles.slot, { color: 'blue' }]}>{item.slottime}</Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View style={[styles.iconContainertab, { backgroundColor: '#d6edff' }]}>
          <Ionicons name={'calendar-outline'} size={16} color={'blue'} />
        </View>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={[styles.iconContainertab, { backgroundColor: '#ffffd8' }]}>
          <Ionicons name={'time-outline'} size={16} color={'orange'} />
        </View>
        <Text style={styles.date}>{item.time}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={[styles.iconContainertab, { backgroundColor: '#ffe0e2' }]}>
          <Ionicons name={'location-outline'} size={16} color={'red'} />
        </View>
        <Text style={styles.date}>{item.location}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={[styles.iconContainertab, { backgroundColor: '#d3ffdc' }]}>
          <Ionicons name={'call-outline'} size={16} color={'green'} />
        </View>
        <Text style={styles.date}>{item.phone}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <LinearGradient
            colors={['#6D9FFF', '#B27FFF', '#D27EFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBackground}
          >
            <Ionicons name={'person-outline'} size={26} color="black" />
          </LinearGradient>
        </View>

        <View style={styles.Textcontainer}>
          <Text style={styles.Title}>Smart Appointments</Text>
          <Text style={styles.desc}>Future health platforms</Text>
        </View>

        {isConnected !== null && (
          <View style={styles.netInfo}>
            <Ionicons
              name="radio-button-on"
              size={26}
              color={isConnected ? '#72d48a' : '#ff4d4d'}
            />
            <Text
              style={[
                styles.desc,
                { color: isConnected ? '#72d48a' : '#ff4d4d', marginLeft: 5 },
              ]}
            >
              {isConnected ? 'Connected' : 'Offline'}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.TabContainer}>
        <TouchableOpacity
          onPress={() => SelectTab('upcoming')}
          style={[
            styles.tab,
            { backgroundColor: tab === 'upcoming' ? '#d6edff' : '#fff' },
          ]}
        >
          <Text style={styles.tabTitle}>UP COMING</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SelectTab('history')}
          style={[
            styles.tab,
            { backgroundColor: tab === 'history' ? '#d6edff' : '#fff' },
          ]}
        >
          <Text style={styles.tabTitle}>History</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tab === 'upcoming' ? appointments : pastAppointments}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 10, padding: 10, paddingBottom: 200 }}
      />
    </View>
  );
}
