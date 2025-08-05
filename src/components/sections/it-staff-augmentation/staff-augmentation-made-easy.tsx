/** @format */

"use client";

import { useEffect, useRef, useState } from "react";

const howWeHelp = [
  "We bring in tech pros with skills across hundreds of in-demand areas.",
  "We match the right people from our talent pool to fit your project.",
  "We handle management and supervision of the team at every level.",
  "We keep our specialists sharp with proven learning and development programs.",
  "We take care of all the HR and work setup, so you don't have to.",
];

const whatYouGet = [
  "The skills you need, even for rare or niche areas.",
  "Flexible options for location and seniority to fit your budget.",
  "Experts ready to hit the ground running.",
  "A team that can scale as your project grows.",
  "Big savings on recruiting and managing your workforce.",
];

export function StaffAugmentationMadeEasy() {
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
            Technology Staff Augmentation Made Easy
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                How We Help
              </h3>
              <ul className="space-y-6">
                {howWeHelp.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-blue-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                What You Get
              </h3>
              <ul className="space-y-6">
                {whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
