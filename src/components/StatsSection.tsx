import React from 'react';
import { View, Text } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

const stats = [
  { number: '80%', label: 'Accuracy Rate' },
  { number: '10K+', label: 'Pest Species' },
  { number: '24/7', label: 'Support' },
  { number: '50K+', label: 'Users' },
];

export function StatsSection() {
  return (
    <View style={HomeStyles.statsContainer}>
      {stats.map((stat, index) => (
        <View key={index} style={HomeStyles.statsItem}>
          <Text style={HomeStyles.statsNumber}>{stat.number}</Text>
          <Text style={HomeStyles.statsLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}
