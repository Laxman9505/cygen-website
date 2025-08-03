/** @format */

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, TrendingDown, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function ManagedITBenefits() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: TrendingDown,
      title: "Cost Reduction",
      description:
        "Reduce IT costs by up to 40% with our efficient managed services",
      stat: "40%",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security measures protecting your business 24/7",
      stat: "99.9%",
      color: "text-blue-600",
    },
    {
      icon: Clock,
      title: "Faster Response",
      description: "Average response time under 15 minutes for critical issues",
      stat: "15min",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Access to certified IT professionals and specialists",
      stat: "24/7",
      color: "text-purple-600",
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Boost productivity with optimized IT infrastructure",
      stat: "60%",
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
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
              Why Choose Our
              <span className="block text-blue-600">Managed IT Services?</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the benefits of partnering with CYGEN for your managed
              IT needs. Our comprehensive approach delivers measurable results
              and peace of mind.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className={`text-center transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Icon
                      className={`w-12 h-12 mx-auto mb-4 ${benefit.color}`}
                    />
                    <div className={`text-3xl font-bold ${benefit.color} mb-2`}>
                      {benefit.stat}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
