import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Progres Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
