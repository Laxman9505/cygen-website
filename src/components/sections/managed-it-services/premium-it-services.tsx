/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  Network,
  Server,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";

export function PremiumITServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Complete server and network infrastructure oversight",
      features: [
        "24/7 monitoring",
        "Proactive maintenance",
        "Performance optimization",
      ],
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Comprehensive data backup, recovery, and management solutions",
      features: ["Automated backups", "Disaster recovery", "Data analytics"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Advanced security solutions to protect your business",
      features: [
        "Threat detection",
        "Security audits",
        "Compliance management",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "Cloud migration",
        "Multi-cloud management",
        "Cost optimization",
      ],
    },
    {
      icon: Network,
      title: "Network Services",
      description: "Reliable network design, implementation, and management",
      features: [
        "Network design",
        "SD-WAN solutions",
        "Performance monitoring",
      ],
    },
    {
      icon: Cpu,
      title: "IT Consulting",
      description: "Strategic IT planning and technology consulting services",
      features: ["IT strategy", "Technology roadmap", "Digital transformation"],
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "15min", label: "Response Time" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Premium IT Services
              <span className="block text-orange-400">for Enterprise</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Comprehensive managed IT services designed for businesses that
              demand excellence. Our premium solutions ensure your technology
              infrastructure supports your growth.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-1000 hover:bg-white/20 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <Icon className="w-12 h-12 text-orange-400 mb-6" />

                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold group"
          >
            Get Premium Support
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
