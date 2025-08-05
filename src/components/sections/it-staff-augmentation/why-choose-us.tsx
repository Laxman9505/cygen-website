/** @format */

"use client";

import {
  Award,
  Clock,
  DollarSign,
  Globe,
  HeadphonesIcon,
  RefreshCw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "Fast Hiring Process",
    icon: Clock,
    description:
      "We match you with the right talent in 48 hours, guaranteeing your team gets expert support without delays.",
  },
  {
    title: "Transparent Pricing",
    icon: DollarSign,
    description:
      "Our IT staff augmentation company guarantees clear pricing to ensure fairness and transparency for everyone involved.",
  },
  {
    title: "Time Zone Alignment",
    icon: Globe,
    description:
      "Our talent works on your schedule, making collaboration seamless no matter where your team is based.",
  },
  {
    title: "Post-Hiring Support",
    icon: HeadphonesIcon,
    description:
      "Our IT staff augmentation company handles payroll, IT setup, and admin tasks to keep things running smoothly after hiring.",
  },
  {
    title: "Proven Commercial Experience",
    icon: Award,
    description:
      "Our developers have hands-on experience, earned through solving practical, high-stakes challenges across various industries.",
  },
  {
    title: "Developer Replacement Policy",
    icon: RefreshCw,
    description:
      "If a developer isn't the right fit, our IT staff augmentation company replaces them quickly at no extra cost, keeping your project on track.",
  },
];

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Why Choose CYGEN
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
