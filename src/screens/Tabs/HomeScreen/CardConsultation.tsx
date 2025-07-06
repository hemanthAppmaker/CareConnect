import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardConsultation = ({ item }) => {
  return (
    <View style={styles.cardItem}>
      <View style={[styles.avatar, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.avatarText}>
          {item.title?.charAt(0).toUpperCase()}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.text}</Text>
      </View>

      {item.amount ? <Text style={styles.amount}>{item.amount}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 1,
    marginVertical: 6,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

export default CardConsultation;
