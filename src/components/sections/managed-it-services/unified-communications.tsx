/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Headphones,
  MessageSquare,
  Phone,
  Users,
  Video,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";

export function UnifiedCommunications() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Phone,
      title: "VoIP Solutions",
      description: "Crystal-clear voice communication",
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "HD video meetings and collaboration",
    },
    {
      icon: MessageSquare,
      title: "Instant Messaging",
      description: "Real-time team communication",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Integrated collaboration tools",
    },
    {
      icon: Headphones,
      title: "Contact Center",
      description: "Advanced call center solutions",
    },
    {
      icon: Wifi,
      title: "Mobile Integration",
      description: "Seamless mobile connectivity",
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
              <Phone className="w-4 h-4 mr-2" />
              Unified Communications
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Seamless
              <span className="block text-blue-600">Communication</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your business communications with our unified
              communications platform. Integrate voice, video, messaging, and
              collaboration tools into one seamless solution.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Enterprise-Grade Reliability
                  </h3>
                  <p className="text-gray-600">
                    99.9% uptime guarantee with redundant infrastructure
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Scalable Solutions
                  </h3>
                  <p className="text-gray-600">
                    Grow from 10 to 10,000 users with ease
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Advanced Security
                  </h3>
                  <p className="text-gray-600">
                    End-to-end encryption and compliance standards
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold group"
            >
              Explore UC Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image with Feature Overlay */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team using unified communications"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Feature Icons Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg transition-all duration-1000 hover:scale-110 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                      >
                        <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
