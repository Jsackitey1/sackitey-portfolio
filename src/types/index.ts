export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tools?: string[];
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  liveDemo?: string;
  tags: string[];
  category: 'featured' | 'secondary' | 'hackathon' | 'personal';
  status: 'completed' | 'in-progress' | 'planning';
  duration: string;
  teamSize: number;
  impact?: string;
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
  featured: boolean;
  completionDate: string;
  skills: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  current?: boolean;
}

export interface TechStack {
  category: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: string[];
  icon?: string;
  category: string;
  learningYear?: number;
  certifications?: string[];
}

export interface BreathingTextProps {
  label: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  transition?: {
    duration: number;
    ease: string;
  };
  staggerDuration?: number;
  staggerFrom?: 'first' | 'last' | 'center' | number;
  repeatDelay?: number;
  className?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

export interface CardProps {
  title: string;
  image: string;
  technologies: string[] | string;
  description: string;
  link?: string;
  github?: string;
  demoLink?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  slug: string;
  readTime: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}