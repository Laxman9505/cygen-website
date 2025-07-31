/** @format */

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const products = [
  {
    title: "CRM",
    description:
      "Cygen CRM platform developed with a unique approach to working in the disability care sector.",
    bgColor: "bg-white",
    textColor: "text-dark",
  },
  {
    title: "LMS",
    description:
      "Cygen's LMS is an enterprise learning management system created to serve the most complex and intricate learning ecosystems.",
    bgColor: "bg-blue-600",
    textColor: "text-white",
    featured: true,
  },
  {
    title: "POS",
    description:
      "Thanks to the Hospitality POS solution that makes your life uncomplicated.",
    bgColor: "bg-white",
    textColor: "text-dark",
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-down">
            Take your business
            <br />
            to the next level.
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto animate-fade-in-up animation-delay-300">
          <div className="flex items-center justify-center space-x-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-all duration-500 hover:shadow-xl ${
                  index === currentIndex
                    ? `${product.bgColor} ${product.textColor} scale-105 shadow-xl min-w-[400px] animate-pulse-subtle`
                    : "bg-white text-dark scale-95 opacity-60 min-w-[300px] hover:opacity-80 hover:scale-100"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 animate-slide-in-left">
                  {product.title}
                </h3>
                <p className="leading-relaxed animate-slide-in-left animation-delay-200">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4 animate-fade-in animation-delay-600">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
