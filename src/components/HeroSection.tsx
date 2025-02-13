import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export function HeroSection() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000' }}
      style={{ height: 600, justifyContent: 'center' }}
    >
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[HomeStyles.title, { color: '#FFFFFF', fontSize: 32 }]}>
          Welcome to PestDetect
        </Text>
        <Text style={[HomeStyles.text, { color: '#FFFFFF', textAlign: 'center', marginVertical: 16 }]}>
          Your intelligent companion for pest identification and management.
        </Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity style={HomeStyles.button}>
            <Text style={HomeStyles.buttonText}>Start Detection</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[HomeStyles.button, { backgroundColor: '#FFFFFF' }]}>
            <Text style={[HomeStyles.buttonText, { color: '#10B981' }]}>Browse Pests</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
