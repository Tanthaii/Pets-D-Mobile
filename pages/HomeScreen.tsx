import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import WhyChoosePestDetect from '../components/WhyChoosePestDetect';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Statistics />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
