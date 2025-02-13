import React from 'react';
import { View, Text } from 'react-native';
import { Camera, User, Shield } from 'lucide-react-native';
import UserProfileStyles from '../styles/UserProfileStyles';

interface Activity {
  action: string;
  description: string;
  date: string;
  icon: React.ElementType;
}

const activities: Activity[] = [
  { action: 'Pest Detection', description: 'Uploaded an image for pest detection', date: '2 hours ago', icon: Camera },
  { action: 'Profile Update', description: 'Updated profile information', date: '1 day ago', icon: User },
  { action: 'Security Alert', description: 'New login from Chrome browser', date: '3 days ago', icon: Shield },
];

export function RecentActivity() {
  return (
    <View style={UserProfileStyles.card}>
      <Text style={UserProfileStyles.title}>Recent Activity</Text>
      {activities.map((activity, index) => {
        const Icon = activity.icon;
        return (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <Icon size={24} color="#10B981" />
            <View style={{ marginLeft: 12 }}>
              <Text style={UserProfileStyles.title}>{activity.action}</Text>
              <Text>{activity.description}</Text>
              <Text>{activity.date}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
