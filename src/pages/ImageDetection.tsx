import React, { useState, useEffect } from 'react';
import { ScrollView, View, ActivityIndicator, Button, Alert } from 'react-native';
import { ImageUpload } from '../components/ImageUpload';
import { DetectionResult } from '../components/DetectionResult';
import { PredictionHistory } from '../components/PredictionHistory';
import { savePrediction, fetchPredictionHistory, Prediction } from '../model/PredictionModel';
import ImageDetectionStyles from '../styles/ImageDetectionStyles';
import auth from '@react-native-firebase/auth'; // ใช้ auth จาก @react-native-firebase/auth
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function ImageDetection() {
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<Prediction | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // ตรวจสอบสถานะผู้ใช้
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser?.uid) {
        setLoading(true);
        fetchPredictionHistory(firebaseUser.uid)
          .then(setPredictions)
          .catch((error) => {
            console.error('Error fetching prediction history:', error);
            Alert.alert('Error', 'Failed to fetch prediction history');
          })
          .finally(() => setLoading(false));
      }
    });

    return () => unsubscribe();
  }, []);

  // อัปโหลดรูปภาพ
  const handleImageSelect = (imageUri: string) => {
    setPreview(imageUri);
  };

  // ส่งข้อมูลการทำนาย
  const handleSubmit = async () => {
    if (!user?.uid) return;
  
    setLoading(true);
  
    try {
      const predictionData = {
        pest_name: 'Test Pest',
        confidence: 0.95,
        created_at: new Date().toISOString(),
      };
  
      await savePrediction(user.uid, predictionData);
  
      // Fetch the updated history to include the new prediction
      const updatedHistory = await fetchPredictionHistory(user.uid);
      setPredictions(updatedHistory);
    } catch (error) {
      console.error('Error saving prediction:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <ScrollView style={ImageDetectionStyles.container}>
      {/* อัปโหลดรูปภาพ */}
      <ImageUpload preview={preview} onImageSelect={handleImageSelect} />

      {/* แสดงสถานะโหลด */}
      {loading && <ActivityIndicator size="large" color="#10B981" style={{ marginVertical: 16 }} />}

      {/* ผลลัพธ์การทำนาย */}
      {result && <DetectionResult result={result} />}

      {/* ประวัติการทำนาย */}
      <PredictionHistory predictions={predictions} />

      {/* ปุ่มส่งข้อมูล */}
      <View style={{ marginTop: 16 }}>
        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={!preview || loading}
          color="#10B981"
        />
      </View>
    </ScrollView>
  );
}
