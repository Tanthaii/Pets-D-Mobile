import React from 'react';
import { View, Text } from 'react-native';
import { AlertCircle } from 'lucide-react-native';

interface RegisterErrorAlertProps {
  message: string | null;
}

export function RegisterErrorAlert({ message }: RegisterErrorAlertProps) {
  if (!message) return null;

  return (
    <View
      style={{
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        padding: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <AlertCircle size={20} color="#EF4444" />
      <Text style={{ marginLeft: 8, color: '#EF4444' }}>{message}</Text>
    </View>
  );
}
// Compare this snippet from src/components/RegisterSuccessAlert.tsx: