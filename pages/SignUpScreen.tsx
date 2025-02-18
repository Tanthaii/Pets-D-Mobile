import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // ใช้ NavigationProp
import { RootStackParamList } from '../App'; // Import RootStackParamList
import SignUpForm from '../components/SignUpForm';
import styles from '../styles/signUpScreenStyles';

export default function SignUpScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // ระบุ Type ของ Navigation

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Already have an account?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('LoginScreen')} // ชื่อหน้าต้องตรงกับ RootStackParamList
            >
              Sign in
            </Text>
          </Text>
          <SignUpForm />
        </View>
      </View>
    </ImageBackground>
  );
}
