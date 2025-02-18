import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'; // ใช้ serverTimestamp สำหรับ createdAt และ updatedAt
import { auth, db } from '../firebaseConfig'; // Firebase Config
import styles from '../styles/signUpFormStyles';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      // สร้างบัญชีผู้ใช้
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // บันทึกข้อมูลผู้ใช้ใน Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid, // ใช้ uid จาก Firebase Authentication
        email: user.email,
        username: username,
        createdAt: serverTimestamp(), // ใช้ serverTimestamp สำหรับเวลาสร้าง
        updatedAt: serverTimestamp(), // ใช้ serverTimestamp สำหรับเวลาปรับปรุง
      });

      Alert.alert('Account Created', `Welcome, ${username || user.email}`);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Sign Up Failed', error.message);
      } else {
        Alert.alert('Sign Up Failed', 'An unknown error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
}
