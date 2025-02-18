import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/statisticsStyles';

export default function Statistics() {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.number}>80%</Text>
        <Text style={styles.label}>Accuracy Rate</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.number}>10K+</Text>
        <Text style={styles.label}>Pest Species</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.number}>24/7</Text>
        <Text style={styles.label}>Support</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.number}>50K+</Text>
        <Text style={styles.label}>Users</Text>
      </View>
    </View>
  );
}
