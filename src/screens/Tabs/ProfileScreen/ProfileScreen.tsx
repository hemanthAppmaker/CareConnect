import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import HealthInfo from './HealthInfo/HealthInfo';

const ProfileScreen = () => {
  const [tab, setTab] = useState('person');

  const SelectTab = selectedTab => {
    setTab(selectedTab);
  };

  const getTabLabel = tabName => {
    switch (tabName) {
      case 'person':
        return 'Personal';
      case 'health':
        return 'Health';
      case 'about':
        return 'About';
      default:
        return '';
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.profileSection}>
          {/* Profile Avatar */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SJ</Text>
            </View>
            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons name="camera" size={12} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <View style={styles.profileInfo}>
            <Text style={styles.nameText}>Sarah Johnson</Text>
            <Text style={styles.detailText}>34 years old • Female</Text>

            {/* Status Tags */}
            <View style={styles.tagContainer}>
              <View style={styles.activeTag}>
                <Text style={styles.activeTagText}>Active Patient</Text>
              </View>
              <View style={styles.insuranceTag}>
                <Text style={styles.insuranceTagText}>Blue Cross</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabNavigation}>
        {['person', 'health', 'about'].map(tabName => (
          <TouchableOpacity
            key={tabName}
            onPress={() => SelectTab(tabName)}
            style={[
              styles.tabButton,
              { backgroundColor: tab === tabName ? '#f3f4f6' : 'transparent' },
            ]}
          >
            <Ionicons
              name={
                tabName === 'person'
                  ? tab === tabName
                    ? 'person'
                    : 'person-outline'
                  : tabName === 'health'
                  ? tab === tabName
                    ? 'heart'
                    : 'heart-outline'
                  : tab === tabName
                  ? 'clipboard'
                  : 'clipboard-outline'
              }
              size={18}
              color={tab === tabName ? '#111827' : '#6b7280'}
            />
            <Text
              style={[
                styles.tabLabel,
                { color: tab === tabName ? '#111827' : '#6b7280' },
              ]}
            >
              {getTabLabel(tabName)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        {tab === 'person' && <PersonalInfo />}
        {tab === 'health' && <HealthInfo />}
        {tab === 'about' && (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>
              About information coming soon
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  headerContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  profileInfo: {
    flex: 1,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  activeTag: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  activeTagText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#166534',
  },
  insuranceTag: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  insuranceTagText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#1e40af',
  },
  tabNavigation: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 6,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  placeholderContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  placeholderText: {
    fontSize: 14,
    color: '#9ca3af',
    fontStyle: 'italic',
  },
};

export default ProfileScreen;
