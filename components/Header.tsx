import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App'; // ✅ นำเข้า Type ของ Stack
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
          {/* ✅ ปุ่ม Start Detection ใช้ Navigation ที่ถูกต้อง */}
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('PestDetectionScreen')}
          >
            <Text style={styles.primaryButtonText}>Start Detection</Text>
          </TouchableOpacity>

          {/* ปุ่ม Browse Pests (ยังไม่ได้กำหนด Navigation) */}
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Browse Pests</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
