/** @format */

"use client";

import { Code, Database, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function VisualizationServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("visualization-services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Data visualization consulting",
      icon: <Users className="w-12 h-12 text-orange-500" />,
      description:
        "Our data consultants always assist customers in selecting valuable data. Therefore, it becomes possible to optimize costs in all business sectors and find new solutions.",
    },
    {
      title: "Data visualization implementation",
      icon: <Code className="w-12 h-12 text-orange-500" />,
      description:
        "Innowise's team of experts can implement the most competent and reliable data visualization solutions. This will help to extract the right data and provide new insights on the needs of the target audience.",
    },
    {
      title: "Data platform development",
      icon: <Database className="w-12 h-12 text-orange-500" />,
      description:
        "We know how to develop a data visualization platform that can customize data integration from sources, create a centralized repository, provide data protection and improve reporting and final visualization.",
    },
  ];

  return (
    <section id="visualization-services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Data visualization services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In the early stages of establishing a business, it is possible to
            encounter large volumes of data that may not be appropriately
            allocated. As a result, effective project growth can be postponed.
            Our experts at Innowise provide data visualization services that
            ultimately help you deal with plenty of data. Here's what's included
            in our suite:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`text-center p-8 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">•</span> {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
