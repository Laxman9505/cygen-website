/** @format */

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const brandLogos = [
  {
    name: "Shopify",
    src: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png",
    width: 120,
    height: 40,
  },
  {
    name: "Klarna",
    src: "https://logos-world.net/wp-content/uploads/2021/02/Klarna-Logo.png",
    width: 100,
    height: 40,
  },
  {
    name: "Reddit",
    src: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png",
    width: 100,
    height: 40,
  },
  {
    name: "Nike",
    src: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
    width: 80,
    height: 40,
  },
  {
    name: "Zapier",
    src: "https://logos-world.net/wp-content/uploads/2021/02/Zapier-Logo.png",
    width: 100,
    height: 40,
  },
  {
    name: "Nubank",
    src: "https://logos-world.net/wp-content/uploads/2021/02/Nubank-Logo.png",
    width: 60,
    height: 40,
  },
  {
    name: "Spotify",
    src: "https://logos-world.net/wp-content/uploads/2020/06/Spotify-Logo.png",
    width: 100,
    height: 40,
  },
  {
    name: "Revolut",
    src: "https://logos-world.net/wp-content/uploads/2021/02/Revolut-Logo.png",
    width: 120,
    height: 40,
  },
  {
    name: "Forever 21",
    src: "https://logos-world.net/wp-content/uploads/2020/09/Forever-21-Logo.png",
    width: 100,
    height: 40,
  },
  {
    name: "Red Bull",
    src: "https://logos-world.net/wp-content/uploads/2020/09/Red-Bull-Logo.png",
    width: 100,
    height: 40,
  },
  {
    name: "Calvin Klein",
    src: "https://logos-world.net/wp-content/uploads/2020/04/Calvin-Klein-Logo.png",
    width: 120,
    height: 40,
  },
  {
    name: "Intercom",
    src: "https://logos-world.net/wp-content/uploads/2021/02/Intercom-Logo.png",
    width: 100,
    height: 40,
  },
  {
    name: "Hermès",
    src: "https://logos-world.net/wp-content/uploads/2020/04/Hermes-Logo.png",
    width: 100,
    height: 40,
  },
  {
    name: "HelloFresh",
    src: "https://logos-world.net/wp-content/uploads/2020/11/HelloFresh-Logo.png",
    width: 120,
    height: 40,
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
                  width={logo.width}
                  height={logo.height}
                  className="h-8 lg:h-10 w-auto object-contain hover:scale-105 transition-all duration-300 opacity-80 hover:opacity-100"
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
                  width={logo.width}
                  height={logo.height}
                  className="h-8 lg:h-10 w-auto object-contain hover:scale-105 transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
