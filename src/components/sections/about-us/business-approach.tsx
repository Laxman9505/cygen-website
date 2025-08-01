/** @format */

"use client";

import { useEffect, useRef, useState } from "react";

export default function BusinessApproach() {
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
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.9)), url('/images/about-us/business-approach.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className={`text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our Approach to Business Engagement
          </h2>

          <div
            className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              By utilising our subject experience and dependable software
              development services, we assist organisations in increasing their
              revenue. Our{" "}
              <span className="font-semibold text-teal-300">
                adaptable business models
              </span>{" "}
              let our customers in a variety of industry verticals make the{" "}
              <span className="font-semibold text-teal-300">best decision</span>{" "}
              for their needs and run their businesses successfully.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white rounded-full animate-pulse animation-delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-white rounded-full animate-pulse animation-delay-1000" />
      </div>
    </section>
  );
}
