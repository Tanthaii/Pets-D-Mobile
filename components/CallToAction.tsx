import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/callToActionStyles';

export default function CallToAction() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ready to Start?</Text>
      <Text style={styles.subtitle}>
        Join thousands of users who trust PestDetect for accurate pest identification and management solutions.
      </Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create Free Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.buttonText}>Talk to Expert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
