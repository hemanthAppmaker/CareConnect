import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './FavouriteStyle'

export default class FavouriteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Favorite Screen</Text>
      </View>
    );
  }
}

