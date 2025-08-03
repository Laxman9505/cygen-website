/** @format */

"use client";

import { Check } from "lucide-react";

const benefits = [
  "Embrace innovation and enhance your restaurant's efficiency with Cygen Kiosk.",
  "Designed for dynamic dining environments, our state-of-the-art kiosks offer a seamless interface for customers to interact, order, and enjoy their meals with unparalleled convenience.",
  "Dive into the details and discover why CYGEN Kiosk is an essential upgrade for any modern restaurant.",
];

export function ExperienceFuture() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Restaurant Staff Using Technology"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Experience the Future of Dining with{" "}
              <span className="text-blue-600">CYGEN Kiosk</span>
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
