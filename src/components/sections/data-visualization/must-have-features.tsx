/** @format */

"use client";

import { BarChart3, Filter } from "lucide-react";
import { useEffect, useState } from "react";

export function MustHaveFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("must-have-features");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="must-have-features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Data visualization solutions: must-have features
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Dashboards and reports customization */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                alt="Dashboard customization"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-500/20 rounded-2xl"></div>
              <div className="absolute top-4 left-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dashboards and reports customization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The platforms offered by the Innowise are able to adjust to any of
              your needs. You can customize styles of charts, widgets, elements,
              and much more due to special libraries with thousands of settings,
              including the dashboards.
            </p>
          </div>

          {/* Data filtration */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                alt="Data filtration"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20 rounded-2xl"></div>
              <div className="absolute top-4 left-4">
                <Filter className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Data filtration
            </h3>
            <p className="text-gray-600 leading-relaxed">
              One of the key features is that you can customize filters in
              different platforms to get the right datasets for analytics.
              Subsequently, they will be able to cleanse, collect, record, and
              redirect data from different sources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
