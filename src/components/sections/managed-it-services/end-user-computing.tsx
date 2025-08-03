/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Laptop,
  Monitor,
  Settings,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

export function EndUserComputing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Monitor,
      title: "Desktop Management",
      description:
        "Complete lifecycle management of desktop computers and workstations",
    },
    {
      icon: Laptop,
      title: "Mobile Device Management",
      description:
        "Secure and manage laptops, tablets, and mobile devices across your organization",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Ensure all endpoints meet security standards and compliance requirements",
    },
    {
      icon: Settings,
      title: "Software Deployment",
      description:
        "Automated software installation, updates, and patch management",
    },
    {
      icon: Users,
      title: "User Support",
      description: "24/7 helpdesk support for all end-user computing needs",
    },
    {
      icon: Smartphone,
      title: "BYOD Solutions",
      description: "Secure bring-your-own-device policies and management",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              End-User Computing
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Device
              <span className="block text-blue-600">Management</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From desktops to mobile devices, we provide comprehensive end-user
              computing solutions that keep your workforce productive and
              secure. Our proactive approach ensures optimal performance across
              all devices.
            </p>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold group mb-12"
            >
              Learn More About EUC
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className={`transition-all duration-1000 hover:shadow-lg ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-blue-600 mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="IT professionals managing devices"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Devices Managed</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-orange-500">99.5%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
