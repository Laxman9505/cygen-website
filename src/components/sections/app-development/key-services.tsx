/** @format */

"use client";

import {
  BarChart3,
  Headphones,
  Network,
  Palette,
  PieChart,
  Settings,
  Smartphone,
  Zap,
} from "lucide-react";

const keyServices = [
  {
    icon: Settings,
    title: "Process Control",
    description:
      "With a solid, customized solution created exclusively for company needs, you may accelerate growth and reduce costs.",
    color: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Automation of Systems and Processes",
    description:
      "Automate your company to boost efficiency, decrease mistakes, and accelerate processes.",
    color: "text-purple-600",
  },
  {
    icon: Network,
    title: "Architectural Scalability",
    description:
      "Thinking big? Allow our system architects to create a platform that is designed to scale right away.",
    color: "text-orange-600",
  },
  {
    icon: Palette,
    title: "Enhancing User Experience",
    description:
      "Create software that is simple to use and that your employees or customers will enjoy using.",
    color: "text-orange-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native mobile applications for iOS & Android are used to deliver your business applications.",
    color: "text-blue-600",
  },
  {
    icon: PieChart,
    title: "Analytics and Data Visualization",
    description:
      "With our selection of visualization options, you can quickly identify trends and transform your raw data into actionable insights.",
    color: "text-red-500",
  },
  {
    icon: Zap,
    title: "AI for your growth",
    description:
      "Find out how Artificial Intelligence can develop and streamline your company right now. Speak with one of our AI experts right away.",
    color: "text-orange-500",
  },
  {
    icon: Headphones,
    title: "Assistance & Maintenance",
    description:
      "Unwind knowing that we will be your long-term support partner well following the initial build.",
    color: "text-blue-600",
  },
];

export default function KeyServices() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-500 mb-4 animate-slide-in-down">
            Our Key Services
          </h2>
          <p className="text-lg text-gray-900 max-w-4xl mx-auto leading-relaxed">
            To provide you with a wide range of services, we think broadly and
            are active on
            <br />
            all major technological platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {keyServices.map((service, index) => (
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
