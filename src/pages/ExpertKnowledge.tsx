import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ExpertTipCard } from '../components/ExpertTipCard';
import { KnowledgeSection } from '../components/KnowledgeSection';
import { ExpertConsultation } from '../components/ExpertConsultation';
import ExpertKnowledgeStyles from '../styles/ExpertKnowledgeStyles';
import { Microscope, Leaf, Shield, AlertTriangle } from 'lucide-react-native';

interface Tip {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface KnowledgeItem {
  icon: React.ComponentType<any>;
  heading: string;
  description: string;
}

const expertTips: Tip[] = [
  {
    title: 'Scientific Approach',
    description: 'Our recommendations are based on peer-reviewed research.',
    icon: Microscope,
  },
  {
    title: 'Environmental Impact',
    description: 'We prioritize eco-friendly solutions to minimize environmental impact.',
    icon: Leaf,
  },
  {
    title: 'Safety First',
    description: 'All methods are evaluated for safety with clear guidelines.',
    icon: Shield,
  },
];

const preventionItems: KnowledgeItem[] = [
  { icon: Shield, heading: 'Habitat Modification', description: 'Manage moisture and seal entry points.' },
  { icon: Shield, heading: 'Regular Monitoring', description: 'Routine inspections prevent infestations.' },
  { icon: Shield, heading: 'Cultural Practices', description: 'Maintain sanitation and good agricultural practices.' },
];

const treatmentItems: KnowledgeItem[] = [
  { icon: Leaf, heading: 'Biological Control', description: 'Use natural enemies to manage pests.' },
  { icon: AlertTriangle, heading: 'Chemical Control', description: 'Use approved pesticides when necessary.' },
];

export function ExpertKnowledge() {
  return (
    <ScrollView
      style={ExpertKnowledgeStyles.container}
      contentContainerStyle={{ paddingBottom: 16 }}
    >
      {/* Header Section */}
      <View>
        <Text style={ExpertKnowledgeStyles.sectionTitle}>Expert Knowledge</Text>
        <Text style={ExpertKnowledgeStyles.text}>
          Access professional pest control recommendations and expert insights.
        </Text>
      </View>

      {/* Expert Tips */}
      {expertTips.map((tip, index) => (
        <ExpertTipCard
          key={index}
          title={tip.title}
          description={tip.description}
          Icon={tip.icon}
        />
      ))}

      {/* Knowledge Sections */}
      <KnowledgeSection
        title="Prevention Guidelines"
        items={preventionItems.map((item) => ({
          title: item.heading,
          description: item.description,
          icon: item.icon,
        }))}
      />
      <KnowledgeSection
        title="Treatment Approaches"
        items={treatmentItems.map((item) => ({
          title: item.heading,
          description: item.description,
          icon: item.icon,
        }))}
      />

      {/* Expert Consultation */}
      <ExpertConsultation />
    </ScrollView>
  );
}
