/** @format */

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const brandLogos = [
  {
    name: "image-1",
    src: "/images/companies/1.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-2",
    src: "/images/companies/2.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-3",
    src: "/images/companies/3.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-4",
    src: "/images/companies/4.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-5",
    src: "/images/companies/5.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-6",
    src: "/images/companies/6.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-7",
    src: "/images/companies/7.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-8",
    src: "/images/companies/8.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-9",
    src: "/images/companies/9.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-10",
    src: "/images/companies/10.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-11",
    src: "/images/companies/11.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-12",
    src: "/images/companies/12.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-13",
    src: "/images/companies/13.png",
    width: 500,
    height: 100,
  },
  {
    name: "image-14",
    src: "/images/companies/14.png",
    width: 500,
    height: 100,
  },
];

export default function TrustedBy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const topRowLogos = brandLogos.slice(0, 7);
  const bottomRowLogos = brandLogos.slice(7, 14);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl lg:text-3xl font-medium text-gray-500 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Trusted by <span className="text-gray-900 font-bold">25,000+</span>{" "}
            companies from startups to enterprise
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-center justify-center flex-wrap gap-8 lg:gap-12 mb-8 lg:mb-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {topRowLogos.map((logo, index) => (
              <div
                key={logo.name}
                className={`flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={500}
                  height={100}
                  className="h-12 lg:h-16 w-auto object-contain hover:scale-105 transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          <div
            className={`flex items-center justify-center flex-wrap gap-8 lg:gap-12 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {bottomRowLogos.map((logo, index) => (
              <div
                key={logo.name}
                className={`flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={500}
                  height={100}
                  className="h-12 lg:h-16 w-auto object-contain hover:scale-105 transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
