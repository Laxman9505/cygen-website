/** @format */

"use client";

import { Eye, Search } from "lucide-react";
import { useEffect, useState } from "react";

export function VisualizationTools() {
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

    const element = document.getElementById("visualization-tools");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="visualization-tools" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Qlik Sense */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <Search className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-white">Qlik Sense</h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Data engineers at Innowise consider Qlik Sense indispensable for
              rapidly creating workflows with large volumes of information,
              which can turn them into interactive panels, dashboards, and all
              kinds of reports.
            </p>
          </div>

          {/* Looker */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-white">Looker</h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              This handy platform enables users to customize visual
              representations of data based on their interests. Looker also
              provides access to an extensive library of different types of
              visual representations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
