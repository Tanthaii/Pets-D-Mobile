import { StyleSheet } from 'react-native';

const NavigationStyles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    color: '#10B981', // เทียบเท่า text-green-600
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937', // เทียบเท่า text-gray-900
  },
  navItems: {
    flexDirection: 'column',
  },
  navLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: '#F3F4F6', // เทียบเท่า hover:bg-gray-100
    paddingHorizontal: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#374151', // เทียบเท่า text-gray-700
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: '#FEE2E2', // เทียบเท่า hover:bg-red-50
    paddingHorizontal: 8,
  },
  logoutText: {
    fontSize: 14,
    color: '#DC2626', // เทียบเท่า text-red-600
    fontWeight: '500',
  },
});

export default NavigationStyles;
