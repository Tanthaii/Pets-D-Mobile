import React from 'react';
import { View, Text } from 'react-native';
import ExpertKnowledgeStyles from '../styles/ExpertKnowledgeStyles';

interface KnowledgeItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ color: string; size: number }>;
}

interface KnowledgeSectionProps {
  title: string;
  items: KnowledgeItem[];
}

export function KnowledgeSection({ title, items }: KnowledgeSectionProps) {
  return (
    <View style={ExpertKnowledgeStyles.container}>
      <Text style={ExpertKnowledgeStyles.sectionTitle}>{title}</Text>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <View key={index} style={ExpertKnowledgeStyles.section}>
            <View style={ExpertKnowledgeStyles.iconWrapper}>
              <Icon color="#10B981" size={32} />
            </View>
            <Text style={ExpertKnowledgeStyles.sectionTitle}>{item.title}</Text>
            <Text style={ExpertKnowledgeStyles.text}>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
}
