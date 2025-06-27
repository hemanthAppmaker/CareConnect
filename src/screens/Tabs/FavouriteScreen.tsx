import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class FavouriteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Favorite Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E3EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
