/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function MediaHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100 rounded-full opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-bounce">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Media & Press
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Cygen IT Consulting</span>
                <br />
                <span className="text-gray-800">and Software Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Cygen IT Consulting and Software Solutions is an online retail
                business enabler.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
                E-commerce
              </span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
                SaaS
              </span>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Read Our Story
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CYGEN Team Working"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">YOUR</div>
                <div className="text-2xl font-bold text-orange-600">STORY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
