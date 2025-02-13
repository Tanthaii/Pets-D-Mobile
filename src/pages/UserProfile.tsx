import React, { useState } from 'react';
import { ScrollView, View,Text } from 'react-native';
import { useUser } from '../contexts/UserContext';
import UserProfileStyles from '../styles/UserProfileStyles';
import { ProfileSettings } from '../components/ProfileSettings';
import { SecuritySettings } from '../components/SecuritySettings';
import { RecentActivity } from '../components/RecentActivity';


export function UserProfile() {
  const { user } = useUser();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate saving logic
      setTimeout(() => {
        setIsSaving(false);
      }, 1000);
    } catch (e) {
      setError('Failed to save profile');
      setIsSaving(false);
    }
  };

  if (!user) {
    return <Text>Please sign in to access your profile.</Text>;
  }

  return (
    <ScrollView style={UserProfileStyles.container}>
      <ProfileSettings
        email={user.email || ''}
        fullName={fullName}
        phone={phone}
        onFullNameChange={setFullName}
        onPhoneChange={setPhone}
        onSave={handleSave}
        isSaving={isSaving}
        error={error}
      />
      <SecuritySettings />
      <RecentActivity />
    </ScrollView>
  );
}
