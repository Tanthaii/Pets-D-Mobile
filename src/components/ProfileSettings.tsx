import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import UserProfileStyles from '../styles/UserProfileStyles';
import { Bell } from 'lucide-react-native';

interface ProfileSettingsProps {
  email: string;
  fullName: string;
  phone: string;
  onFullNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onSave: () => void;
  isSaving: boolean;
  error: string | null;
}

export function ProfileSettings({
  email,
  fullName,
  phone,
  onFullNameChange,
  onPhoneChange,
  onSave,
  isSaving,
  error,
}: ProfileSettingsProps) {
  return (
    <View style={UserProfileStyles.card}>
      <Text style={UserProfileStyles.title}>Profile Settings</Text>
      <TextInput
        value={email}
        editable={false}
        style={[UserProfileStyles.input, { backgroundColor: '#E5E7EB' }]}
        placeholder="Email"
      />
      <TextInput
        value={fullName}
        onChangeText={onFullNameChange}
        style={UserProfileStyles.input}
        placeholder="Full Name"
      />
      <TextInput
        value={phone}
        onChangeText={onPhoneChange}
        style={UserProfileStyles.input}
        placeholder="Phone Number"
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button
        title={isSaving ? 'Saving...' : 'Save'}
        onPress={onSave}
        disabled={isSaving}
        color="#10B981"
      />
    </View>
  );
}
