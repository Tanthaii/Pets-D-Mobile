import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Key, Shield } from 'lucide-react-native';
import UserProfileStyles from '../styles/UserProfileStyles';

export function SecuritySettings() {
  return (
    <View style={UserProfileStyles.card}>
      <Text style={UserProfileStyles.title}>Security Settings</Text>
      <TouchableOpacity style={UserProfileStyles.card}>
        <Key size={20} color="#10B981" />
        <Text>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={UserProfileStyles.card}>
        <Shield size={20} color="#10B981" />
        <Text>Manage Security Preferences</Text>
      </TouchableOpacity>
    </View>
  );
}
