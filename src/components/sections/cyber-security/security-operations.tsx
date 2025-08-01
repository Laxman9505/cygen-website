/** @format */

"use client";

import { ClipboardList, FileBarChart, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const securityOperations = [
  {
    icon: ClipboardList,
    title: "Comprehensive Assessment",
    description:
      "We evaluate your organization's controls and processes to ensure compliance with industry standards, safeguarding client data and securing your operations.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    icon: FileBarChart,
    title: "Detailed Reporting",
    description:
      "Receive thorough, easy-to-understand reports that outline your system's strengths, address potential vulnerabilities, and highlight opportunities for improvement.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    borderColor: "border-teal-200",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Our certified auditors provide actionable insights and consultation, helping you prepare, improve, and maintain a robust security framework tailored to your business needs.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We conduct periodic reassessments to ensure your controls remain effective, aligning with evolving industry regulations, and capable of mitigating emerging threats.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
  },
];

export default function SecurityOperations() {
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
            Optimizing Security Operations For Complete Protection
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Ensure your security operations are optimized for maximum
            effectiveness with our comprehensive
            <br />
            assessment, reporting, and continuous improvement services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {securityOperations.map((operation, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group border-2 ${
                operation.borderColor
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 ${operation.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <operation.icon className={`h-8 w-8 ${operation.color}`} />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {operation.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {operation.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl" />
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to strengthen your cybersecurity posture?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Get Security Assessment
              </button>
            </Link>
            <Link href="/enquiry">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Contact Security Experts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
