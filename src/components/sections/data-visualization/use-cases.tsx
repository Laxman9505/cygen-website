/** @format */

"use client";

import { DollarSign, Settings, Target, TrendingUp, Truck } from "lucide-react";
import { useEffect, useState } from "react";

export function UseCases() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("use-cases");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const useCases = [
    {
      title: "Enterprise performance",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Manufacturing",
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Supply chain",
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Marketing and sales",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Financials",
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Data visualization use cases
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For the productive work of a company, it is important to know the
            overall picture of production, finances, and much more. That's why
            Innowise offers to collect the information in a single piece,
            visualize each point, and then highlight strengths or weaknesses of
            a business. The main data visualization benefits for business
            include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`group transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
