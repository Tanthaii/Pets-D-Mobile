import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/pestDetectionStyles';

export default function PredictionResult({ prediction }: { prediction: { pest_name: string; confidence: number } | null }) {
  if (!prediction) return null;

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>Detected: {prediction.pest_name}</Text>
      <Text style={styles.confidenceText}>Confidence: {(prediction.confidence * 100).toFixed(2)}%</Text>
    </View>
  );
}
