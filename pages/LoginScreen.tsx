import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import LoginForm from '../components/LoginForm';
import styles from '../styles/loginScreenStyles';

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1560493676-04071c5f467b' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Sign in to your account</Text>
          <Text style={styles.subtitle}>
            Or{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('SignUpScreen')}
            >
              create a new account
            </Text>
          </Text>
          <LoginForm />
        </View>
      </View>
    </ImageBackground>
  );
}
