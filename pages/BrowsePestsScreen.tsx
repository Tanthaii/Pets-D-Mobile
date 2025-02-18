import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image, TextInput, ScrollView } from 'react-native';
import pestsData from '../data/pestsData'; // ✅ นำเข้าข้อมูลศัตรูพืช
import styles from '../styles/browsePestsStyles';

// ✅ กำหนด Interface ให้ TypeScript ใช้งานได้
interface Pest {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  category: string;
  threatLevel: string;
  createdAt: string;
}

export default function BrowsePestsScreen() {
  const [selectedPest, setSelectedPest] = useState<Pest | null>(null);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // ✅ ฟังก์ชันค้นหาศัตรูพืช
  const filteredPests = pestsData.filter(pest =>
    pest.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const getThreatLevelStyle = (level: string) => {
    switch (level) {
      case 'High':
        return styles.threatLevelHigh;
      case 'Medium':
        return styles.threatLevelMedium;
      case 'Low':
        return styles.threatLevelLow;
      default:
        return styles.threatLevelDefault;
    }
  };
  

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search pests..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* 🐞 รายการศัตรูพืช */}
      <FlatList
  data={filteredPests}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.pestItem}
      onPress={() => {
        setSelectedPest(item);
        setModalVisible(true);
      }}
    >
      <Image source={{ uri: item.image }} style={styles.pestImage} />
      <View style={styles.pestInfo}>
        <Text style={styles.pestName}>{item.name}</Text>
        <Text style={styles.pestScientific}>{item.scientificName}</Text>
      </View>
      <Text style={getThreatLevelStyle(item.threatLevel)}>
        {item.threatLevel}
      </Text>
    </TouchableOpacity>
  )}
/>


      {/* 🔎 Modal แสดงรายละเอียดศัตรูพืช */}
      {selectedPest && (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <ScrollView contentContainerStyle={styles.modalContent}>
                <Image source={{ uri: selectedPest.image }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedPest.name}</Text>
                <Text style={styles.modalScientific}>{selectedPest.scientificName}</Text>
                <Text style={styles.modalDescription}>{selectedPest.description}</Text>
              </ScrollView>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
