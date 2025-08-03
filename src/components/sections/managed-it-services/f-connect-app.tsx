/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Settings,
  Smartphone,
  Users,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";

export function FConnectApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const appFeatures = [
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Instant notifications for system issues and updates",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed insights into your IT infrastructure performance",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless communication between IT teams and stakeholders",
    },
    {
      icon: Settings,
      title: "Remote Management",
      description: "Manage and configure systems from anywhere",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
              <Smartphone className="w-4 h-4 mr-2" />
              F-Connect Mobile App
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IT Management
              <span className="block text-blue-600">On-the-Go</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Stay connected to your IT infrastructure with our F-Connect mobile
              app. Monitor systems, receive alerts, and manage your IT
              environment from anywhere, anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold group"
              >
                Download App
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                View Demo
              </Button>
            </div>

            {/* App Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className={`transition-all duration-1000 hover:shadow-lg ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
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

          {/* Right Image - App Mockup */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="F-Connect mobile app interface"
                className="w-80 h-auto rounded-3xl shadow-2xl"
              />

              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <Wifi className="w-6 h-6 text-green-500" />
              </div>

              <div className="absolute top-1/2 -left-6 bg-white rounded-xl p-3 shadow-lg">
                <Bell className="w-6 h-6 text-orange-500" />
              </div>

              <div className="absolute -bottom-4 right-8 bg-white rounded-xl p-3 shadow-lg">
                <BarChart3 className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
