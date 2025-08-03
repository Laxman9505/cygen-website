/** @format */

"use client";

import { useEffect, useState } from "react";

export function DataVisualizationIntro() {
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

    const element = document.getElementById("data-viz-intro");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="data-viz-intro" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Data visualization services
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Innowise has assisted clients from different countries for more than{" "}
            <span className="font-semibold text-blue-600">18+ years</span>. Our
            teams of experts have implemented more than{" "}
            <span className="font-semibold text-blue-600">
              1300+ successful projects
            </span>
            , including data analytics and visualization Comment end services.
            Innowise's data engineers skillfully take advantage of diverse data
            visualization tools in order to determine market trends and assess
            business
          </p>
        </div>
      </div>
    </section>
  );
}
