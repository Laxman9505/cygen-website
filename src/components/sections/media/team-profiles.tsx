/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function TeamProfiles() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "VENKAT BHASUM",
      title: "MR. VENKAT BHASUM",
      description: "Shaping the future through pioneering innovation",
      fullDescription: "Shaping the future through pioneering innovation",
    },
    {
      name: "MK. SRIVINITA SHARMA",
      title: "MK. SRIVINITA SHARMA",
      description:
        "Striving to bring a change in sme & retail space with tech-assisted solutions",
      fullDescription:
        "Striving to bring a change in sme & retail space with tech-assisted solutions.",
    },
  ];

  const event = {
    title: "EVENT SHOWCASE ICC SYDNEY 2024",
    description:
      "Elevate your restaurant business and efficiency with Cygen POS solutions. Check out our Showcase from Foodservice Australia Event at ICC Sydney.",
    logo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Leadership Team</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`p-8 bg-white shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">
                      {member.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {member.fullDescription}
                </p>

                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-white shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 hover:scale-105">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative">
                <img
                  src={event.logo || "/placeholder.svg"}
                  alt="Foodservice Australia 2024"
                  className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg"></div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {event.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold hover:scale-105 transition-transform duration-300"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
