/** @format */

"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    title: "Team Up with the Right People",
    description:
      "Team members are a crucial part to get the best outcomes which specify customer needs, and we are incredibly lucky to have such great teams.",
  },
  {
    title: "Effective Sprint Design",
    description:
      "For team members to collaborate successfully, we develop an effective sprint roadmap.",
  },
  {
    title: "Technological Architecture",
    description:
      "We detach the codes so that our team may work independently and more quickly.",
  },
  {
    title: "An iterative delivery strategy",
    description:
      "We divide the implementation process into manageable chunks so that value is delivered gradually.",
  },
  {
    title: "Reviewing the Code",
    description:
      "With code reviews, we spot problems like file leaks, memory leaks, and performance indicators.",
  },
  {
    title: "Demos and Training",
    description:
      "Coordination between team members and the client is ensured through weekly reviews, demos, and standups.",
  },
];

export default function DevelopmentProcess() {
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
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/app-development/development-process.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            How CYGEN
            <br />
            Develops Top-Notch Applications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-orange-400 group-hover:w-3 transition-all duration-300" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-orange-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white rounded-full animate-pulse animation-delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-white rounded-full animate-pulse animation-delay-1000" />
      </div>
    </section>
  );
}
