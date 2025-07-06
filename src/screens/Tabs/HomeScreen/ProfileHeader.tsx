import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { BlurView } from '@react-native-community/blur';
import Ionicons from '@react-native-vector-icons/ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ProfileHeader = ({ role, name, doctorName, appointmentCount = 1 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let isMounted = true;

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    if (role === 'patient' && isMounted) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }

    return () => {
      isMounted = false;
    };
  }, [role]);

  if (role === 'patient') {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#667eea', '#764ba2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBackground}
        >
          <View style={styles.backgroundElements}>
            {[styles.circle1, styles.circle2, styles.circle3].map(
              (circleStyle, i) => (
                <Animated.View
                  key={i}
                  style={[
                    styles.floatingCircle,
                    circleStyle,
                    { opacity: fadeAnim },
                  ]}
                />
              ),
            )}
          </View>

          <Animated.View
            style={[
              styles.patientWrapper,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
              },
            ]}
          >
            {/* <BlurView blurType="light" blurAmount={10} style={styles.glassCard}> */}
            <LinearGradient
              colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0.1)']}
              style={styles.cardGradient}
            >
              <View style={styles.cardHeader}>
                <View style={styles.statusIndicator}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusText}>Active</Text>
                </View>
                <TouchableOpacity style={styles.notificationBadge}>
                  <Icon name="bell" size={18} color="rgba(255,255,255,0.25)" />
                </TouchableOpacity>
              </View>

              <Text style={styles.patientGreeting}>Hello {name} 👋</Text>
              <Text style={styles.patientMsg}>
                You have{' '}
                <Animated.Text
                  style={[
                    styles.appointmentCount,
                    { transform: [{ scale: pulseAnim }] },
                  ]}
                >
                  {appointmentCount} appointment
                  {appointmentCount > 1 ? 's' : ''}
                </Animated.Text>{' '}
                today with <Text style={styles.highlight}> {doctorName}</Text>
              </Text>

              <View style={styles.quickActions}>
                {[
                  { icon: 'calendar-outline', label: 'View' },
                  { icon: 'videocam-outline', label: 'Join' },
                  { icon: 'chatbubble-outline', label: 'Chat' },
                ].map(({ icon, label }, index) => (
                  <TouchableOpacity key={index} style={styles.actionButton}>
                    <Ionicons name={icon as any} size={16} color="#667eea" />
                    <Text style={styles.actionText}>{label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </LinearGradient>
            {/* </BlurView> */}
          </Animated.View>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4c63d2', '#667eea', '#764ba2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        {/* Animated Background Elements */}
        <View style={styles.backgroundElements}>
          <Animated.View
            style={[
              styles.floatingCircle,
              styles.circle1,
              { opacity: fadeAnim },
            ]}
          />
          <Animated.View
            style={[
              styles.floatingCircle,
              styles.circle2,
              { opacity: fadeAnim },
            ]}
          />
          <Animated.View
            style={[
              styles.floatingCircle,
              styles.circle3,
              { opacity: fadeAnim },
            ]}
          />
        </View>

        <View style={styles.topbar}>
          <TouchableOpacity style={styles.settingsButton}>
            <Ionicons name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        <Animated.View
          style={[
            styles.profileSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg',
              }}
              style={styles.profileImage}
              resizeMode="cover"
            />
            <View style={styles.onlineIndicator} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.doctorName}>Dr. Neha Sharma</Text>
            <Text style={styles.doctorSpecialty}>Cardiologist</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Ionicons name="calendar" size={16} color="#ffffff90" />
                <Text style={styles.statText}>3 Today</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.statText}>4.9</Text>
              </View>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={[styles.quickStatsContainer, { opacity: fadeAnim }]}
        >
          {/* <BlurView intensity={15} style={styles.quickStatsBlur}> */}
          <View style={styles.quickStats}>
            <View style={styles.quickStatItem}>
              <Text style={styles.quickStatNumber}>156</Text>
              <Text style={styles.quickStatLabel}>Patients</Text>
            </View>
            <View style={styles.quickStatItem}>
              <Text style={styles.quickStatNumber}>4.9</Text>
              <Text style={styles.quickStatLabel}>Rating</Text>
            </View>
            <View style={styles.quickStatItem}>
              <Text style={styles.quickStatNumber}>8</Text>
              <Text style={styles.quickStatLabel}>Years</Text>
            </View>
          </View>
          {/* </BlurView> */}
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 280,
    overflow: 'hidden',
  },
  gradientBackground: {
    flex: 1,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },
  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  floatingCircle: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  circle1: {
    width: 100,
    height: 100,
    top: -30,
    right: -20,
  },
  circle2: {
    width: 60,
    height: 60,
    top: 100,
    left: -15,
  },
  circle3: {
    width: 80,
    height: 80,
    bottom: -20,
    right: 50,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  settingsButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  notificationButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff4757',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 100,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2ed573',
    borderWidth: 3,
    borderColor: '#fff',
  },
  textContainer: {
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statDivider: {
    width: 1,
    height: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 12,
  },
  statText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  quickStatsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  quickStatsBlur: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  quickStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  quickStatItem: {
    alignItems: 'center',
  },
  quickStatNumber: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  quickStatLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 2,
  },
  // Patient styles
  patientWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  glassCard: {
    borderRadius: 20,
    overflow: 'hidden',
    // width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardGradient: {
    padding: 24,
    borderRadius: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2ed573',
  },
  statusText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  notificationBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  patientGreeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  patientMsg: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 4,
  },
  appointmentCount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    // borderRadius: 12,
  },
  doctorInfo: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: '700',
    color: '#fff',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  actionText: {
    fontSize: 14,
    color: '#667eea',
    fontWeight: '600',
  },
});

export default ProfileHeader;
