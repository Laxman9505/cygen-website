/** @format */

import {
  BookOpen,
  Code,
  Code2,
  Contact,
  Database,
  Download,
  MessageCircle,
  Monitor,
  Newspaper,
  Shield,
  Smartphone,
  SquareTerminal,
  User,
  Users,
  Users2,
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
        description:
          "We develop custom apps for your business. We are a team of passionate developers and designers who are dedicated to providing the best solutions for our clients",
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
        title: "Data Visualization",
        description:
          "We provide data visualization services to help you make data-driven decisions",
        href: "/services/data-visualization",
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
        title: "IT Staff Augmentation",
        description:
          "We provide IT staff augmentation services to help you manage your IT infrastructure",
        href: "/services/it-staff-augmentation",
        icon: Code2,
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
      {
        title: "CRM",
        description:
          "We provide CRM solutions to help you manage your customers and sales",
        href: "/products/cygen-crm",
        icon: Users,
      },
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
      {
        title: "Self Ordering Kiosk",
        description:
          "We provide self ordering kiosk solutions to help you manage your customers and sales",
        href: "/products/self-ordering-kiosk",
        icon: Monitor,
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
          "Access our latest news, press releases, and media coverage",
        href: "/media",
        icon: Newspaper,
      },
      {
        title: "Career",
        description:
          "Explore our career opportunities and join our team of passionate developers and designers",
        href: "/careers",
        icon: Users,
      },
      {
        title: "Leadership",
        description: "Meet the leaders who drive our vision and innovation",
        href: "/leadership",
        icon: Users2,
      },
      {
        title: "Contact Us",
        description:
          "Get in touch with us to learn more about our services and how we can help you",
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
        title: "Newsletters",
        description:
          "We provide newsletters to help you stay updated with the latest trends",
        href: "/blog",
        icon: MessageCircle,
      },
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
        title: "Glossary / Help",
        description:
          "We provide glossary and help to help you understand our solutions",
        href: "/resources/ramdom-resource-4",
        icon: Download,
      },
    ],
  },
];
