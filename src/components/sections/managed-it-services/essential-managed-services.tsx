/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Star } from "lucide-react";
import { useEffect, useState } from "react";

export function EssentialManagedServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const plans = [
    {
      name: "Essential",
      price: "$99",
      period: "/month",
      description:
        "Perfect for small businesses getting started with managed IT",
      features: [
        "24/7 network monitoring",
        "Basic security management",
        "Email support",
        "Monthly reporting",
        "Software updates",
        "Basic backup services",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Comprehensive IT management for growing businesses",
      features: [
        "Everything in Essential",
        "Proactive maintenance",
        "Phone & email support",
        "Advanced security",
        "Cloud backup & recovery",
        "Performance optimization",
        "Compliance management",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "Full-scale IT management for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Strategic IT planning",
        "24/7 phone support",
      ],
      popular: false,
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
              Essential Managed
              <span className="block text-blue-600">Service Plans</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect managed IT service plan for your business. All
              plans include our core services with scalable options to meet your
              specific needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-1000 hover:shadow-2xl ${
                plan.popular
                  ? "border-2 border-orange-500 scale-105"
                  : "border border-gray-200"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-lg font-semibold group ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We can create a tailored plan for your
            specific requirements.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
