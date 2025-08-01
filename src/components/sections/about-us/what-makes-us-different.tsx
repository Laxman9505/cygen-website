/** @format */

"use client";

import { Brain, Check, Headphones, Lightbulb, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const differentiators = [
  {
    icon: Lightbulb,
    title: "Creativity",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: Zap,
    title: "Rapid Solutions",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Headphones,
    title: "Top-Notch Support",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    icon: Brain,
    title: "Innovative Thinking",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

export default function WhatMakesUsDifferent() {
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
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-us/what-makes-us-different.png"
                alt="Team collaboration and brainstorming session"
                width={600}
                height={400}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />

              <div
                className={`absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                Expert Team
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What makes us{" "}
              <span className="text-blue-600">
                Different<span className="text-gray-900">?</span>
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a comprehensive custom software development firm that
              serves clients all over the world with excellent corporate IT
              solutions. Our team is committed and passionate about providing
              the best industry practices along with technological know-how and
              business domain expertise to accelerate digital transformation.
            </p>

            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Our ability to comprehend company difficulties with fluency and
                professionalism enables us to improve consumer experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div
                    className={`w-10 h-10 ${item.bgColor} rounded-xl flex items-center justify-center`}
                  >
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
