/** @format */

"use client";

import { Cloud, Code, Database, Shield, Smartphone, Users } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Custom App Development",
    description:
      "We develop custom apps tailored to your business needs, delivering innovative solutions that drive growth and efficiency.",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Managed IT Services",
    description:
      "Comprehensive IT management and support services to keep your infrastructure running smoothly and securely.",
    color: "text-green-600",
  },
  {
    icon: Database,
    title: "Data Visualization",
    description:
      "Transform complex data into clear, actionable insights through powerful visualization tools and analytics.",
    color: "text-purple-700",
  },
  {
    icon: Cloud,
    title: "Cloud Services & IT Infrastructure",
    description:
      "Scalable cloud solutions and robust IT infrastructure services to modernize your technology stack.",
    color: "text-orange-500",
  },
  {
    icon: Code,
    title: "Cybersecurity",
    description:
      "Advanced security solutions to protect your valuable data and systems from evolving cyber threats.",
    color: "text-red-800",
  },
  {
    icon: Users,
    title: "IT Staff Augmentation",
    description:
      "Enhance your team with skilled IT professionals on-demand, bridging talent gaps and accelerating project delivery.",
    color: "text-indigo-600",
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
