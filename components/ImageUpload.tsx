import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/imageUploadStyles';

interface ImageUploadProps {
  onImageUpload: (url: string | null) => void;
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onImageUpload(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity style={styles.uploadContainer} onPress={pickImage}>
      {image ? (
        <Image source={{ uri: image }} style={styles.imagePreview} />
      ) : (
        <View style={styles.uploadBox}>
          <FontAwesome name="upload" size={32} color="#6c757d" />
          <Text style={styles.uploadText}>Click or drag and drop an image here</Text>
          <Text style={styles.uploadSubtext}>Supports JPG, PNG (max 5MB)</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
