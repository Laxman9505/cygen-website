/** @format */

"use client";

import { Brain, Cpu, Database, Link, Settings, Wifi } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const technologies = [
  {
    name: "Artificial Intelligence",
    icon: Brain,
    description: "AI-powered solutions for intelligent automation",
  },
  {
    name: "Machine Learning",
    icon: Cpu,
    description: "ML algorithms for predictive analytics",
  },
  {
    name: "Big Data",
    icon: Database,
    description: "Large-scale data processing and analytics",
  },
  {
    name: "Blockchain",
    icon: Link,
    description: "Secure and transparent distributed systems",
  },
  {
    name: "Internet of Things",
    icon: Wifi,
    description: "Connected devices and smart systems",
  },
  {
    name: "Robotic Process Automation",
    icon: Settings,
    description: "Automated business process optimization",
  },
];

export function LatestTech() {
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
            We Leverage the Latest Tech to Give You an Edge
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            We use the latest tech to solve complex problems and get tangible
            results for our clients. This helps them innovate faster, work
            smarter, and deliver better experiences for their customers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tech.name}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
