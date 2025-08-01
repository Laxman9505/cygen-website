/** @format */

"use client";

import { AlertTriangle, Eye, Shield } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CybersecurityHero() {
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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-teal-400 rounded-full animate-pulse animation-delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-orange-400 rounded-full animate-pulse animation-delay-1000" />

        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
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
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Detect, Monitor And
              <br />
              <span className="text-blue-400">Protect Against</span>
              <br />
              The Unseen
            </h1>

            <p
              className={`text-xl text-gray-900 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Uncover data leaks, detect stolen credentials, and stay ahead of
              cybercriminals with actionable intelligence from the dark web.
            </p>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative max-w-lg mx-auto">
              <div className="relative w-96 h-96 mx-auto">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-1000 delay-500 ${
                    isVisible ? "scale-100 rotate-0" : "scale-90 rotate-6"
                  }`}
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />

                <div
                  className={`absolute inset-2 bg-gray-900 overflow-hidden transition-all duration-1000 delay-700 ${
                    isVisible ? "scale-100 rotate-0" : "scale-95 -rotate-3"
                  }`}
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src="/images/cyber-security/hero.png"
                    alt="Cybersecurity threat detection and monitoring"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute top-16 left-16 bg-red-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-1000 delay-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0 animate-float"
                        : "opacity-0 -translate-y-4"
                    }`}
                  >
                    Threat Detected
                  </div>

                  <div
                    className={`absolute top-24 right-16 bg-orange-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-1000 delay-1200 ${
                      isVisible
                        ? "opacity-100 translate-y-0 animate-float"
                        : "opacity-0 -translate-y-4"
                    }`}
                    style={{ animationDelay: "1s" }}
                  >
                    Dark Web Scan
                  </div>

                  <div
                    className={`absolute bottom-24 left-16 bg-green-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-1000 delay-1400 ${
                      isVisible
                        ? "opacity-100 translate-y-0 animate-float"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ animationDelay: "1.5s" }}
                  >
                    Protected
                  </div>

                  <div
                    className={`absolute bottom-16 right-16 bg-blue-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-1000 delay-1600 ${
                      isVisible
                        ? "opacity-100 translate-y-0 animate-float"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ animationDelay: "2s" }}
                  >
                    24/7 Monitor
                  </div>
                </div>
              </div>

              <div
                className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center transition-all duration-1000 delay-1000 shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>

              <div
                className={`absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center transition-all duration-1000 delay-1200 shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: "1s" }}
              >
                <Shield className="h-10 w-10 text-white" />
              </div>

              <div
                className={`absolute top-1/2 -left-10 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center transition-all duration-1000 delay-900 shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-x-0 animate-float"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ animationDelay: "0.5s" }}
              >
                <Eye className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
