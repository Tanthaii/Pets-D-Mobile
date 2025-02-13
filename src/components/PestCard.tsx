import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PestInformationStyles from '../styles/PestInformationStyles';
import type { Pest } from './types';


interface PestCardProps {
  pest: Pest;
  isSelected: boolean;
  onSelect: () => void;
}

export function PestCard({ pest, isSelected, onSelect }: PestCardProps) {
    return (
      <TouchableOpacity
        style={[
          PestInformationStyles.pestCard,
          isSelected && PestInformationStyles.pestCardSelected, // เพิ่มขอบเขียวเมื่อเลือก
        ]}
        onPress={onSelect}
      >
        <Image
          source={{ uri: pest.image_url }}
          style={PestInformationStyles.pestImage}
        />
        <View>
          <Text style={PestInformationStyles.pestTitle}>{pest.common_name}</Text>
          <Text style={PestInformationStyles.pestDescription}>
            {pest.scientific_name}
          </Text>
          <Text style={PestInformationStyles.pestDetails}>
            Category: {pest.category}
          </Text>
          <Text style={PestInformationStyles.pestDetails}>
            Threat Level: {pest.threat_level}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  
