import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './contexts/UserContext';

// Pages
import Home from './pages/Home';
import ImageDetection from './pages/ImageDetection';
import PestInformation from './pages/PestInformation';
import ExpertKnowledge from './pages/ExpertKnowledge';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Authentication Screens */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />

          {/* Main App Screens */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: 'Home' }}
          />
          <Stack.Screen
            name="ImageDetection"
            component={ImageDetection}
            options={{ headerTitle: 'Image Detection' }}
          />
          <Stack.Screen
            name="PestInformation"
            component={PestInformation}
            options={{ headerTitle: 'Pest Information' }}
          />
          <Stack.Screen
            name="ExpertKnowledge"
            component={ExpertKnowledge}
            options={{ headerTitle: 'Expert Knowledge' }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{ headerTitle: 'Profile' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
