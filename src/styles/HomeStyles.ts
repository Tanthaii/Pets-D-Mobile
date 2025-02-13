import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // เทียบเท่า bg-gray-50
  },
  section: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937', // text-gray-900
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#6B7280', // text-gray-600
  },
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#10B981', // bg-green-600
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#D1FAE5', // bg-green-50
    borderRadius: 8,
  },
  statsItem: {
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10B981',
  },
  statsLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  // เพิ่มส่วนสำหรับ Testimonials
  testimonialsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testimonialAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937', // text-gray-900
  },
  userIcon: {
    color: '#10B981', // text-green-600
    marginRight: 8,
  },
  starIcon: {
    color: '#FBBF24', // text-yellow-400
    marginRight: 4,
  },
});

export default HomeStyles;
