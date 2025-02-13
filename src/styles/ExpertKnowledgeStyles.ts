import { StyleSheet } from 'react-native';

const ExpertKnowledgeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9FAFB', // เทียบเท่า bg-gray-50
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937', // text-gray-900
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#6B7280', // text-gray-600
  },
  iconWrapper: {
    width: 48,
    height: 48,
    backgroundColor: '#D1FAE5', // bg-green-100
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  icon: {
    color: '#10B981', // text-green-600
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B981', // bg-green-600
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  listItemIcon: {
    width: 12,
    height: 12,
    backgroundColor: '#10B981', // จุดกลมสีเขียว
    borderRadius: 6,
    marginRight: 8,
    marginTop: 6,
  },
  listItemText: {
    color: '#6B7280', // text-gray-600
    fontSize: 14,
  },
});

export default ExpertKnowledgeStyles;
