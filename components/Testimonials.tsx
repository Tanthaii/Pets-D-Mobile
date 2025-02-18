import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/testimonialsStyles';

export default function Testimonials() {
  const testimonial = {
    text: 'This tool has revolutionized how we identify and manage pests.',
    name: 'Sarah Johnson',
    designation: 'Agricultural Specialist',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Our Users Say</Text>
      <View style={styles.card}>
        <Text style={styles.quote}>{`"${testimonial.text}"`}</Text>
        <Text style={styles.name}>{`- ${testimonial.name}`}</Text>
        <Text style={styles.designation}>{testimonial.designation}</Text>
      </View>
    </View>
  );
}
