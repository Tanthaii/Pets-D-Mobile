import { StyleSheet } from 'react-native';

const ImageDetectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9FAFB', // bg-gray-50
  },
  form: {
    backgroundColor: '#FFFFFF', // bg-white
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  button: {
    backgroundColor: '#10B981', // bg-green-600
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // text-white
    fontWeight: 'bold',
  },
  error: {
    color: '#DC2626', // text-red-600
    marginTop: 8,
    textAlign: 'center',
  },
  historyContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 16,
  },
});

export default ImageDetectionStyles;
