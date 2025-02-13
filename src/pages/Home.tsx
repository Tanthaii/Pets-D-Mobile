import React from 'react';
import { ScrollView, View } from 'react-native';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import { BenefitsSection } from '../components/BenefitsSection';

export function Home() {
  return (
    <ScrollView>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <BenefitsSection />
    </ScrollView>
  );
}
