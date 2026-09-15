export interface ProjectCaseStudy {
  id: string;
  category: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string;
  domainKey: string;
  iconName: 'web' | 'integration' | 'layers' | 'auto_awesome' | 'devices' | 'sync_alt';
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  domain: string;
  message: string;
}
