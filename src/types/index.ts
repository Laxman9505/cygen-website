/** @format */

import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  image: string;
  slug: string;
  tags: string[];
}
