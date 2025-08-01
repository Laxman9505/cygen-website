/** @format */

"use client";

import { ClipboardCheck, Handshake, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const coreValues = [
  {
    icon: Handshake,
    title: "Commitment",
    description:
      "By becoming their dependable technology partner, we provide our customers with the most value possible. The success of our partners and clients determines our success.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    icon: ClipboardCheck,
    title: "Driven by Quality",
    description:
      "We guarantee outstanding quality provided in a timely way that is in line with your expectations thanks to our best-in-class infrastructure and highly sought after technical skills.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    borderColor: "border-teal-200",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "To support our customers' innovation and business transformation, we are continually on the lookout for new ideas, products, and improved implementation methodologies.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
  },
];

export default function CoreValues() {
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
                : "opacity-0 translate-y-10"
            }`}
          >
            Our Core Values
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            These fundamental principles guide everything we do and shape how we
            serve our clients
            <br />
            and build lasting partnerships in the technology industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group border-2 ${
                value.borderColor
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {value.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
