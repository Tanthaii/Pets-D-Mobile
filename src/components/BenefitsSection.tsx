import React from 'react';
import { View, Text } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';
import HomeStyles from '../styles/HomeStyles';

const benefits = [
  { title: 'Accurate Identification', description: 'Advanced AI technology ensures precise pest identification.' },
  { title: 'Expert Knowledge', description: 'Access to professional pest control recommendations.' },
  { title: 'Time Saving', description: 'Get instant results and actionable insights.' },
  { title: 'Comprehensive Database', description: 'Information on thousands of pest species.' },
  { title: 'Regular Updates', description: 'Constantly updated pest information and features.' },
  { title: '24/7 Support', description: 'Get help whenever you need it.' },
];

export function BenefitsSection() {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Why Choose PestDetect?</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {benefits.map((benefit, index) => (
          <View key={index} style={HomeStyles.section}>
            <CheckCircle2 color="#10B981" size={24} style={{ marginBottom: 8 }} />
            <Text style={{ ...HomeStyles.title, fontSize: 18 }}>{benefit.title}</Text>
            <Text style={HomeStyles.text}>{benefit.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
