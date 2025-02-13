import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HelpCircle, ExternalLink } from 'lucide-react-native';
import ExpertKnowledgeStyles from '../styles/ExpertKnowledgeStyles';

export function ExpertConsultation() {
  return (
    <View style={[ExpertKnowledgeStyles.section, { backgroundColor: '#D1FAE5' }]}>
      {/* Header Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <HelpCircle color="#10B981" size={24} />
        <Text style={[ExpertKnowledgeStyles.sectionTitle, { marginLeft: 8 }]}>Need Expert Help?</Text>
      </View>

      {/* Main Content */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Left Section */}
        <View style={{ flex: 1, marginRight: 8 }}>
          <Text style={ExpertKnowledgeStyles.text}>
            For complex pest problems or situations requiring professional intervention, our experts are here to help.
          </Text>
          <TouchableOpacity style={ExpertKnowledgeStyles.button}>
            <Text style={ExpertKnowledgeStyles.buttonText}>Connect with an Expert</Text>
            <ExternalLink color="#FFFFFF" size={16} style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        </View>

        {/* Right Section */}
        <View style={[ExpertKnowledgeStyles.section, { flex: 1, marginLeft: 8, backgroundColor: '#FFFFFF' }]}>
          <Text style={ExpertKnowledgeStyles.sectionTitle}>When to Seek Professional Help</Text>
          <View>
            {/* List Items */}
            <View style={ExpertKnowledgeStyles.listItem}>
              <View style={ExpertKnowledgeStyles.listItemIcon} />
              <Text style={ExpertKnowledgeStyles.listItemText}>Severe or persistent infestations</Text>
            </View>
            <View style={ExpertKnowledgeStyles.listItem}>
              <View style={ExpertKnowledgeStyles.listItemIcon} />
              <Text style={ExpertKnowledgeStyles.listItemText}>Health and safety concerns</Text>
            </View>
            <View style={ExpertKnowledgeStyles.listItem}>
              <View style={ExpertKnowledgeStyles.listItemIcon} />
              <Text style={ExpertKnowledgeStyles.listItemText}>Protected or sensitive environments</Text>
            </View>
            <View style={ExpertKnowledgeStyles.listItem}>
              <View style={ExpertKnowledgeStyles.listItemIcon} />
              <Text style={ExpertKnowledgeStyles.listItemText}>Legal compliance requirements</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
