/** @format */

"use client";

import {
  Cloud,
  Eye,
  Globe,
  HardDrive,
  Monitor,
  Network,
  Server,
  Settings,
  Trophy,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const cloudServices = [
  {
    icon: Cloud,
    title: "Cloud Services & Solutions",
    description:
      "Whether you're looking at a public, private or hybrid cloud solution, we will ensure you can access files and applications, anytime & anywhere.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
  {
    icon: Globe,
    title: "Managed Network",
    description:
      "We assess, design and deliver fully optimised and secure network infrastructure so you can rely on it when your business needs it most.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
  {
    icon: Server,
    title: "Hardware & Software",
    description:
      "Our team can advise on and deliver the right hardware and software to ensure your business is streamlined and running at its best.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    description:
      "Safeguard your business data with expert advice from us; we'll find you the best backup and data recovery solution or service.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
  {
    icon: Network,
    title: "Managed IT Services",
    description:
      "Managed IT services better support your internal team and ensure you have the technical expertise to supplement your in-house resources.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
  {
    icon: Settings,
    title: "Consulting Services",
    description:
      "Our consultancy services will give you maximum value as we tailor a solution that fits your requirements and empowers you to achieve your business goals.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
  {
    icon: Trophy,
    title: "Modern Workplace",
    description:
      "The Missing Link's modern workplace solutions blend technology with human resources to enhance communication and collaboration, improve productivity and increase staff loyalty.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
  {
    icon: Eye,
    title: "IT Procurement",
    description:
      "Remove the risks and challenges from purchasing and updating IT infrastructure, vendor and contract management.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
  {
    icon: Monitor,
    title: "IT Support",
    description:
      "Expert guidance and support for all your information technology needs. A holistic approach to IT management.",
    color: "text-white",
    bgColor: "bg-teal-500",
  },
];

export default function CloudServicesGrid() {
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Comprehensive Cloud & IT Solutions
          </h2>
          <p
            className={`text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            From cloud migration to managed services, we provide end-to-end IT
            solutions
            <br className="hidden sm:block" />
            tailored to your business needs and growth objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {cloudServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${service.bgColor} p-6 sm:p-8 text-center`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
                  <service.icon
                    className={`h-8 w-8 sm:h-12 sm:w-12 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center mb-4 sm:mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
