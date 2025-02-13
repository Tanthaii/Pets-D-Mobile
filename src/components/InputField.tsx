import React from 'react';
import { View, TextInput } from 'react-native';
import { Mail, KeyRound } from 'lucide-react-native';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: React.ElementType;
}

export function InputField({ placeholder, value, onChangeText, secureTextEntry, icon: Icon }: InputFieldProps) {
  return (
    <View style={{ marginBottom: 16, position: 'relative' }}>
      {Icon && (
        <View style={{ position: 'absolute', top: 12, left: 12 }}>
          <Icon size={20} color="#9CA3AF" />
        </View>
      )}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#E5E7EB',
          borderRadius: 8,
          paddingLeft: 40,
          paddingVertical: 12,
          backgroundColor: '#FFF',
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
