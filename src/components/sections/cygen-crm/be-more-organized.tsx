/** @format */

"use client";

import { useEffect, useState } from "react";

export function BeMoreOrganized() {
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

    const element = document.getElementById("be-more-organized");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contacts = [
    { name: "AutoFlow", color: "bg-blue-500" },
    { name: "David Korvessi", color: "bg-orange-500" },
    { name: "John Nathal", color: "bg-green-500" },
    { name: "Video Vine", color: "bg-red-500" },
    { name: "Fiona Smith", color: "bg-purple-500" },
    { name: "Kate Bucket", color: "bg-pink-500" },
  ];

  return (
    <section id="be-more-organized" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CYGEN CRM will help you to —
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CRM Interface Mockup */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      People & Organizations
                    </h3>
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                </div>

                {/* Table Header */}
                <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-700">
                    <span>Summary</span>
                    <span>Email</span>
                    <span>Phone</span>
                    <span>Location</span>
                    <span>Tags</span>
                  </div>
                </div>

                {/* Contact Rows */}
                <div className="divide-y divide-gray-200">
                  {contacts.map((contact, index) => (
                    <div
                      key={index}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 ${contact.color} rounded-full flex items-center justify-center text-white text-sm font-bold mr-3`}
                          >
                            {contact.name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {contact.name}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="flex space-x-1">
                          <div className="w-6 h-4 bg-gray-200 rounded"></div>
                          <div className="w-6 h-4 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))}
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
              Be more <span className="text-blue-600">organized</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              With one view of your customer, see what you need to do to nurture
              the relationship and get reminders if you ever forget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
