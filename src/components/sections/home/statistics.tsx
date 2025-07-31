/** @format */

"use client";

import { useEffect, useState } from "react";

export default function Statistics() {
  const [counts, setCounts] = useState({ teams: 0, customers: 0, hours: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("statistics-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        teams: Math.floor(24 * progress),
        customers: Math.floor(38 * progress),
        hours: Math.floor(24 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({ teams: 24, customers: 38, hours: 24 });
      }
    }, stepDuration);
  };

  return (
    <section id="statistics-section" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="animate-fade-in-up">
            <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4 animate-bounce-in">
              {counts.teams}+
            </div>
            <p className="text-gray-300 text-lg animate-slide-in-up animation-delay-200">
              Loved by 24+ Team Members
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <div className="text-5xl lg:text-6xl font-bold text-teal-400 mb-4 animate-bounce-in animation-delay-300">
              {counts.customers}+
            </div>
            <p className="text-gray-300 text-lg animate-slide-in-up animation-delay-400">
              Trusted by 38+ customers
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <div className="text-5xl lg:text-6xl font-bold text-orange-400 mb-4 animate-bounce-in animation-delay-600">
              {counts.hours} hrs
            </div>
            <p className="text-gray-300 text-lg animate-slide-in-up animation-delay-600">
              We are available 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
