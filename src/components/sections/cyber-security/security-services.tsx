/** @format */

"use client";

import { Globe, Search, Server, Smartphone, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const securityServices = [
  {
    icon: Search,
    title: "Vulnerability Assessment",
    description:
      "Identify and analyze system weaknesses before they become threats. Our comprehensive assessments strengthen defenses, ensuring your digital assets stay secure against evolving cyber risks.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    icon: Target,
    title: "Penetration Testing",
    description:
      "Penetration Testing simulates real-world cyber-attacks to uncover system vulnerabilities. Our experts use advanced techniques to find security gaps, offering actionable insights to enhance your defenses.",
    color: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
  },
  {
    icon: Globe,
    title: "Web App Security Assessment",
    description:
      "Safeguard your web applications with our advanced security solutions. Our expert team identifies, mitigates, and resolves vulnerabilities, delivering seamless protection for your entire digital ecosystem.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    borderColor: "border-teal-200",
  },
  {
    icon: Smartphone,
    title: "Mobile App Security Assessment",
    description:
      "Mobile applications are secure with comprehensive vulnerability assessments. Our experts address security gaps, protecting your apps from cyber threats and providing peace of mind for your users.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
  },
  {
    icon: Server,
    title: "Infrastructure VAPT",
    description:
      "Keep your IT infrastructure secure with Protexo's Vulnerability Assessment and Penetration Testing. Our experts identify and resolve vulnerabilities in your network, servers, and systems, ensuring robust IT security.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
  },
];

export default function SecurityServices() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Security Services For A Safer Digital Future
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Protect every layer of your business with targeted services designed
            to uncover vulnerabilities
            <br />
            and secure your defenses against evolving cyber threats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {securityServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group border-2 ${
                service.borderColor
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
