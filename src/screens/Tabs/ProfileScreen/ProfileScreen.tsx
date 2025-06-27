import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './ProfileStyle'
export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>
    );
  }
}

