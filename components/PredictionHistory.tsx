import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import styles from '../styles/predictionHistoryStyles';

export default function PredictionHistory({ history }: { history: any[] }) {
  // 🔹 แปลงข้อมูลเป็น CSV และบันทึกไฟล์
  const exportToCSV = async () => {
    if (history.length === 0) return;

    const csvHeader = "Pest Name,Confidence,Date\n";
    const csvRows = history.map(item => 
      `${item.pest_name},${(item.confidence * 100).toFixed(2)}%,${new Date(item.created_at).toLocaleString()}`
    ).join("\n");

    const csvData = csvHeader + csvRows;
    const filePath = `${FileSystem.documentDirectory}prediction_history.csv`;

    try {
      await FileSystem.writeAsStringAsync(filePath, csvData, { encoding: FileSystem.EncodingType.UTF8 });
      await Sharing.shareAsync(filePath);
    } catch (error) {
      console.error("❌ Error exporting CSV:", error);
    }
  };

  return (
    <View style={styles.historyContainer}>
      {/* 🔹 ส่วนหัวของ Prediction History พร้อมปุ่มดาวน์โหลด */}
      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>Prediction History</Text>
        <TouchableOpacity onPress={exportToCSV} style={styles.downloadButton}>
          <Ionicons name="download-outline" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>

      {history.length === 0 ? (
        <Text style={styles.noHistoryText}>No prediction history found.</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.pestName}>Pest: {item.pest_name}</Text>
              <Text style={styles.confidence}>Confidence: {(item.confidence * 100).toFixed(2)}%</Text>
              <Text style={styles.timestamp}>Time: {new Date(item.created_at).toLocaleString()}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
