import React from 'react';
import { View, Text } from 'react-native';
import ExpertKnowledgeStyles from '../styles/ExpertKnowledgeStyles';

interface ExpertTipCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>; // แก้ไข Icon props
}

export function ExpertTipCard({ title, description, Icon }: ExpertTipCardProps) {
  return (
    <View style={ExpertKnowledgeStyles.section}>
      <View style={ExpertKnowledgeStyles.iconWrapper}>
        <Icon size={24} color="#10B981" />
      </View>
      <Text style={ExpertKnowledgeStyles.sectionTitle}>{title}</Text>
      <Text style={ExpertKnowledgeStyles.text}>{description}</Text>
    </View>
  );
}
