/** @format */

"use client";

import { useEffect, useState } from "react";

export function WinMoreBusiness() {
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

    const element = document.getElementById("win-more-business");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const users = [
    { name: "Jennifer Kim", progress: 85, color: "bg-orange-400" },
    { name: "Scott Williams", progress: 60, color: "bg-orange-400" },
    { name: "Rebecca Spencer", progress: 40, color: "bg-orange-400" },
    { name: "Stephanie Crawford", progress: 75, color: "bg-blue-400" },
  ];

  const activities = [
    { type: "Note", color: "bg-yellow-400" },
    { type: "Meeting", color: "bg-yellow-400" },
    { type: "Call", color: "bg-green-400" },
    { type: "Task Completed", color: "bg-blue-400" },
    { type: "Email Sent", color: "bg-blue-400" },
  ];

  return (
    <section id="win-more-business" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Reports Dashboard Mockup */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Reports
                    </h3>
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Left Side - Report List */}
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded"></div>
                      ))}
                    </div>

                    {/* Right Side - Chart */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-4">
                        Completed by User
                      </h4>
                      <div className="space-y-3">
                        {users.map((user, index) => (
                          <div key={index}>
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                              <span>{user.name}</span>
                              <span>{user.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`${
                                  user.color
                                } h-2 rounded-full transition-all duration-1000 delay-${
                                  index * 200
                                }`}
                                style={{
                                  width: isVisible ? `${user.progress}%` : "0%",
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Activity Legend */}
                  <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {activities.map((activity, index) => (
                        <div key={index} className="flex items-center text-xs">
                          <div
                            className={`w-3 h-3 ${activity.color} rounded mr-2`}
                          ></div>
                          <span className="text-gray-700">{activity.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Win more <span className="text-orange-500">business</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Keep track of all your opportunities with our visual sales
              pipeline. Easily see who needs attention and the deals about to
              land.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
