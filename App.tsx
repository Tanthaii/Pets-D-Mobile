import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import HomeScreen from './pages/HomeScreen';
import PestDetectionScreen from './pages/PestDetectionScreen'; // ✅ นำเข้า PestDetectionScreen

// ✅ ประกาศ RootStackParamList ให้ TypeScript รู้จัก PestDetectionScreen
export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
  PestDetectionScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PestDetectionScreen" component={PestDetectionScreen} options={{ title: 'Pest Detection' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
