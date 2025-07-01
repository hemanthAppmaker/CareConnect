import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Keyboard,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './SignupScreenStyle';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [errormessage1, setErrormessage1] = useState('');
  const [errormessage, setErrormessage] = useState('');
  const [loginError, setLoginerror] = useState('');

  const handleSignup = async () => {
    Keyboard.dismiss()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (!email.trim()) {
      setErrormessage('Email is required');
      return;
    } else if (!emailRegex.test(email.trim())) {
      setErrormessage('Invalid email address');
      return;
    } else {
      setErrormessage('');
    }

    // Password validation
    if (!password) {
      setErrormessage1('Password is required');
      return;
    } else if (password.length < 8) {
      setErrormessage1('Password must be at least 8 characters');
      return;
    } else {
      setErrormessage1('');
    }

    // Confirm Password validation
    if (password !== password1) {
      setLoginerror('Passwords do not match');
      return;
    } else {
      setLoginerror('');
    }

    try {
      await auth().createUserWithEmailAndPassword(email.trim(), password);
      navigation.navigate('MainTabs');
    } catch (error: any) {
      console.log('Signup error:', error);
      if(error.message == '[auth/email-already-in-use] The email address is already in use by another account.')
      setLoginerror('Email id already existing')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require('../../assets/register.png')}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Register</Text>

      <Text style={styles.head}>Email Address</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErrormessage('');
        }}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor={'#d9d9d9'}
      />
      {errormessage.length > 1 && (
        <Text style={styles.error}>{errormessage}</Text>
      )}

      <Text style={[styles.head, { marginTop: 20 }]}>Password</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setErrormessage1('');
        }}
        placeholderTextColor={'#d9d9d9'}
        secureTextEntry
      />
      {errormessage1.length > 1 && (
        <Text style={styles.error}>{errormessage1}</Text>
      )}

      <Text style={[styles.head, { marginTop: 20 }]}>Confirm Password</Text>
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        value={password1}
        onChangeText={(text) => {
          setPassword1(text);
          setLoginerror('');
        }}
        placeholderTextColor={'#d9d9d9'}
        secureTextEntry
      />
     

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
 {loginError.length > 1 && (
        <Text style={[styles.error, { textAlign: 'center' }]}>{loginError}</Text>
      )}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.bottomText}>
            Already have an account?
            <Text style={styles.register}> Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
