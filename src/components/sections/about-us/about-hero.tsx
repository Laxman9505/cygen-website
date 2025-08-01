/** @format */

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutHero() {
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
      className="bg-pink-50 py-16 lg:py-16 relative overflow-hidden"
    >
      <div className="absolute left-0 top-1/4 opacity-10">
        <div className="grid grid-cols-4 gap-4 pl-8">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-blue-500 rounded-full transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-6">
              <span
                className={`inline-block text-blue-600 font-semibold text-lg mb-4 transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                About Us
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Creating technology
                <br />
                solutions that enable
                <br />
                <span className="text-blue-600">business to get the goals</span>
              </h1>
            </div>

            <p
              className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              At Cygen, we're passionate about transforming businesses through
              innovative technology solutions. Our Australian-owned company
              combines world-class expertise with local understanding to deliver
              exceptional results.
            </p>

            {/* <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full group hover:scale-105 transition-all duration-300">
                Learn More About Our Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div> */}
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/about-us.png"
                alt="Business professionals analyzing data and charts"
                width={600}
                height={400}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />

              <div
                className={`absolute top-8 right-8 bg-white bg-opacity-95 backdrop-blur-sm p-4 rounded-2xl shadow-lg transition-all duration-1000 delay-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>

              <div
                className={`absolute bottom-8 left-8 bg-white bg-opacity-95 backdrop-blur-sm p-4 rounded-2xl shadow-lg transition-all duration-1000 delay-1200 ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: "1s" }}
              >
                <div className="text-2xl font-bold text-teal-600">100%</div>
                <div className="text-sm text-gray-600">Australian Owned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
