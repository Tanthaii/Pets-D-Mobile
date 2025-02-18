import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 20,
  },
  uploadContainer: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  uploadBox: {
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 8,
  },
  uploadSubtext: {
    fontSize: 12,
    color: '#a0a0a0',
    marginTop: 4,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  detectButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  detectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ✅ เพิ่มสไตล์สำหรับแสดงผลการทำนาย
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // เงาสำหรับ Android
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  confidenceText: {
    fontSize: 16,
    color: '#6c757d',
  },

  // ✅ เพิ่มสไตล์เมื่อไม่มีประวัติการพยากรณ์
  noHistoryText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
  },

  // ✅ แสดงประวัติการพยากรณ์ (History Section)
  historyContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyList: {
    width: '100%',
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 5,
  },
  pestName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  confidence: {
    fontSize: 14,
    color: '#6c757d',
  },

  // ✅ ปุ่มสำหรับดาวน์โหลด CSV
  exportButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  exportButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: '#a0a0a0',
  },
});
