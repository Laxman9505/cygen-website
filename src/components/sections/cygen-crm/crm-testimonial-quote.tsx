/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

export function CRMTestimonialQuote() {
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

    const element = document.getElementById("crm-testimonial-quote");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="crm-testimonial-quote"
      className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote Icon */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Quote className="w-16 h-16 text-orange-400 mx-auto mb-8" />
        </div>

        {/* Testimonial */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
            "CYGEN CRM is so much more than just a great CRM - you can also keep
            on top of your pipeline and manage your client work - giving your
            leads the best chance possible of converting to sales, and your
            clients great customer service."
          </blockquote>

          <div className="mb-12">
            <p className="text-xl text-blue-100 font-semibold">Julia Blake</p>
            <p className="text-blue-200">Blake Consultants</p>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
