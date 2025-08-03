/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  GraduationCap,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";

export function ExtraMileServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Wrench,
      title: "Proactive Maintenance",
      description: "We don't just fix problems - we prevent them",
      details: [
        "Predictive analytics to identify issues before they occur",
        "Automated system health checks and optimization",
        "Regular performance tuning and updates",
        "Preventive hardware maintenance schedules",
      ],
    },
    {
      icon: GraduationCap,
      title: "Staff Training & Development",
      description: "Empower your team with knowledge and skills",
      details: [
        "Customized training programs for your staff",
        "Technology workshops and certifications",
        "Best practices documentation and guides",
        "Ongoing education and skill development",
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Analytics",
      description: "Turn your data into actionable insights",
      details: [
        "Custom dashboard development and reporting",
        "Data analysis and trend identification",
        "Performance metrics and KPI tracking",
        "Strategic recommendations based on data",
      ],
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Stay ahead with cutting-edge technology",
      details: [
        "Technology roadmap planning and strategy",
        "Emerging technology evaluation and adoption",
        "Digital transformation guidance",
        "Innovation workshops and brainstorming sessions",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Going the
              <span className="block text-blue-600">Extra Mile</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond standard managed IT services, we provide additional
              value-added services that help your business thrive in the digital
              age.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`transition-all duration-1000 hover:shadow-xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 rounded-xl p-3 mr-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 group bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the CYGEN Difference?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us show you how our comprehensive managed IT services can
              transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
