import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/howItWorksStyles';

export default function HowItWorks() {
  const steps = [
    { title: 'Upload Image', description: 'Take a photo or upload an image of the pest you want to identify.' },
    { title: 'AI Analysis', description: 'Our advanced AI system analyzes the image and identifies the pest species.' },
    { title: 'Get Information', description: 'Receive detailed information about the pest and control recommendations.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How It Works</Text>
      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.numberText}>{index + 1}</Text>
            </View>
            <View>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
