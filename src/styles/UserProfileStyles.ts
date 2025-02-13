import { StyleSheet } from 'react-native';

const UserProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // เทียบเท่า bg-gray-50
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF', // เทียบเท่า bg-white
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937', // เทียบเท่า text-gray-900
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6B7280', // เทียบเท่า text-gray-600
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#FFFFFF', // bg-white
    borderWidth: 1,
    borderColor: '#D1D5DB', // เทียบเท่า border-gray-300
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#374151', // เทียบเท่า text-gray-700
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  toggleText: {
    fontSize: 14,
    color: '#374151', // เทียบเท่า text-gray-700
  },
  button: {
    backgroundColor: '#10B981', // bg-green-600
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#9CA3AF', // bg-gray-400
  },
  buttonText: {
    color: '#FFFFFF', // text-white
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937', // เทียบเท่า text-gray-900
    marginBottom: 8,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  rowLabel: {
    fontSize: 14,
    color: '#374151', // เทียบเท่า text-gray-700
  },
  rowValue: {
    fontSize: 14,
    color: '#6B7280', // เทียบเท่า text-gray-600
  },
});

export default UserProfileStyles;
