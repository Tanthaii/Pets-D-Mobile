import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowRight, ExternalLink } from 'lucide-react-native';
import HomeStyles from '../styles/HomeStyles';

export function CTASection() {
  return (
    <View style={[HomeStyles.section, { backgroundColor: '#10B981', alignItems: 'center', padding: 24 }]}>
      <Text style={[HomeStyles.title, { color: '#FFFFFF', textAlign: 'center' }]}>Ready to Start?</Text>
      <Text style={[HomeStyles.text, { color: '#D1FAE5', textAlign: 'center', marginBottom: 24 }]}>
        Join thousands of users who trust PestDetect for accurate pest identification and management solutions.
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 16 }}>
        {/* Create Free Account Button */}
        <TouchableOpacity style={HomeStyles.button}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={HomeStyles.buttonText}>Create Free Account</Text>
            <ArrowRight color="#FFFFFF" size={20} style={{ marginLeft: 8 }} />
          </View>
        </TouchableOpacity>

        {/* Talk to Expert Button */}
        <TouchableOpacity style={[HomeStyles.button, { backgroundColor: '#FFFFFF', borderColor: '#10B981', borderWidth: 1 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[HomeStyles.buttonText, { color: '#10B981' }]}>Talk to Expert</Text>
            <ExternalLink color="#10B981" size={20} style={{ marginLeft: 8 }} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
