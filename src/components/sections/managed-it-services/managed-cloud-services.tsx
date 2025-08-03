/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Cloud,
  Database,
  Globe,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export function ManagedCloudServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    "24/7 cloud infrastructure monitoring",
    "Automated backup and disaster recovery",
    "Scalable cloud architecture design",
    "Multi-cloud environment management",
    "Cost optimization and resource planning",
    "Security and compliance management",
  ];

  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless transition to cloud platforms",
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Complete cloud infrastructure oversight",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure data storage and backup solutions",
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Advanced cloud security and monitoring",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cloud infrastructure visualization"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm rounded-xl p-4">
                <Cloud className="w-8 h-8 text-blue-600" />
              </div>

              <div className="absolute bottom-4 left-4 bg-orange-500/20 backdrop-blur-sm rounded-xl p-4">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Cloud Infrastructure
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Managed Cloud
              <span className="block text-blue-600">Services</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Leverage the power of cloud computing with our comprehensive
              managed cloud services. We handle everything from migration to
              ongoing management, ensuring optimal performance and cost
              efficiency.
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold group mb-8"
            >
              Explore Cloud Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Cloud Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {cloudServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 bg-gray-50 rounded-xl transition-all duration-1000 hover:bg-gray-100 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <Icon className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
