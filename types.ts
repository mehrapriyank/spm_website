import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Statistic {
  label: string;
  value: string;
  suffix?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Machine {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}


export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  altPhone?: string;
  email: string;
  altEmail?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
}