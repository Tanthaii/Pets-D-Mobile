import React from 'react';
import { View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PestInformationStyles from '../styles/PestInformationStyles';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedThreatLevel: string;
  setSelectedThreatLevel: (level: string) => void;
  categories: string[];
  threatLevels: string[];
}

export function SearchAndFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedThreatLevel,
  setSelectedThreatLevel,
  categories,
  threatLevels,
}: SearchAndFiltersProps) {
  return (
    <View>
      {/* Search Bar */}
      <View style={PestInformationStyles.searchBar}>
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search pests..."
          style={PestInformationStyles.searchInput}
        />
      </View>

      {/* Filters */}
      <View style={PestInformationStyles.filtersContainer}>
        {/* Category Filter */}
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={PestInformationStyles.filterPicker}
        >
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>

        {/* Threat Level Filter */}
        <Picker
          selectedValue={selectedThreatLevel}
          onValueChange={setSelectedThreatLevel}
          style={PestInformationStyles.filterPicker}
        >
          {threatLevels.map((level) => (
            <Picker.Item key={level} label={level} value={level} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
