import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import StackNavigation from './src/routes/StackNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <StackNavigation />
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
