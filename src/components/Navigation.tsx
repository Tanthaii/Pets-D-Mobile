import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUser } from '../contexts/UserContext';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Bug, Home, Upload, UserCircle, BookOpen, LogOut, User } from 'lucide-react-native';
import NavigationStyles from '../styles/NavigationStyles';

type NavigationProps = {
  navigate: (screen: string) => void;
};

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = useUser();
  const navigation = useNavigation<NavigationProps>();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
      navigation.navigate('Login');
    } catch (error) {
      alert('Failed to log out');
    }
  };

  const navItems = [
    { name: 'Home', route: 'Home', icon: Home },
    { name: 'Pest Information', route: 'PestInformation', icon: Bug },
    { name: 'Image Detection', route: 'ImageDetection', icon: Upload },
    { name: 'Expert Knowledge', route: 'ExpertKnowledge', icon: BookOpen },
  ];

  return (
    <View style={NavigationStyles.navContainer}>
      {/* Header */}
      <View style={NavigationStyles.navHeader}>
        <Bug style={NavigationStyles.icon} />
        <Text style={NavigationStyles.title}>PestDetect</Text>
      </View>

      {/* Navigation Items */}
      <View style={NavigationStyles.navItems}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <TouchableOpacity
              key={item.name}
              style={NavigationStyles.navLink}
              onPress={() => navigation.navigate(item.route)}
            >
              <Icon style={NavigationStyles.icon} />
              <Text style={NavigationStyles.linkText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}

        {/* User-specific Links */}
        {user ? (
          <>
            <TouchableOpacity
              style={NavigationStyles.navLink}
              onPress={() => navigation.navigate('UserProfile')}
            >
              <User style={NavigationStyles.icon} />
              <Text style={NavigationStyles.linkText}>{user.displayName || 'Profile'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NavigationStyles.logoutButton} onPress={handleLogout}>
              <LogOut style={NavigationStyles.icon} />
              <Text style={NavigationStyles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={NavigationStyles.navLink}
            onPress={() => navigation.navigate('Login')}
          >
            <UserCircle style={NavigationStyles.icon} />
            <Text style={NavigationStyles.linkText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
