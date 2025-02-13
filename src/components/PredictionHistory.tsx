import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ImageDetectionStyles from '../styles/ImageDetectionStyles';

interface PredictionHistoryProps {
  predictions: {
    id: string;
    pest_name: string;
    confidence: number;
    created_at: string;
  }[];
}

export function PredictionHistory({ predictions }: PredictionHistoryProps) {
  return (
    <FlatList
      data={predictions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={ImageDetectionStyles.historyContainer}>
          <Text style={{ fontWeight: 'bold' }}>{item.pest_name}</Text>
          <Text>Confidence: {(item.confidence * 100).toFixed(1)}%</Text>
          <Text>Date: {item.created_at}</Text>
        </View>
      )}
    />
  );
}
