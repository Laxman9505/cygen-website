/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MissionOverview() {
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
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-8 mx-auto leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Creating Technology Solutions That
            <br className="hidden sm:block" />
            Enable Business To Get The Goals
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-96 lg:h-96 mx-auto">
                <div
                  className={`w-full h-full bg-blue-100 relative overflow-hidden transition-all duration-1000 delay-500 ${
                    isVisible ? "scale-100 rotate-0" : "scale-90 -rotate-6"
                  }`}
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center"
                    alt="Professional working on laptop"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div
                  className={`absolute top-8 sm:top-16 left-2 sm:left-8 bg-teal-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg transition-all duration-1000 delay-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0 animate-float"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  Easy of Integration
                </div>

                <div
                  className={`absolute bottom-12 sm:bottom-20 right-2 sm:right-8 bg-orange-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg transition-all duration-1000 delay-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0 animate-float"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ animationDelay: "1s" }}
                >
                  Relocation contracts
                </div>
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className={`flex items-start space-x-4 hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 transition-all duration-500 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                1
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Cygen empowers Australian businesses with reliable, tailored
                  IT solutions in Cloud, AI, Cybersecurity, and Digital services
                  to drive innovation and growth.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start space-x-4 hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 transition-all duration-500 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
                style={{ transitionDelay: "1100ms" }}
              >
                2
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Values
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Innovation, reliability, agility, integrity, security, local
                  expertise, collaboration, and customer focus define Cygen's
                  future-ready IT solutions.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start space-x-4 hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 transition-all duration-500 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
                style={{ transitionDelay: "1300ms" }}
              >
                3
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Why Cygen..?
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                  Cygen offers reliable, innovative, and tailored IT solutions
                  with local expertise to empower Australian business growth.
                </p>

                <div
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "1400ms" }}
                >
                  <Link href="/enquiry">
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full group hover:scale-105 transition-all duration-300 bg-transparent text-sm sm:text-base"
                    >
                      Book A Call
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
