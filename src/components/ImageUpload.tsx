import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ImageDetectionStyles from '../styles/ImageDetectionStyles';

interface ImageUploadProps {
  preview: string | null;
  onImageSelect: (event: any) => void;
}

export function ImageUpload({ preview, onImageSelect }: ImageUploadProps) {
  return (
    <View style={ImageDetectionStyles.form}>
      <TouchableOpacity>
        <input
          type="file"
          accept="image/*"
          onChange={onImageSelect}
          style={{ display: 'none' }}
        />
        {preview ? (
          <Image
            source={{ uri: preview }}
            style={{ width: '100%', height: 200, borderRadius: 8 }}
            resizeMode="contain"
          />
        ) : (
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, borderWidth: 1, borderColor: '#ddd', borderRadius: 8 }}>
            <Text>Click to upload an image</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
