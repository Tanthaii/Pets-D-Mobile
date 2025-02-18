import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import styles from '../styles/pestDetectionStyles';
import ImageUpload from '../components/ImageUpload';
import PredictionHistory from '../components/PredictionHistory';
import PredictionResult from '../components/PredictionResult';

export default function PestDetectionScreen() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<{ pest_name: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const user = getAuth().currentUser;

  // 🔹 **โหลดประวัติการทำนาย**
  const fetchHistory = async () => {
    if (!user) return;
  
    try {
      // 🔹 อ้างอิงไปยัง `users/{userId}/predictions`
      const predictionsRef = collection(db, `users/${user.uid}/predictions`);
      const querySnapshot = await getDocs(predictionsRef);
  
      if (querySnapshot.empty) {
        console.log("🔥 No prediction history found for user:", user.uid);
      }
  
      // 🔹 แปลงข้อมูลเป็น array พร้อม `pest_id`
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        pest_id: doc.data().pest_id, // ✅ เพิ่ม pest_id
        pest_name: doc.data().pest_name,
        confidence: doc.data().confidence,
        created_at: doc.data().created_at,
      }));
  
      console.log("📌 History Data:", data);
      setHistory(data); // ✅ อัปเดต state history
    } catch (error) {
      console.error("❌ Error fetching history:", error);
    }
  };
  
  

  // 🔹 **ส่งรูปไปยัง API**
  const detectPest = async () => {
    if (!imageUrl) {
      Alert.alert("Please select an image first!");
      return;
    }
  
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: imageUrl,
        name: 'image.jpg',
        type: 'image/jpeg',
      } as any);
  
      const res = await fetch('http://10.0.2.2:8000/predict', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
  
      const result = await res.json();
      setPrediction({ pest_name: result.pest_name, confidence: result.confidence });
  
      if (user) {
        // 🔹 บันทึกข้อมูลการทำนายใน `users/{userId}/predictions`
        await addDoc(collection(db, `users/${user.uid}/predictions`), {
          pest_id: result.pest_id, // ✅ เพิ่ม pest_id
          pest_name: result.pest_name,
          confidence: result.confidence,
          created_at: new Date().toISOString(),
        });
  
        fetchHistory(); // ✅ โหลดประวัติใหม่
      }
    } catch (error) {
      Alert.alert("Error detecting pest", error instanceof Error ? error.message : "Unknown error occurred");
    }
    setLoading(false);
  };
  

  useEffect(() => {
    if (user) {
      fetchHistory();
    }
  }, [user]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pest Detection</Text>
      <Text style={styles.subtitle}>Upload an image of an insect or pest for instant identification</Text>

      <ImageUpload onImageUpload={(url) => setImageUrl(url)} />

      <TouchableOpacity style={styles.detectButton} onPress={detectPest} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.detectButtonText}>Detect Pest</Text>}
      </TouchableOpacity>

      <PredictionResult prediction={prediction} />

      <PredictionHistory history={history} />

      {history.length === 0 && (
        <Text style={styles.noHistoryText}>No prediction history found.</Text>
      )}
    </View>
  );
}
