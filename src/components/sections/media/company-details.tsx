/** @format */

"use client";

import { Card } from "@/components/ui/card";
import { Briefcase, Building2, Calendar, MapPin, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function CompanyDetails() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const details = [
    {
      label: "LEGAL NAME",
      value: "Cygen IT Consulting and software solutions Pvt Ltd",
      icon: Building2,
      color: "blue",
    },
    {
      label: "HEADQUARTERS",
      value: "Hyderabad, Telangana, India",
      icon: MapPin,
      color: "orange",
    },
    {
      label: "FOUNDING DATE",
      value: "2019",
      icon: Calendar,
      color: "blue",
    },
    {
      label: "NO. OF EMPLOYEES",
      value: "11 to 20",
      icon: Users,
      color: "orange",
    },
    {
      label: "BUSINESS MODEL",
      value: "B2B",
      icon: Briefcase,
      color: "blue",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Company <span className="text-blue-600">Overview</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            const isBlue = detail.color === "blue";

            return (
              <Card
                key={index}
                className={`p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 ${
                        isBlue ? "bg-blue-100" : "bg-orange-100"
                      } rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`h-6 w-6 ${
                          isBlue ? "text-blue-600" : "text-orange-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {detail.label}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                    {detail.value}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info Card */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-orange-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Transforming Retail with Technology
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              CYGEN continues to innovate in the retail technology space,
              providing comprehensive solutions that bridge the gap between
              traditional retail and modern digital commerce. Our platform
              empowers businesses to create seamless omnichannel experiences for
              their customers.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
