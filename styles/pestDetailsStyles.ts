import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  pestImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  pestName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scientificName: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#6c757d',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5,
  },
});
