import React from 'react';
import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export function SearchBar({ placeholder, value, onChangeText }: SearchBarProps) {
  return (
    <View style={{ position: 'relative', marginBottom: 16 }}>
      <View style={{ position: 'absolute', top: 12, left: 12 }}>
        <Search size={20} color="#9CA3AF" />
      </View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#E5E7EB',
          borderRadius: 8,
          paddingLeft: 40,
          paddingVertical: 12,
          backgroundColor: '#FFF',
          fontSize: 16,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
