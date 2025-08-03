/** @format */

"use client";

import { Globe, Heart, Lightbulb, Shield, Target, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const values = [
  {
    icon: Target,
    title: "Strategic Vision",
    description:
      "We think long-term and make decisions that drive sustainable growth and innovation in the digital solutions space.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions for our clients.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description:
      "Every decision we make is centered around delivering exceptional value and experiences for our customers.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description:
      "We build lasting relationships through transparency, reliability, and unwavering commitment to our promises.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    description:
      "We move fast, adapt quickly, and deliver high-quality solutions that exceed expectations every time.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "We leverage international expertise and best practices to create solutions that work across diverse markets.",
    color: "from-orange-500 to-orange-600",
  },
];

export function LeadershipValues() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Leadership
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our leadership team and drive our
            commitment to excellence in everything we do.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 delay-${
                index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
