/** @format */

"use client";

import { BarChart3, PieChart } from "lucide-react";
import { useEffect, useState } from "react";

export function BestTools() {
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

    const element = document.getElementById("best-tools");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="best-tools" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Best data visualization tools and platforms in 2023
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="underline text-orange-400">Innowise</span> uses the
            most advanced and reliable data visualization tools and solutions
            for business needs. They can become an efficient solution for
            visualizing data in different ways depending on your project. Our
            experts favor the following best data visualization tools listed
            below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Tableau */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-6">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-white">Tableau</h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              We use this platform as one of the most in-demand visualization
              programs that can perform in-depth analysis based on large
              databases and can work with multiple integrated sources at once.
            </p>
          </div>

          {/* Microsoft Power BI */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-6">
                <PieChart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                <span className="underline">Microsoft Power BI</span>
              </h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              This is comprehensive software for detailed analysis of business
              results. The package contains the most necessary data
              visualization solutions that can process large data layers into
              convenient charts, tables, and summaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
