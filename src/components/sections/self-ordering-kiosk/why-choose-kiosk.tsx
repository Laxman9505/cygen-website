/** @format */

"use client";

import { Check } from "lucide-react";

const reasons = [
  "Choosing Cygen Kiosk means not just adapting to the future but actively shaping it.",
  "Restaurants equipped with our kiosks see significant improvements in operational efficiency and customer satisfaction.",
  "The analytics capabilities allow for tailored marketing strategies and menu adjustments based on real customer preferences.",
  "Additionally, the contactless nature of our kiosks meets today's health and safety expectations, making them an indispensable tool for any forward-thinking restaurant.",
];

export function WhyChooseKiosk() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurant Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose CYGEN Kiosk?
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
