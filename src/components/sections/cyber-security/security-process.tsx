/** @format */

"use client";

import { Bell, Eye, FileText, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const securityProcesses = [
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description:
      "Advanced plans include real-time notifications to help you respond swiftly to potential risks.",
    color: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
  },
  {
    icon: Eye,
    title: "Threat Monitoring",
    description:
      "Identify compromised credentials, leaked data, and potential threats before they escalate.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
  },
  {
    icon: FileText,
    title: "Detailed Reporting",
    description:
      "Provides report with insights into vulnerabilities and actionable recommendations.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    icon: Settings,
    title: "Customizable Solutions",
    description:
      "Tailor monitoring plans to your business's unique brand, requirements and risk profile.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    borderColor: "border-teal-200",
  },
];

export default function SecurityProcesses() {
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
            Streamlining Security Processes For Maximum Efficiency
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Our comprehensive security processes ensure your organization stays
            protected
            <br />
            with advanced monitoring, real-time alerts, and customizable
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {securityProcesses.map((process, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group border-2 ${
                process.borderColor
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 ${process.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <process.icon className={`h-8 w-8 ${process.color}`} />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {process.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {process.description}
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
