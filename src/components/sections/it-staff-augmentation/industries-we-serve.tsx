/** @format */

"use client";

import {
  Building,
  Building2,
  Factory,
  GraduationCap,
  Heart,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const industries = [
  {
    id: "finance",
    name: "Finance",
    icon: Building2,
    title: "Finance, banking, and insurance",
    description:
      "We develop advanced financial tools, from AI-driven risk analysis platforms to blockchain-based payment systems. With IT staff augmentation services, you can scale your team to handle complex workflows and keep data secure.",
    points: [
      "Scale teams for complex financial tools",
      "Streamline workflows for efficiency",
      "Ensure compliance with industry regulations",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "ecommerce",
    name: "eCommerce",
    icon: ShoppingCart,
    title: "eCommerce and retail solutions",
    description:
      "Build scalable eCommerce platforms and retail management systems that drive sales and enhance customer experience.",
    points: [
      "Scalable eCommerce platforms",
      "Customer experience optimization",
      "Inventory management systems",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    title: "Healthcare and medical technology",
    description:
      "Develop secure healthcare applications and medical management systems that improve patient care and operational efficiency.",
    points: [
      "HIPAA compliant solutions",
      "Patient management systems",
      "Medical data analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    title: "Manufacturing and industrial IoT",
    description:
      "Implement smart manufacturing solutions and IoT systems that optimize production and reduce operational costs.",
    points: [
      "Smart manufacturing systems",
      "IoT integration solutions",
      "Production optimization tools",
    ],
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    title: "Logistics and supply chain",
    description:
      "Create efficient logistics platforms and supply chain management systems that streamline operations and reduce costs.",
    points: [
      "Supply chain optimization",
      "Real-time tracking systems",
      "Warehouse management solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building,
    title: "Enterprise solutions",
    description:
      "Develop comprehensive enterprise applications and business management systems for large-scale operations.",
    points: [
      "Enterprise resource planning",
      "Business process automation",
      "Scalable architecture solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    title: "Education technology",
    description:
      "Build innovative educational platforms and learning management systems that enhance the learning experience.",
    points: [
      "Learning management systems",
      "Interactive educational tools",
      "Student performance analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&crop=center",
  },
];

export function IndustriesWeServe() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState("finance");
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

  const activeIndustryData =
    industries.find((industry) => industry.id === activeIndustry) ||
    industries[0];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Industries We Serve
          </h2>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {industry.name}
              </button>
            );
          })}
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              {activeIndustryData.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {activeIndustryData.description}
            </p>
            <ul className="space-y-4">
              {activeIndustryData.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={activeIndustryData.image || "/placeholder.svg"}
                alt={activeIndustryData.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
