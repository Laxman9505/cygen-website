/** @format */

"use client";

import {
  BarChart3,
  DollarSign,
  Shield,
  ShoppingCart,
  Target,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Streamlined Ordering",
    description:
      "Quick and easy self-service to expedite the ordering process.",
    color: "blue",
  },
  {
    icon: DollarSign,
    title: "Increased Sales",
    description:
      "Intelligent upselling of add-ons and promotions to enhance revenue.",
    color: "blue",
  },
  {
    icon: Target,
    title: "Enhanced Accuracy",
    description: "Self-input by customers reduces order mistakes",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Improved Efficiency",
    description: "Allows staff to focus on food quality and customer service.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Valuable Analytics",
    description: "Provides actionable insights from customer order data.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Health & Safety",
    description:
      "Supports a contactless ordering system to maintain hygiene standards.",
    color: "blue",
  },
];

export function KioskKeyFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Features of CYGEN Kiosk
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CYGEN Kiosk"
                className="w-64 h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-8">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
