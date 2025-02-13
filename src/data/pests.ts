import { Pest } from '../components/types';
export const mockPests: Pest[] = [
    {
      id: 'yellow-rice-borer',
      common_name: 'Yellow Rice Borer',
      scientific_name: 'Scirpophaga incertulas',
      description: 'A serious pest of rice crops.',
      image_url: 'https://example.com/yellow-rice-borer.png',
      category: 'Moth',
      threat_level: 'High', // ใช้ค่าที่ตรงกับ type
      created_at: new Date().toISOString(),
    },
    {
      id: 'weevil',
      common_name: 'Rice Weevil',
      scientific_name: 'Sitophilus oryzae',
      description: 'A major stored grain pest.',
      image_url: 'https://example.com/rice-weevil.png',
      category: 'Beetle',
      threat_level: 'Low', // ใช้ค่าที่ตรงกับ type
      created_at: new Date().toISOString(),
    },
  ];
  
  export const categories = ['All', 'Ant', 'Bee', 'Beetle', 'Bug', 'Earwig', 'Fly', 'Grasshopper', 'Moth', 'Snail', 'Slug', 'Wasp', 'Worm'];
  export const threatLevels = ['All', 'Low', 'Medium', 'High'];
  