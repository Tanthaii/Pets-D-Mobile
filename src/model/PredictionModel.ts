import { collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';



// PredictionModel.ts
export interface Prediction {
    id: string; // Unique identifier for the prediction
    pest_name: string;
    confidence: number;
    created_at: string; // ISO string for date
  }
  
  
export async function savePrediction(userId: string, predictionData: any) {
  const predictionsRef = collection(db, 'users', userId, 'predictions');
  await addDoc(predictionsRef, predictionData);
}

export async function fetchPredictionHistory(userId: string): Promise<Prediction[]> {
    const predictionsRef = collection(db, 'users', userId, 'predictions');
    const q = query(predictionsRef, orderBy('created_at', 'desc'));
    const querySnapshot = await getDocs(q);
  
    return querySnapshot.docs.map((doc) => ({
      id: doc.id, // ดึง id จาก Firestore document
      ...(doc.data() as Omit<Prediction, 'id'>), // กระจายเฉพาะข้อมูลที่ไม่ใช่ id
    }));
  }
  
  
  