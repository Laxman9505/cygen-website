/** @format */

"use client";

import { useEffect, useState } from "react";

export function CompanyTimeline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const milestones = [
    {
      title: "Company Incorporation",
      description: "We have launched the concept and started the development.",
      color: "blue",
      icon: "💡",
    },
    {
      title: "Founding Team Hired",
      description:
        "Hired Founding Team at Sydney to drive Asia Pacific Business. Sydney becomes our Hub for product Go To Market and testing with good clients.",
      color: "cyan",
      icon: "📈",
    },
    {
      title: "Product Launch",
      description:
        "Our product launched and successfully running in Sydney with large multi format store.",
      color: "green",
      icon: "⚙️",
    },
    {
      title: "Started Generating Revenue",
      description:
        "We have raised AU$20000 on 1st day of Billing and achieved $100K within 6 months",
      color: "lime",
      icon: "🚀",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 border-blue-200",
      cyan: "bg-cyan-500 border-cyan-200",
      green: "bg-green-500 border-green-200",
      lime: "bg-lime-500 border-lime-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From concept to successful revenue generation - here's how CYGEN has
            evolved
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-cyan-200 via-green-200 to-lime-200 rounded-full"></div>

          {/* Mobile Timeline line - visible only on mobile */}
          <div className="md:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-200 via-cyan-200 via-green-200 to-lime-200 rounded-full"></div>

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 300}ms`,
                }}
              >
                {/* Desktop layout */}
                <div className="hidden md:block">
                  <div className="flex items-center justify-center">
                    {/* Timeline node */}
                    <div
                      className={`absolute w-16 h-16 ${getColorClasses(
                        milestone.color
                      )} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl z-10 hover:scale-110 transition-transform duration-300 animate-pulse`}
                    >
                      {milestone.icon}
                    </div>
                  </div>

                  {/* Content - alternating left and right */}
                  <div className="grid grid-cols-2 gap-8 items-center">
                    <div
                      className={`${
                        index % 2 === 0 ? "text-right pr-16" : "pl-16 order-2"
                      } space-y-4`}
                    >
                      <h3 className="text-2xl font-bold text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Empty space for visual balance */}
                    <div
                      className={`${
                        index % 2 === 0 ? "pl-16" : "pr-16 order-1"
                      }`}
                    >
                      <div className="w-full h-32"></div>
                    </div>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start space-x-4">
                  {/* Timeline node */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${getColorClasses(
                      milestone.color
                    )} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-lg z-10 hover:scale-110 transition-transform duration-300 animate-pulse`}
                  >
                    {milestone.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2 pb-8">
                    <h3 className="text-xl font-bold text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
