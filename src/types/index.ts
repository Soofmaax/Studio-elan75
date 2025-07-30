export interface YogaClass {
  id: string;
  title: string;
  type: 'prenatal' | 'gentle' | 'dynamic' | 'children';
  description: string;
  benefits: string[];
  schedule: Schedule[];
  image: string;
  instructor: string;
}

export interface Schedule {
  day: string;
  time: string;
  duration: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image: string;
  yogaType: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

export interface Instructor {
  id: string;
  name: string;
  bio: string;
  image: string;
  specialties: string[];
  certifications: string[];
  approach: string;
  background: string;
  schedule: Schedule[];
  testimonials: {
    text: string;
    author: string;
    role: string;
  }[];
  articles: {
    title: string;
    link: string;
  }[];
  socials: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  pricePerClass?: number;
  features: string[];
  popular: boolean;
  buttonText: string;
}

export interface ClassBooking {
  id: string;
  yogaClassId: string;
  userId: string;
  date: string;
  time: string;
  status: 'booked' | 'cancelled' | 'attended';
}

export interface User {
  id: string;
  name: string;
  email: string;
  remainingClasses: number;
  memberSince: string;
}

export interface SiteConfig {
  name: string;
  address: string;
  phone: string;
  email: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  googleMapsUrl: string;
  metaDescription: string;
  keywords: string[];
}