import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface RegisterSubmitButtonProps {
  isLoading: boolean;
  onPress: () => void;
  text: string;
}

export function RegisterSubmitButton({
  isLoading,
  onPress,
  text,
}: RegisterSubmitButtonProps) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isLoading ? '#9CA3AF' : '#4ADE80',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
