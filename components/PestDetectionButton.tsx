import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/pestDetectionStyles';

interface PestDetectionButtonProps {
  onDetectionComplete: () => void;
}

export default function PestDetectionButton({ onDetectionComplete }: PestDetectionButtonProps) {
  const detectPest = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/predict', { method: 'POST' });
      const data = await res.json();
      console.log('Prediction:', data);
      onDetectionComplete();
    } catch (error) {
      console.error('Error detecting pest:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.detectButton} onPress={detectPest}>
      <Text style={styles.detectButtonText}>Detect Pest</Text>
    </TouchableOpacity>
  );
}
