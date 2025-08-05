/** @format */

"use client";

import {
  BarChart3,
  Cloud,
  Code,
  Database,
  Smartphone,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const developerTypes = [
  {
    name: "Dedicated Team",
    icon: Users,
    description: "Full-stack development teams for complex projects",
  },
  {
    name: "iOS Developers",
    icon: Smartphone,
    description: "Native iOS app development specialists",
  },
  {
    name: "Flutter Developers",
    icon: Code,
    description: "Cross-platform mobile app developers",
  },
  {
    name: "React Native Developers",
    icon: Smartphone,
    description: "JavaScript-based mobile app experts",
  },
  {
    name: "Xamarin Developers",
    icon: Code,
    description: "Microsoft-based cross-platform developers",
  },
  {
    name: ".NET MAUI Developers",
    icon: Database,
    description: "Multi-platform app UI framework specialists",
  },
  {
    name: "Cloud Engineers",
    icon: Cloud,
    description: "Cloud infrastructure and DevOps experts",
  },
  {
    name: "Business Analysts",
    icon: BarChart3,
    description: "Requirements analysis and process optimization",
  },
];

export function DeveloperTypes() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {developerTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-500 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {type.name}
                </h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
