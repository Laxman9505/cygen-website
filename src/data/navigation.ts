/** @format */

import {
  BarChart3,
  BookOpen,
  Building2,
  Code,
  Contact,
  Database,
  Download,
  Handshake,
  MessageCircle,
  Newspaper,
  Shield,
  Smartphone,
  SquareTerminal,
  User,
  Users,
} from "lucide-react";

export const navigationData = [
  {
    title: "Services",
    overview: {
      title: "Overview",
      description:
        "Our comprehensive IT services are designed to transform your business with cutting-edge technology solutions.",
      ctaText: "LEARN MORE",
      ctaHref: "/services",
    },
    items: [
      {
        title: "Custom App Development",
        description: "We develop custom apps for your business",
        href: "/services/custom-app-development",
        icon: Smartphone,
      },
      {
        title: "Managed IT Services",
        description:
          "We provide managed IT services to help you manage your IT infrastructure",
        href: "/services/managed-it-services",
        icon: Shield,
      },
      {
        title: "Business Intelligence & Analytics",
        description:
          "We provide business intelligence and analytics services to help you make data-driven decisions",
        href: "/services/business-intelligence-analytics",
        icon: Database,
      },

      {
        title: "Cloud Services & IT Infrastructure",
        description:
          "We provide cloud services and IT infrastructure to help you manage your IT infrastructure",
        href: "/services/cloud-services-and-it-infrastructure",
        icon: Smartphone,
      },
      {
        title: "Cybersecurity",
        description:
          "We provide cybersecurity services to help you protect your data",
        href: "/services/cybersecurity",
        icon: Code,
      },
      {
        title: "AI Solutions & Business Automation",
        description:
          "We provide AI solutions and business automation to help you automate your business",
        href: "/services/ai-solutions-business-automation",
        icon: BarChart3,
      },
      {
        title: "IT Consulting & Strategy",
        description:
          "We provide IT consulting and strategy to help you plan your IT infrastructure",
        href: "/services/it-consulting-strategy",
        icon: Building2,
      },
      {
        title: "Backup & Disaster Recovery",
        description:
          "We provide backup and disaster recovery services to help you protect your data",
        href: "/services/backup-disaster-recovery",
        icon: Shield,
      },
      {
        title: "Digital Workplace Setup",
        description:
          "We provide digital workplace setup services to help you set up your digital workplace",
        href: "/services/digital-workplace-setup",
        icon: Building2,
      },
    ],
  },

  {
    title: "Products",
    overview: {
      title: "Overview",
      description:
        "Our innovative products are built to streamline your operations and drive business growth.",
      ctaText: "LEARN MORE",
      ctaHref: "/products",
    },
    items: [
      // {
      //   title: "CRM",
      //   description:
      //     "We provide CRM solutions to help you manage your customers and sales",
      //   href: "/products/crm",
      //   icon: Users,
      // },
      {
        title: "POS",
        description: "We provide POS solutions to help you manage your sales",
        href: "/products/cygen-pos",
        icon: SquareTerminal,
      },
      {
        title: "Connect",
        description:
          "We provide Connect solutions to help you manage your customers and sales",
        href: "/products/cygen-connect",
        icon: Users,
      },
      {
        title: "Cygnage",
        description:
          "We provide Cygnage solutions to help you manage your customers and sales",
        href: "/products/cygnage",
        icon: Users,
      },
      {
        title: "Saute",
        description:
          "We provide Saute solutions to help you manage your customers and sales",
          href: "/products/saute",
          icon: Users,
        },
      {
        title: "Online Ordering",
        description:
          "We provide Online Ordering solutions to help you manage your customers and sales",
        href: "/products/cygen-online-ordering",
        icon: Users,
      },
    ],
  },
  {
    title: "Company",
    overview: {
      title: "Overview",
      description:
        "Learn about our mission, team, and the values that drive our commitment to excellence.",
      ctaText: "LEARN MORE",
      ctaHref: "/company",
    },
    items: [
      {
        title: "About Us",
        description:
          "We are a team of passionate developers and designers who are dedicated to providing the best solutions for our clients",
        href: "/about-us",
        icon: Contact,
      },
      {
        title: "Press & Media",
        description:
          "We are a team of passionate developers and designers who are dedicated to providing the best solutions for our clients",
        href: "/company/press-media",
        icon: Newspaper,
      },
      {
        title: "Career",
        description:
          "We are a team of passionate developers and designers who are dedicated to providing the best solutions for our clients",
        href: "/company/career",
        icon: Users,
      },
      {
        title: "Partners",
        description:
          "We are a team of passionate developers and designers who are dedicated to providing the best solutions for our clients",
        href: "/company/partners",
        icon: Handshake,
      },
      {
        title: "Contact Us",
        description:
          "We are a team of passionate developers and designers who are dedicated to providing the best solutions for our clients",
        href: "/enquiry",
        icon: Contact,
      },
    ],
  },
  {
    title: "Resources",
    overview: {
      title: "Overview",
      description:
        "Access valuable insights, testimonials, and resources to help you make informed decisions.",
      ctaText: "LEARN MORE",
      ctaHref: "/resources",
    },
    items: [
      {
        title: "Testimonials",
        description: "Look at what our clients say about us",
        href: "/resources/ramdom-resource-1",
        icon: User,
      },
      {
        title: "Insights",
        description:
          "We provide insights to help you make data-driven decisions",
        href: "/resources/ramdom-resource-2",
        icon: BookOpen,
      },
      {
        title: "Newsletters",
        description:
          "We provide newsletters to help you stay updated with the latest trends",
        href: "/resources/ramdom-resource-3",
        icon: MessageCircle,
      },
      {
        title: "Glossary / Help",
        description:
          "We provide glossary and help to help you understand our solutions",
        href: "/resources/ramdom-resource-4",
        icon: Download,
      },
    ],
  },
];
