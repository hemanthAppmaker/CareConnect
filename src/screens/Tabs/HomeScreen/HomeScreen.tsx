import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './HomeStyle';
import { bottom, top } from '../../../DummyData';
import CardItem from './CardItem';
import CardConsultation from './CardConsultation';
import ProfileHeader from './ProfileHeader';
import WorkoutCalendar from './workoutCalender';
export default function MyComponent() {
  const data = top;
  const data2 = bottom;

  const itemseparator = () => (
    <View
      style={{
        width: 10,
      }}
    />
  );

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <ProfileHeader
        role={'patient'}
        doctorName={'Dr. Neha Sharma'}
        name={'Ajay P'}
      />

      <View style={styles.contentSection}>
        <View style={styles.titleRow}>
          <Text style={styles.MainText}>Today's Appointments</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardItem item={item} />}
          contentContainerStyle={styles.list}
          horizontal
          ItemSeparatorComponent={itemseparator}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.upcomingContainer} activeOpacity={0.7}>
          <Text style={styles.subText}>Today</Text>
          <Ionicons name={'chevron-forward'} size={20} color={'gray'} />
        </TouchableOpacity>

        <WorkoutCalendar />

        <FlatList
          data={data2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardConsultation item={item} />}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={itemseparator}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          ListEmptyComponent={
            <Text style={styles.emptyText}>No events today.</Text>
          }
        />
      </View>
    </ScrollView>
  );
}
