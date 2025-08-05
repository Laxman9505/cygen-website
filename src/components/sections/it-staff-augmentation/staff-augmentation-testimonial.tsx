/** @format */

"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function StaffAugmentationTestimonial() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <Quote className="h-12 w-12 text-orange-500 mb-6" />
            <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
              "IT staffing augmentation isn't just about filling gaps — it's
              about bringing in experts who align with your goals and help you
              succeed. At CYGEN, we make it easy to get the right talent fast,
              so your projects stay on track without all the headaches."
            </blockquote>
            <div>
              <div className="text-lg font-semibold text-white">
                Ivan Shatukha
              </div>
              <div className="text-gray-400">
                Head of Global Delivery at CYGEN
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-2xl blur-xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Ivan Shatukha"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
