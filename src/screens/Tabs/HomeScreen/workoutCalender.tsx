import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const CALENDAR_WIDTH = width - 40;
const DAY_SIZE = (CALENDAR_WIDTH - 60) / 7;

const WorkoutCalendar = () => {
  const [workoutData, setWorkoutData] = useState({
    '2025-07-01': 'completed',
    '2025-07-03': 'completed',
    '2025-07-05': 'partial',
    '2025-07-07': 'completed',
    '2025-07-10': 'partial',
    '2025-07-12': 'completed',
    '2025-07-15': 'completed',
    '2025-07-18': 'partial',
    '2025-07-20': 'completed',
  });

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const toggleWorkout = day => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      '0',
    )}-${String(day).padStart(2, '0')}`;

    setWorkoutData(prev => {
      const current = prev[dateStr];
      let newStatus;

      if (!current) {
        newStatus = 'completed';
      } else if (current === 'completed') {
        newStatus = 'partial';
      } else {
        newStatus = undefined;
      }

      const updated = { ...prev };
      if (newStatus) {
        updated[dateStr] = newStatus;
      } else {
        delete updated[dateStr];
      }

      return updated;
    });
  };

  const getStatusIndicator = day => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      '0',
    )}-${String(day).padStart(2, '0')}`;
    const status = workoutData[dateStr];

    if (status === 'completed') {
      return <View style={styles.completedCircle} />;
    } else if (status === 'partial') {
      return <View style={styles.partialDot} />;
    }
    return null;
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalCells = Math.ceil((daysInMonth + firstDayOfMonth) / 7) * 7;

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View key={`empty-${i}`} style={styles.dayContainer} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();

      days.push(
        <TouchableOpacity
          key={day}
          style={[styles.dayContainer, isToday && styles.today]}
          onPress={() => toggleWorkout(day)}
          activeOpacity={0.7}
        >
          <Text style={[styles.dayText, isToday && styles.todayText]}>
            {day}
          </Text>
          <View style={styles.indicatorContainer}>
            {getStatusIndicator(day)}
          </View>
        </TouchableOpacity>,
      );
    }

    // Fill remaining cells to complete the grid
    const remainingCells = totalCells - days.length;
    for (let i = 0; i < remainingCells; i++) {
      days.push(<View key={`empty-end-${i}`} style={styles.dayContainer} />);
    }

    return days;
  };

  const getStats = () => {
    const totalDays = Object.keys(workoutData).length;
    const completedDays = Object.values(workoutData).filter(
      status => status === 'completed',
    ).length;
    const partialDays = Object.values(workoutData).filter(
      status => status === 'partial',
    ).length;

    return { totalDays, completedDays, partialDays };
  };

  const { totalDays, completedDays, partialDays } = getStats();

  return (
    <View style={styles.container}>
      <Text style={styles.monthTitle}>
        {monthNames[currentMonth]} {currentYear}
      </Text>

      <View style={styles.calendar}>
        <View style={styles.weekHeader}>
          {dayNames.map((day, index) => (
            <View key={index} style={styles.weekDayContainer}>
              <Text style={styles.weekDay}>{day}</Text>
            </View>
          ))}
        </View>

        <View style={styles.daysGrid}>{renderCalendarDays()}</View>
      </View>

      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={styles.completedCircle} />
          <Text style={styles.legendText}>Full Workout</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={styles.partialDot} />
          <Text style={styles.legendText}>Partial</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <Text style={styles.statsText}>
          {completedDays} full • {partialDays} partial • {totalDays} total
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  monthTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  calendar: {
    marginBottom: 24,
  },
  weekHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  weekDayContainer: {
    width: DAY_SIZE,
    alignItems: 'center',
  },
  weekDay: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayContainer: {
    width: DAY_SIZE,
    height: DAY_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 4,
  },
  today: {
    backgroundColor: '#f0f0f0',
    borderRadius: DAY_SIZE / 2,
  },
  dayText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  todayText: {
    fontWeight: '600',
    color: '#000',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 4,
    alignItems: 'center',
  },
  completedCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  partialDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFC107',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  stats: {
    alignItems: 'center',
  },
  statsText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
});

export default WorkoutCalendar;
