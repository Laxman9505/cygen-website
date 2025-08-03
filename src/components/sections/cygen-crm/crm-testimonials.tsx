/** @format */

"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export function CRMTestimonials() {
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

    const element = document.getElementById("crm-testimonials");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "One of the best CRMs I've ever used",
      rating: 4.5,
      source: "Rated 4.5 on Capterra",
    },
    {
      quote: "Everything you need and nothing you don't",
      rating: 4.5,
      source: "Rated 4.5 on GetApp",
    },
    {
      quote: "I couldn't imagine using anything else!",
      rating: 4.5,
      source: "Rated 4.5 on App Store",
    },
  ];

  return (
    <section id="crm-testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 delay-${
                index * 200
              }`}
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-blue-500 fill-current"
                  />
                ))}
                <Star className="w-5 h-5 text-blue-500 fill-current opacity-50" />
              </div>

              {/* Quote */}
              <blockquote className="text-lg font-medium text-gray-900 mb-4">
                "{testimonial.quote}"
              </blockquote>

              {/* Source */}
              <p className="text-sm text-gray-600">{testimonial.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
