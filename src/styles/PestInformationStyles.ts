import { StyleSheet } from 'react-native';

const PestInformationStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9FAFB', // เทียบเท่า bg-gray-50
  },
  pestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  pestCardSelected: {
    borderColor: '#10B981', // เทียบเท่า text-green-600
    borderWidth: 2,
  },
  pestImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  pestTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937', // เทียบเท่า text-gray-900
    marginBottom: 8,
  },
  pestDescription: {
    fontSize: 14,
    color: '#6B7280', // เทียบเท่า text-gray-600
    marginBottom: 8,
  },
  pestDetails: {
    fontSize: 14,
    color: '#4B5563', // เพิ่มรายละเอียดอื่นใน text-gray-700
  },
  filterSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#374151', // เทียบเท่า text-gray-700
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
    color: '#9CA3AF', // เทียบเท่า text-gray-400
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterPicker: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#F3F4F6', // เทียบเท่า bg-gray-100
    borderRadius: 8,
  },
});

export default PestInformationStyles;
