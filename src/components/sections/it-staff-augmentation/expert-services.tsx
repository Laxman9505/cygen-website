/** @format */

"use client";

import {
  Code,
  Palette,
  Settings,
  Smartphone,
  TestTube,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    name: "Java Developers",
    icon: Code,
    description: "Enterprise Java development specialists",
  },
  {
    name: "QA Engineers",
    icon: TestTube,
    description: "Quality assurance and testing experts",
  },
  {
    name: "UI/UX Designers",
    icon: Palette,
    description: "User interface and experience designers",
  },
  {
    name: "DevOps Engineers",
    icon: Settings,
    description: "Infrastructure and deployment specialists",
  },
  {
    name: "Dedicated Team",
    icon: Users,
    description: "Complete development teams",
  },
  {
    name: "iOS Developers",
    icon: Smartphone,
    description: "Native iOS application developers",
  },
  {
    name: "Flutter Developers",
    icon: Code,
    description: "Cross-platform mobile developers",
  },
  {
    name: "React Native Developers",
    icon: Smartphone,
    description: "JavaScript mobile app developers",
  },
];

export function ExpertServices() {
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
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Expert Services Tailored to Your Needs
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            With our IT staff augmentation services, you skip the headaches of
            hiring and managing admin tasks. We handle all the legwork, so you
            get top-notch specialists with real-world experience ready to dive
            into your project — no hassle, no wasted time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-500 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
