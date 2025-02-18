import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/featuresStyles';

export default function Features() {
  const features = [
    { title: 'Pest Information', description: 'Access detailed information about various insects and pests.' },
    { title: 'Image Detection', description: 'Upload images to identify pests using advanced AI technology.' },
    { title: 'Smart Search', description: 'Quickly find specific pest information using our search feature.' },
    { title: 'Expert Knowledge', description: 'Get reliable pest identification and control recommendations.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Key Features</Text>
      <View style={styles.grid}>
        {features.map((feature, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardDescription}>{feature.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
