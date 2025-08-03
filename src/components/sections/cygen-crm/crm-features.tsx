/** @format */

"use client";

import {
  Calendar,
  Eye,
  HeadphonesIcon,
  Link,
  Palette,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export function CRMFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("crm-features");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Users,
      title: "Rich Contact Management",
      description:
        "Store details, notes, files, email conversations of the changing needs of customers all inside CYGEN CRM. A shared view of contacts empowers team members to take the next step.",
    },
    {
      icon: Settings,
      title: "Sales Process Setting",
      description:
        "Establish a winning, permanent and regular sales process that can easily be followed using Tracks in CYGEN CRM. Assign specific tasks and tracks to users so everyone knows what needs to be done next.",
    },
    {
      icon: Calendar,
      title: "Calendar & Tasks",
      description:
        "Create tasks for appointments, meetings, phone calls, and more. Link tasks to contacts and sales opportunities. See who's doing what with a shared view of the calendar.",
    },
    {
      icon: Palette,
      title: "Customisation",
      description:
        "Make CYGEN CRM fit around you, not the other way around. Set up your own pipeline milestones, custom fields and more.",
    },
    {
      icon: Link,
      title: "Connect with Other Apps",
      description:
        "CYGEN CRM integrates with a number of different applications including Zapier, Mailchimp, Xero, Google, PandaDoc, Freshbooks and more!",
    },
    {
      icon: Eye,
      title: "View Sales Opportunities",
      description:
        "We make CRM simple. Our clean design and simple workflows make it easy for you to use and understand your customer data. No training required.",
    },
    {
      icon: Zap,
      title: "Powerful Integrations",
      description:
        "Connect every business tool to CYGEN CRM. We design our integrations so they work the way you need them to and the data is easy for you to consume.",
    },
    {
      icon: HeadphonesIcon,
      title: "Friendly Support Team",
      description:
        "Rest easy knowing our team of experts are happy to help you with every query, no matter how small. We'll have you back on track in no time.",
    },
  ];

  return (
    <section id="crm-features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What else can CYGEN CRM do for you?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
