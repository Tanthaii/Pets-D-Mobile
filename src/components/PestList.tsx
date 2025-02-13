import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PestInformationStyles from '../styles/PestInformationStyles';

export interface Pest {
    id: string;
    common_name: string;
    scientific_name: string;
    description: string;
    image_url: string;
    category: string;
    threat_level: 'Low' | 'Medium' | 'High' ;
    created_at?: string; // ทำให้เป็น optional
  }
  

interface PestListProps {
    pests: Pest[];
    onSelectPest: (pest: Pest) => void; // เปลี่ยนจาก Dispatch<SetStateAction<Pest | null>>
    selectedPestId: string | null;
  }
  


export function PestList({ pests, onSelectPest, selectedPestId }: PestListProps) {
  return (
    <View>
      {pests.map((pest) => (
        <TouchableOpacity
          key={pest.id}
          onPress={() => onSelectPest(pest)}
          style={[
            PestInformationStyles.pestCard,
            selectedPestId === pest.id && { borderColor: '#10B981', borderWidth: 2 },
          ]}
        >
          <Image source={{ uri: pest.image_url }} style={PestInformationStyles.pestImage} />
          <Text style={PestInformationStyles.pestTitle}>{pest.common_name}</Text>
          <Text style={PestInformationStyles.pestDescription}>{pest.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
