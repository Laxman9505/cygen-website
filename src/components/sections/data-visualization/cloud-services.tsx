/** @format */

"use client";

import { BarChart, Cloud, Database } from "lucide-react";
import { useEffect, useState } from "react";

export function CloudServices() {
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

    const element = document.getElementById("cloud-services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "AWS data visualization",
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      description:
        "Amazon Web Services is a cloud platform that presents a wide range of services that perform sophisticated analytics. As a result, business owners can receive insightful predictions and comparisons with major competitors. Innowise actively uses this tool to pinpoint various performance metrics.",
      features: [
        "Predicting business metrics",
        "Ongoing machine learning analysis",
        "Integration of data from different sources",
        "Visualization of key performance indicator",
        "Data storage and encryption",
      ],
    },
    {
      title: "Data visualization with Google Data Studio",
      icon: <Database className="w-8 h-8 text-orange-500" />,
      description:
        'This app is more commonly referred to as "google data visualization" because this tool is central to the ecosystem for transforming data into detailed reports, graphs and charts. Reports can be edited in real-time and customized, based on a large library of components.',
      features: [
        "Google ecosystem integration",
        "Advanced monitoring dashboards",
        "Detailed data filtering",
        "Connection to any data source",
        "Dashboard customization",
      ],
    },
    {
      title: "Azure data visualization",
      icon: <BarChart className="w-8 h-8 text-orange-500" />,
      description:
        "Innowise also uses a service from Microsoft, which provides an excellent computational tool for vast amounts of data. This information can then be visualized into full business analytics for the project. The service can also be connected to Microsoft's Power BI that can provide additional analytics in other areas",
      features: [
        "Visualization with Azure Dashboards",
        "Integration of other cloud platforms",
        "Machine learning models and tools",
        "Prediction from artificial intelligence",
        "Ongoing data flow analytics",
      ],
    },
  ];

  return (
    <section id="cloud-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Data visualization using cloud services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cloud services for data management, analytics and visualization are
            very flexible tools. They allow connection from any device,
            including mobile. This means that an entire team can monitor and
            visualize data online. Innowise can highlight the best of them:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Features:
                </h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
