import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './FavouriteStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import NetInfo from '@react-native-community/netinfo';
import { upcomingAppointments, pastAppointments }  from '../../../DummyData'
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
        data={tab === 'upcoming' ? appointments : pastAppointment}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 10, padding: 10, paddingBottom: 200 }}
      />
    </View>
  );
}
