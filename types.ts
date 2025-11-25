export enum SkillCategory {
  ALL = 'All',
  SOFTWARE = 'Software Engineering',
  GRAPHIC = 'Graphic Design',
  UIUX = 'UI/UX Design',
  PHOTO = 'Photography',
  ELECTRICAL = 'Electrical Engineering',
  CONTROL = 'Control Systems'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: SkillCategory;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: SkillCategory;
  date: string;
  readTime: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
