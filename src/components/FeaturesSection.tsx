import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import { Bug, Upload, Search, Shield } from 'lucide-react-native';

const features = [
  { icon: Bug, title: 'Pest Information', description: 'Access detailed information about various insects and pests.' },
  { icon: Upload, title: 'Image Detection', description: 'Upload images to identify pests using advanced AI technology.' },
  { icon: Search, title: 'Smart Search', description: 'Quickly find specific pest information using our search feature.' },
  { icon: Shield, title: 'Expert Knowledge', description: 'Get reliable pest identification and control recommendations.' },
];

export function FeaturesSection() {
  return (
    <View>
      <Text style={HomeStyles.title}>Key Features</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <TouchableOpacity key={index} style={HomeStyles.section}>
              <View style={{ alignItems: 'center', marginBottom: 8 }}>
                <Icon color="#10B981" size={32} />
              </View>
              <Text style={HomeStyles.title}>{feature.title}</Text>
              <Text style={HomeStyles.text}>{feature.description}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
