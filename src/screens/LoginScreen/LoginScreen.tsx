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
import styles from './LoginScreenStyle';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormessage1, setErrormessage1] = useState('');
  const [errormessage, setErrormessage] = useState('');
  const [loginError, setLoginerror] = useState('');

  const handleLogin = async () => {
    Keyboard.dismiss();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setErrormessage('Email is required');
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setErrormessage('Please enter a valid email address');
      return;
    } else {
      setErrormessage('');
    }

    if (!password) {
      setErrormessage1('Password is required');
      return;
    }

    if (password.length < 8) {
      setErrormessage1('Password must be at least 8 characters');
      return;
    } else {
      setErrormessage1('');
    }

    try {
      console.log('email', email);
      await auth().signInWithEmailAndPassword(email.trim(), password);
       navigation.reset({
            index: 0,
            routes: [{ name: 'MainTabs' }],
          });
    } catch (error: any) {
      console.log('Login error:', error.message);
      if(error.message == '[auth/invalid-credential] The supplied auth credential is incorrect, malformed or has expired.')
      {
        setLoginerror('Invalid credentials')
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require('../../assets/login.png')}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.head}>Email Adress</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={text => {
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
        onChangeText={text => {
          setPassword(text);
          setErrormessage1('');
        }}
        placeholderTextColor={'#d9d9d9'}
        secureTextEntry
      />
      {errormessage1.length > 1 && (
        <Text style={styles.error}>{errormessage1}</Text>
      )}
     
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {
        loginError.length >1 &&
        <Text style={[styles.error,{textAlign:'center'}]}>{loginError}</Text>
      }
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={()=> navigation.navigate('SignupScreen')}>
          <Text style={styles.bottomText}>
            {' '}
            Are you a new member ?<Text style={styles.register}> Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
