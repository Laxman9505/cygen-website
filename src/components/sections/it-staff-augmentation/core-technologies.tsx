/** @format */

"use client";

import {
  Cloud,
  Database,
  Monitor,
  Server,
  Settings,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const techCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Monitor,
    technologies: [],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    technologies: [],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
    technologies: [
      {
        name: "iOS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/1024px-IOS_logo.svg.png",
      },
      {
        name: "Android",
        icon: "https://developer.android.com/static/images/brand/Android_Robot.png",
      },
      {
        name: "Flutter",
        icon: "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
      },
      {
        name: "React Native",
        icon: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecf8c/img/header_logo.svg",
      },
      {
        name: "Xamarin",
        icon: "https://raw.githubusercontent.com/xamarin/xamarin-macios/main/runtime/xamarin.png",
      },
      {
        name: ".NET MAUI",
        icon: "https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2021/11/maui-preview-10-social.png",
      },
    ],
  },
  {
    id: "clouds",
    name: "Clouds",
    icon: Cloud,
    technologies: [],
  },
  {
    id: "erp-crm",
    name: "ERP & CRM",
    icon: Database,
    technologies: [],
  },
  {
    id: "other",
    name: "Other",
    icon: Settings,
    technologies: [],
  },
];

export function CoreTechnologies() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("mobile");
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

  const activeCategoryData =
    techCategories.find((cat) => cat.id === activeCategory) ||
    techCategories[2];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Core Technologies We Work With
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div
            className={`lg:col-span-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-2">
              {techCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white shadow-lg border-l-4 border-orange-500"
                        : "bg-white text-gray-700 hover:bg-gray-100 border-l-4 border-transparent"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 capitalize">
                {activeCategoryData.name}
              </h3>

              {activeCategoryData.technologies.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeCategoryData.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 relative">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-gray-900">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <activeCategoryData.icon className="h-16 w-16 mx-auto" />
                  </div>
                  <p className="text-gray-500">Technologies coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
