import React from 'react';
import { View, Text } from 'react-native';
import { Award, Users } from 'lucide-react-native';
import HomeStyles from '../styles/HomeStyles';

const testimonials = [
  {
    quote: "This tool has revolutionized how we identify and manage pests in our agricultural operations.",
    author: 'Sarah Johnson',
    role: 'Agricultural Specialist',
  },
  {
    quote: "The instant pest identification feature has saved us countless hours in pest management.",
    author: 'Michael Chen',
    role: 'Farm Manager',
  },
];

export function TestimonialsSection() {
  const renderStars = (count: number) => {
    return (
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        {[...Array(count)].map((_, i) => (
          <Award key={i} style={HomeStyles.starIcon} />
        ))}
      </View>
    );
  };

  return (
    <View style={HomeStyles.testimonialsContainer}>
      <Text style={HomeStyles.title}>What Our Users Say</Text>
      {testimonials.map((testimonial, index) => (
        <View key={index} style={HomeStyles.testimonialCard}>
          {renderStars(5)}
          <Text style={HomeStyles.text}>"{testimonial.quote}"</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
            <Users style={HomeStyles.userIcon} />
            <View>
              <Text style={HomeStyles.testimonialAuthor}>{testimonial.author}</Text>
              <Text style={HomeStyles.text}>{testimonial.role}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
