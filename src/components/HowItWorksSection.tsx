import React from 'react';
import { View, Text } from 'react-native';
import { Upload, Search, BookOpen } from 'lucide-react-native';
import HomeStyles from '../styles/HomeStyles';

const steps = [
  {
    icon: Upload,
    title: 'Upload Image',
    description: 'Take a photo or upload an existing image of the pest you want to identify.',
  },
  {
    icon: Search,
    title: 'AI Analysis',
    description: 'Our advanced AI system analyzes the image and identifies the pest species.',
  },
  {
    icon: BookOpen,
    title: 'Get Information',
    description: 'Receive detailed information about the pest and control recommendations.',
  },
];

export function HowItWorksSection() {
  return (
    <View>
      <Text style={HomeStyles.title}>How It Works</Text>
      <View style={{ marginVertical: 16 }}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <View key={index} style={[HomeStyles.section, { alignItems: 'center' }]}>
              <Icon color="#10B981" size={32} style={{ marginBottom: 8 }} />
              <Text style={HomeStyles.title}>{step.title}</Text>
              <Text style={HomeStyles.text}>{step.description}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
