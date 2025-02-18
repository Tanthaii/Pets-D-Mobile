import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import styles from '../styles/headerStyles';

export default function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to PestDetect</Text>
        <Text style={styles.subtitle}>
          Your intelligent companion for pest identification and management.
        </Text>
        <View style={styles.buttonGroup}>
          {/* ✅ ปุ่ม Start Detection นำทางไปยัง PestDetectionScreen */}
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('PestDetectionScreen')}
          >
            <Text style={styles.primaryButtonText}>Start Detection</Text>
          </TouchableOpacity>

          {/* ✅ ปุ่ม Browse Pests นำทางไปยัง BrowsePestsScreen */}
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('BrowsePestsScreen')}
          >
            <Text style={styles.secondaryButtonText}>Browse Pests</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
