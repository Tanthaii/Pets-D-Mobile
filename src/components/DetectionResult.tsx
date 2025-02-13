import React from 'react';
import { View, Text } from 'react-native';
import ImageDetectionStyles from '../styles/ImageDetectionStyles';

interface DetectionResultProps {
  result: {
    pest_name: string;
    confidence: number;
  };
}

export function DetectionResult({ result }: DetectionResultProps) {
  return (
    <View style={ImageDetectionStyles.form}>
      <Text style={{ fontWeight: 'bold' }}>{result.pest_name}</Text>
      <Text>Confidence: {(result.confidence * 100).toFixed(1)}%</Text>
    </View>
  );
}
