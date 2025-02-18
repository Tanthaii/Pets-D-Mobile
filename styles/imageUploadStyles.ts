import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    justifyContent: 'center',
    padding: 10,
  },
  uploadText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6c757d',
  },
  uploadSubtext: {
    fontSize: 12,
    textAlign: 'center',
    color: '#a1a1a1',
    marginTop: 4,
  },
  imagePreview: {
    width: '100%',   // ใช้ 100% ของพื้นที่ที่กำหนด
    height: '100%',  // ใช้ 100% ของพื้นที่ที่กำหนด
    resizeMode: 'contain',  // ✅ ให้รูปแสดงเต็มพื้นที่โดยไม่ถูกครอบ
    borderRadius: 8,  // ✅ ปรับขอบมนให้เข้ากับดีไซน์
  },
});
