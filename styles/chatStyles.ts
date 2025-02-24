import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
    paddingBottom: 10,
  },
  header: {
    backgroundColor: '#36B150',
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10, // เพิ่มระยะห่างระหว่างแชท
    maxWidth: '80%',
  },
  
  botMessageWrapper: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    position: 'relative', // ✅ ทำให้ไอคอนอยู่ในตำแหน่งเหมาะสม
    marginBottom: 15,
  },
  userMessageWrapper: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  botContainer: {
    backgroundColor: '#D9FCD1',
    borderRadius: 15,
    padding: 15,
    maxWidth: '80%',
    paddingTop: 25, // ✅ เว้นระยะให้ข้อความไม่ติดกับไอคอน
    borderWidth: 1,
    borderColor: '#B0EACD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  userContainer: {
    backgroundColor: '#A4F4A6',
    borderRadius: 15,
    padding: 12,
    maxWidth: '80%',
    borderWidth: 1,
    borderColor: '#8CD890',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#333',
  },
  avatar: {
    width: 40, // ✅ ปรับขนาดให้เล็กลงเพื่อให้พอดีกับกรอบ
    height: 40,
    borderRadius: 25,
    position: 'absolute', // ✅ ทำให้ไอคอนอยู่เหนือกรอบข้อความ
    top: -20, // ✅ ปรับตำแหน่งให้อยู่ด้านบน
    alignSelf: 'center',
    backgroundColor: '#36B150',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // ✅ ทำให้ไอคอนอยู่ด้านหน้าสุด
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    backgroundColor: '#fff',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sendButton: {
    backgroundColor: '#36B150',
    padding: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
