import { Project, Article, SkillCategory } from './types';

export const HERO_TITLE = "Innovating Across Disciplines";
export const HERO_SUBTITLE = "Bridging the gap between hardware, software, and design to create holistic solutions.";

export const SKILLS_DATA = [
  { id: SkillCategory.SOFTWARE, label: 'Software Eng', icon: 'Code', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: SkillCategory.UIUX, label: 'UI/UX Design', icon: 'Layout', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { id: SkillCategory.GRAPHIC, label: 'Graphic Design', icon: 'PenTool', color: 'text-pink-400', bg: 'bg-pink-400/10' },
  { id: SkillCategory.ELECTRICAL, label: 'Electrical Eng', icon: 'Zap', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { id: SkillCategory.CONTROL, label: 'Control Systems', icon: 'Settings', color: 'text-teal-400', bg: 'bg-teal-400/10' },
  { id: SkillCategory.PHOTO, label: 'Photography', icon: 'Camera', color: 'text-orange-400', bg: 'bg-orange-400/10' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Autonomous Drone Flight Controller',
    description: 'Designed a custom PCB and implemented PID control logic for stable quadcopter flight under wind disturbance.',
    category: SkillCategory.CONTROL,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['C++', 'Control Theory', 'PCB Design', 'Embedded Systems']
  },
  {
    id: '2',
    title: 'E-Commerce Dashboard Redesign',
    description: 'A complete UX overhaul of a legacy inventory management system, focusing on accessibility and mobile responsiveness.',
    category: SkillCategory.UIUX,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['Figma', 'Prototyping', 'User Research']
  },
  {
    id: '3',
    title: 'High-Speed Signal Processor',
    description: 'FPGA-based signal processing unit for real-time audio filtering, reducing latency by 40%.',
    category: SkillCategory.ELECTRICAL,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['Verilog', 'FPGA', 'DSP', 'Circuit Analysis']
  },
  {
    id: '4',
    title: 'Urban Geometry',
    description: 'A photography series exploring the interplay of light and shadow in modern brutalist architecture.',
    category: SkillCategory.PHOTO,
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['Composition', 'Editing', 'Lightroom']
  },
  {
    id: '5',
    title: 'SaaS Analytics Platform',
    description: 'Full-stack React/Node.js application visualizing complex datasets for enterprise clients.',
    category: SkillCategory.SOFTWARE,
    imageUrl: 'https://picsum.photos/800/600?random=5',
    tags: ['React', 'TypeScript', 'Node.js', 'D3.js']
  },
  {
    id: '6',
    title: 'Brand Identity: Vertex',
    description: 'Developed the logo, typography, and visual language for a tech startup specializing in AI.',
    category: SkillCategory.GRAPHIC,
    imageUrl: 'https://picsum.photos/800/600?random=6',
    tags: ['Illustrator', 'Branding', 'Vector Art']
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'The Future of PID Control in AI',
    excerpt: 'Exploring how neural networks can dynamically tune PID parameters for non-linear systems.',
    category: SkillCategory.CONTROL,
    date: 'Oct 12, 2023',
    readTime: '5 min read'
  },
  {
    id: 'a2',
    title: 'Minimalism in UI: Less is More?',
    excerpt: 'When stripping away interface elements goes too far and hurts usability.',
    category: SkillCategory.UIUX,
    date: 'Nov 05, 2023',
    readTime: '4 min read'
  },
  {
    id: 'a3',
    title: 'Understanding Impedance Matching',
    excerpt: 'A practical guide to RF circuit design and ensuring maximum power transfer.',
    category: SkillCategory.ELECTRICAL,
    date: 'Dec 20, 2023',
    readTime: '8 min read'
  }
];
