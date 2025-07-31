/** @format */

"use client";

import {
  BarChart3,
  Brain,
  Code,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
    color: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "QA and Testing",
    description:
      "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
    color: "text-purple-700",
  },
  {
    icon: Brain,
    title: "AI and Data Science",
    description:
      "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
    color: "text-orange-500",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
    color: "text-red-800",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
    color: "text-blue-600",
  },
  {
    icon: Server,
    title: "Platform and Infrastructure",
    description:
      "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
    color: "text-yellow-700",
  },
];

export default function ServicesDetail() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-down">
            Empowering Businesses with Reliable,
            <br />
            Tailored IT Solutions.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`h-6 w-6 ${service.color} group-hover:scale-110 transition-transform`}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
