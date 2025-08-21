/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AppDevelopmentHero() {
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
      className="bg-pink-50 py-8 sm:py-10 lg:py-16 relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="grid grid-cols-6 gap-4 pr-8">
          {Array.from({ length: 36 }).map((_, i) => (
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
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-9xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="w-full text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Experts in developing custom Applications
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Learn how developing custom software may boost
              <br className="hidden sm:block" />
              productivity and support business growth.
            </p>

            <div
              className={`flex items-start space-x-3 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Our area of expertise is assisting businesses looking for
                cutting-edge,
                <br className="hidden sm:block" />
                efficient software solutions.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link href="/enquiry">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg rounded-full group hover:scale-105 transition-all duration-300">
                  Book a Free Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative max-w-lg mx-auto">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                <div
                  className={`absolute inset-0 bg-blue-500 transition-all duration-1000 delay-500 ${
                    isVisible ? "scale-100 rotate-0" : "scale-90 rotate-6"
                  }`}
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />

                <div
                  className={`absolute inset-2 bg-white overflow-hidden transition-all duration-1000 delay-700 ${
                    isVisible ? "scale-100 rotate-0" : "scale-95 -rotate-3"
                  }`}
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src="/images/app-development/app-development-hero.jpg"
                    alt="Professional woman working with laptop and coffee"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              <div
                className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-1000 delay-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full"></div>
              </div>

              <div
                className={`absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center transition-all duration-1000 delay-1200 ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: "1s" }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-full"></div>
              </div>

              <div
                className={`absolute top-1/2 -left-6 sm:-left-8 w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center transition-all duration-1000 delay-900 ${
                  isVisible
                    ? "opacity-100 translate-x-0 animate-float"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
