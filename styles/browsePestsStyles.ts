import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pestImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  pestInfo: {
    flex: 1,
  },
  pestName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pestScientific: {
    fontSize: 14,
    color: '#6c757d',
  },
  threatLevel: {
    fontSize: 14,
    color: '#dc3545',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalContent: {
    alignItems: 'center',
  },
  modalImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalScientific: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  threatLevelHigh: {
    fontSize: 14,
    color: '#dc3545', // 🔴 สีแดง
    fontWeight: 'bold',
  },
  threatLevelMedium: {
    fontSize: 14,
    color: '#ffc107', // 🟡 สีเหลือง
    fontWeight: 'bold',
  },
  threatLevelLow: {
    fontSize: 14,
    color: '#28a745', // 🟢 สีเขียว
    fontWeight: 'bold',
  },
  threatLevelDefault: {
    fontSize: 14,
    color: '#6c757d', // ⚪️ สีเทา (ค่าเริ่มต้น)
    fontWeight: 'bold',
  },
});
