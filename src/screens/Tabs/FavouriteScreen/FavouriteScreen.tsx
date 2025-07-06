import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './FavouriteStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import NetInfo from '@react-native-community/netinfo';
import { upcomingAppointments, pastAppointments } from '../../../DummyData';
export default function FavouriteScreen() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [tab, setTab] = useState('upcoming');

  const appointments = upcomingAppointments;
  const pastAppointment = pastAppointments;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const SelectTab = (tab: string) => {
    setTab(tab);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.dept}>{item.dept}</Text>

      <View style={styles.slotsRow}>
        <View style={[styles.tag, { backgroundColor: '#f3e5f5' }]}>
          <Text style={[styles.tagText, { color: '#9c27b0' }]}>
            {item.slot}
          </Text>
        </View>
        <View style={[styles.tag, { backgroundColor: '#e8eaf6' }]}>
          <Text style={[styles.tagText, { color: '#3f51b5' }]}>
            {item.slottime}
          </Text>
        </View>
      </View>

      <View style={styles.detailRow}>
        <Ionicons
          name="calendar-outline"
          size={16}
          color="#1976d2"
          style={styles.icon}
        />
        <Text style={styles.detailText}>{item.date}</Text>
      </View>
      <View style={styles.detailRow}>
        <Ionicons
          name="time-outline"
          size={16}
          color="#f57c00"
          style={styles.icon}
        />
        <Text style={styles.detailText}>{item.time}</Text>
      </View>
      <View style={styles.detailRow}>
        <Ionicons
          name="location-outline"
          size={16}
          color="#d32f2f"
          style={styles.icon}
        />
        <Text style={styles.detailText}>{item.location}</Text>
      </View>
      <View style={styles.detailRow}>
        <Ionicons
          name="call-outline"
          size={16}
          color="#388e3c"
          style={styles.icon}
        />
        <Text style={styles.detailText}>{item.phone}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.container}>
        <LinearGradient
          colors={['#6D9FFF', '#B27FFF', '#D27EFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.iconWrapper}
        >
          <Ionicons name={'person-outline'} size={26} color="black" />
        </LinearGradient>

        <View style={styles.textWrapper}>
          <Text style={styles.title}>Smart Appointments</Text>
          <Text style={styles.subTitle}>Future health platforms</Text>
        </View>

        {isConnected !== null && (
          <View style={styles.connectionStatus}>
            <Ionicons
              name="radio-button-on"
              size={16}
              color={isConnected ? '#4caf50' : '#f44336'}
            />
            <Text
              style={{
                color: isConnected ? '#4caf50' : '#f44336',
                fontWeight: '500',
                marginLeft: 5,
              }}
            >
              {isConnected ? 'Connected' : 'Offline'}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.tabRow}>
        <TouchableOpacity
          onPress={() => SelectTab('upcoming')}
          style={[styles.tabButton, tab === 'upcoming' && styles.activeTab]}
        >
          <Text style={styles.tabText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SelectTab('history')}
          style={[styles.tabButton, tab === 'history' && styles.activeTab]}
        >
          <Text style={styles.tabText}>History</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tab === 'upcoming' ? appointments : pastAppointment}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10, paddingBottom: 150, gap: 12 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
