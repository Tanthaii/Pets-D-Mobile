import { StyleSheet } from 'react-native';

const LayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // เทียบเท่า bg-gray-50
  },
  main: {
    flex: 1,
    marginHorizontal: 16, // เทียบเท่า mx-auto และ px-4
    paddingVertical: 16,  // เทียบเท่า py-8
  },
});

export default LayoutStyles;
