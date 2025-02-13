import React from 'react';
import { View } from 'react-native';
import { Navigation } from './Navigation';
import LayoutStyles from '../styles/LayoutStyles'; // Import styles

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <View style={LayoutStyles.container}>
      <Navigation />
      <View style={LayoutStyles.main}>{children}</View>
    </View>
  );
}
