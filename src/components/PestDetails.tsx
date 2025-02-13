import React from 'react';
import { View, Text, Image } from 'react-native';
import PestInformationStyles from '../styles/PestInformationStyles';

interface PestDetailsProps {
  pest: {
    id: string;
    common_name: string;
    scientific_name: string;
    description: string;
    image_url: string;
    category: string;
    threat_level: string;
  };
}

export function PestDetails({ pest }: PestDetailsProps) {
  return (
    <View style={PestInformationStyles.pestCard}>
      <Image source={{ uri: pest.image_url }} style={PestInformationStyles.pestImage} />
      <Text style={PestInformationStyles.pestTitle}>{pest.common_name}</Text>
      <Text style={PestInformationStyles.pestDescription}>{pest.description}</Text>
      <Text style={{ color: pest.threat_level === 'High' ? '#DC2626' : '#10B981' }}>
        Threat Level: {pest.threat_level}
      </Text>
    </View>
  );
}
