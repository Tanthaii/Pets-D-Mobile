export interface Pest {
  id: string;
  common_name: string;
  scientific_name: string;
  description: string;
  image_url: string;
  category: string;
  threat_level: 'Low' | 'Medium' | 'High';
  created_at: string;
}
