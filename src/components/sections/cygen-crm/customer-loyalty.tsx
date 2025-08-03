/** @format */

"use client";

import { useEffect, useState } from "react";

export function CustomerLoyalty() {
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

    const element = document.getElementById("customer-loyalty");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="customer-loyalty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Boost customer <span className="text-blue-600">loyalty</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              By storing everything you know about your customers you understand
              them deeply, and make every interaction more personal.
            </p>
          </div>

          {/* CRM Dashboard Mockup */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Sales Pipeline
                    </h3>
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                {/* Pipeline Columns */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 mb-2">New</h4>
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-full h-8 bg-blue-100 rounded-lg flex items-center px-3"
                          >
                            <div
                              className={`w-4 h-4 rounded-full mr-2 ${
                                i === 1
                                  ? "bg-blue-500"
                                  : i === 2
                                  ? "bg-orange-500"
                                  : i === 3
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              }`}
                            ></div>
                            <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Qualified
                      </h4>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-full h-8 bg-orange-100 rounded-lg flex items-center px-3"
                          >
                            <div
                              className={`w-4 h-4 rounded-full mr-2 ${
                                i === 1
                                  ? "bg-red-500"
                                  : i === 2
                                  ? "bg-pink-500"
                                  : "bg-purple-500"
                              }`}
                            ></div>
                            <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Proposal
                      </h4>
                      <div className="space-y-2">
                        {[1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-full h-8 bg-green-100 rounded-lg flex items-center px-3"
                          >
                            <div
                              className={`w-4 h-4 rounded-full mr-2 ${
                                i === 1 ? "bg-pink-500" : "bg-green-500"
                              }`}
                            ></div>
                            <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Deal Card */}
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-4 shadow-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        B
                      </div>
                      <div className="ml-3">
                        <h5 className="font-semibold text-gray-900">
                          Branding Identity
                        </h5>
                        <p className="text-sm text-gray-600">for BioMax Labs</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">New (50%)</span>
                      <span className="font-semibold text-gray-900">
                        Expected Value $9500
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
