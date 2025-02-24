import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App'; // ✅ นำเข้า Type ของ Stack
import styles from '../styles/featuresStyles';

export default function Features() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const features = [
    { 
      title: 'Pest Information', 
      description: 'Access detailed information about various insects and pests.',
      screen: 'BrowsePestsScreen' // ✅ นำไปที่ BrowsePestsScreen
    },
    { 
      title: 'Image Detection', 
      description: 'Upload images to identify pests using advanced AI technology.', 
      screen: 'PestDetectionScreen' // ✅ นำไปที่ PestDetectionScreen
    },
    { 
      title: 'Smart Search', 
      description: 'Quickly find specific pest information using our search feature.',
      screen: 'BrowsePestsScreen' // ✅ นำไปที่ BrowsePestsScreen
    },
    { 
      title: 'Expert Knowledge', 
      description: 'Get reliable pest identification and control recommendations.',
      screen: 'ExpertKnowledgeScreen' // ✅ นำไปที่ ExpertKnowledgeScreen
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Key Features</Text>
      <View style={styles.grid}>
        {features.map((feature, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card}
            onPress={() => {
              if (feature.screen) {
                navigation.navigate(feature.screen as keyof RootStackParamList); // ✅ นำทางไปหน้าที่ถูกต้อง
              }
            }}
          >
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardDescription}>{feature.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
