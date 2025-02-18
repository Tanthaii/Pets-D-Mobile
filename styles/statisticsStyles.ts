import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#e8f5e9',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  number: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green',
  },
  label: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
