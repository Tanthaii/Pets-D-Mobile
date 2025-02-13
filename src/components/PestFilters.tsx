import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PestInformationStyles from '../styles/PestInformationStyles';

interface PestFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedThreatLevel: string;
  setSelectedThreatLevel: (value: string) => void;
  categories: string[];
  threatLevels: string[];
}

export function PestFilters({
  selectedCategory,
  setSelectedCategory,
  selectedThreatLevel,
  setSelectedThreatLevel,
  categories,
  threatLevels,
}: PestFiltersProps) {
  return (
    <View style={PestInformationStyles.filterSection}>
      <Text style={PestInformationStyles.filterTitle}>Filters</Text>

      {/* Category Picker */}
      <Text style={{ marginBottom: 8 }}>Category</Text>
      <View style={{ borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, marginBottom: 16 }}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={{ height: 50 }}
        >
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      {/* Threat Level Picker */}
      <Text style={{ marginBottom: 8 }}>Threat Level</Text>
      <View style={{ borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8 }}>
        <Picker
          selectedValue={selectedThreatLevel}
          onValueChange={setSelectedThreatLevel}
          style={{ height: 50 }}
        >
          {threatLevels.map((level) => (
            <Picker.Item key={level} label={level} value={level} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
