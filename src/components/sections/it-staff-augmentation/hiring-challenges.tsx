/** @format */

"use client";

import { Clock, DollarSign, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const challenges = [
  {
    title: "Project Delays",
    icon: Clock,
    description:
      "Delaying project delivery by not filling resource gaps fast enough to keep up with demand.",
  },
  {
    title: "High Costs",
    icon: DollarSign,
    description:
      "Overpaying for hiring and onboarding instead of accessing top-tier talent affordably.",
  },
  {
    title: "Routine Overload",
    icon: FileText,
    description:
      "Wasting valuable time on admin tasks instead of focusing on growth.",
  },
];

export function HiringChallenges() {
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
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Taking Too Long to Hire In-House is Holding You Back
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
