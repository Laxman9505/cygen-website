/** @format */

"use client";

import { useEffect, useState } from "react";

export function CompanyStory() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Retail POS System"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-orange-600/10"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our <span className="text-blue-600">Founding Story</span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
            </div>

            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p>
                CYGEN is a SaaS enabled digital transformation mobile ready
                platform provider for retail business that allows retail
                businesses to set up an online store driven by VR & AR
                technologies integrated with POS to sell their products in
                person and create an Omni channel experience.
              </p>

              <p>
                CYGEN started over a year ago when its founder Srivinita MK
                wanted to buy Indian traditional clothing at Sydney, Australia.
                From a retail store, she prefers to try and match to buy online
                as it's a gift, but there are no such options. She further tries
                to review in Indian market to see if she can check if any nearby
                retailers offers try and buy methods of buying online, quickly
                realized it was incredibly challenging to buy or sell any
                products online without an easy to use VR ready ecommerce
                platform.
              </p>

              <p>
                Very less shops have digital presence but few of them connect
                with consumers online and provide such experience. So, she
                decided to create a digital platform enabler for mom and pop
                stores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
