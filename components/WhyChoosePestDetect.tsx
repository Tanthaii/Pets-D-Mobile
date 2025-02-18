import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/whyChooseStyles';

export default function WhyChoosePestDetect() {
  const features = [
    'Accurate Identification - Advanced AI technology ensures precise pest identification.',
    'Expert Knowledge - Access to professional pest control recommendations.',
    'Time Saving - Get instant results and actionable insights.',
    'Comprehensive Database - Information on thousands of pest species.',
    'Regular Updates - Constantly updated pest information and features.',
    '24/7 Support - Get help whenever you need it.',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Choose PestDetect?</Text>
      <View style={styles.listContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>{feature}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
