import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const FootScreen = () => {
  const [steps, setSteps] = useState(8547);
  const [goal] = useState(10000);
  const [scaleAnim] = useState(new Animated.Value(1));
  const [lastChange, setLastChange] = useState(0);

  const progress = Math.min((steps / goal) * 100, 100);
  const remaining = Math.max(goal - steps, 0);

  const animateScale = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.05,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const addSteps = () => {
    setSteps(prev => prev + Math.floor(Math.random() * 50) + 10);
    setLastChange(Date.now());
    animateScale();
  };

  const removeSteps = () => {
    setSteps(prev => Math.max(0, prev - Math.floor(Math.random() * 30) - 5));
    setLastChange(Date.now());
    animateScale();
  };

  // Format number with commas
  const formatNumber = num => {
    return num.toLocaleString();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <View style={styles.content}>
        {/* Main Step Display */}
        <View style={styles.stepDisplayContainer}>
          <Animated.View
            style={[styles.stepDisplay, { transform: [{ scale: scaleAnim }] }]}
          >
            <Text style={styles.stepNumber}>{formatNumber(steps)}</Text>
            <Text style={styles.stepLabel}>STEPS TODAY</Text>
          </Animated.View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>PROGRESS</Text>
            <Text style={styles.progressPercentage}>
              {Math.round(progress)}%
            </Text>
          </View>

          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>

          <View style={styles.progressFooter}>
            <Text style={styles.progressText}>0</Text>
            <Text style={styles.progressText}>{formatNumber(goal)}</Text>
          </View>
        </View>

        {/* Goal Status */}
        <View style={styles.goalContainer}>
          {remaining > 0 ? (
            <View style={styles.goalText}>
              <Text style={styles.goalNumber}>{formatNumber(remaining)}</Text>
              <Text style={styles.goalLabel}> steps remaining</Text>
            </View>
          ) : (
            <Text style={styles.goalCompleted}>Goal completed</Text>
          )}
        </View>

        {/* Control Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={removeSteps}
            activeOpacity={0.7}
          >
            <Ionicons name="remove" size={20} color="#6b7280" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={addSteps}
            activeOpacity={0.7}
          >
            <Ionicons name="add" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Subtle Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>AVG DAILY</Text>
            <Text style={styles.statValue}>7,845</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>THIS WEEK</Text>
            <Text style={styles.statValue}>52,180</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>STREAK</Text>
            <Text style={styles.statValue}>12 days</Text>
          </View>
        </View>

        {/* Achievement Indicator */}
        {steps >= goal && (
          <View style={styles.achievementContainer}>
            <View style={styles.achievementDot}>
              <View style={styles.achievementInner} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    maxWidth: 350,
    alignSelf: 'center',
  },
  stepDisplayContainer: {
    marginBottom: 50,
  },
  stepDisplay: {
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 72,
    fontWeight: '100',
    color: '#111827',
    lineHeight: 80,
  },
  stepLabel: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
    letterSpacing: 1,
    marginTop: 8,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 50,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 10,
    color: '#6b7280',
    fontWeight: '500',
    letterSpacing: 1,
  },
  progressPercentage: {
    fontSize: 10,
    color: '#6b7280',
    fontWeight: '500',
    letterSpacing: 1,
  },
  progressBarContainer: {
    width: '100%',
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#111827',
    borderRadius: 2,
  },
  progressFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  progressText: {
    fontSize: 10,
    color: '#9ca3af',
    fontWeight: '500',
  },
  goalContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
  goalText: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  goalNumber: {
    fontSize: 16,
    color: '#4b5563',
    fontWeight: '500',
  },
  goalLabel: {
    fontSize: 14,
    color: '#4b5563',
  },
  goalCompleted: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 50,
  },
  secondaryButton: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  primaryButton: {
    width: 48,
    height: 48,
    backgroundColor: '#111827',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 10,
    color: '#9ca3af',
    fontWeight: '500',
    letterSpacing: 1,
  },
  statValue: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '400',
    marginTop: 4,
  },
  achievementContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  achievementDot: {
    width: 32,
    height: 32,
    backgroundColor: '#111827',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  achievementInner: {
    width: 8,
    height: 8,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
});

export default FootScreen;
