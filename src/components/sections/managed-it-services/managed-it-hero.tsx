/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ManagedITHero() {
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
      className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12 sm:py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10">
        <div className="grid grid-cols-6 gap-4 pr-8">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-orange-500 rounded-full transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Transform Your
              <br />
              Business with
              <br />
              <span className="text-blue-600">Managed IT</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Comprehensive IT management solutions designed to optimize your
              operations, enhance security, and drive growth. From 24/7
              monitoring and support to strategic technology planning, we handle
              your IT while you focus on your business goals.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-full group hover:scale-105 transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-full group hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Schedule Consultation
              </Button>
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
                  className={`absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-500 transition-all duration-1000 delay-500 ${
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
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop&crop=center"
                    alt="IT professionals managing network infrastructure"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute top-12 sm:top-16 left-12 sm:left-16 bg-green-500 bg-opacity-90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs font-medium shadow-md transition-all duration-1000 delay-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0 animate-float"
                        : "opacity-0 -translate-y-4"
                    }`}
                  >
                    24/7 Support
                  </div>

                  <div
                    className={`absolute top-20 sm:top-24 right-12 sm:right-16 bg-blue-500 bg-opacity-90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs font-medium shadow-md transition-all duration-1000 delay-1200 ${
                      isVisible
                        ? "opacity-100 translate-y-0 animate-float"
                        : "opacity-0 -translate-y-4"
                    }`}
                    style={{ animationDelay: "1s" }}
                  >
                    Proactive Monitoring
                  </div>

                  <div
                    className={`absolute bottom-20 sm:bottom-24 left-12 sm:left-16 bg-orange-500 bg-opacity-90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs font-medium shadow-md transition-all duration-1000 delay-1400 ${
                      isVisible
                        ? "opacity-100 translate-y-0 animate-float"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ animationDelay: "1.5s" }}
                  >
                    Security First
                  </div>

                  <div
                    className={`absolute bottom-12 sm:bottom-16 right-12 sm:right-16 bg-purple-500 bg-opacity-90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs font-medium shadow-md transition-all duration-1000 delay-1600 ${
                      isVisible
                        ? "opacity-100 translate-y-0 animate-float"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ animationDelay: "2s" }}
                  >
                    Expert Team
                  </div>
                </div>
              </div>

              <div
                className={`absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center transition-all duration-1000 delay-1000 shadow-md ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>

              <div
                className={`absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-all duration-1000 delay-1200 shadow-md ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: "1s" }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
