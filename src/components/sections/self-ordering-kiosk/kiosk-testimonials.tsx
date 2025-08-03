/** @format */

"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Thanks to CYGEN, our retail store runs like a well-oiled machine! From smooth transactions to top-notch support, they've exceeded our expectations.",
    company: "Mantra Bazar",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Effortlessly efficient and customer-friendly, CYGEN has transformed our retail operations. Seamless transactions and stellar support make them our top choice!",
    company: "Indianemporium",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Switching to CYGEN was a game-changer for our store! Seamless transactions, inventory management, and excellent support. Highly recommend!",
    company: "Spicebasket",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function KioskTestimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Appreciative Customer Mentions
          </h2>
          <p className="text-xl text-blue-100">
            Trusted by Industry Leaders, Fueled by CYGEN POS - Australia's
            Premier POS Solution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="text-6xl text-blue-600 mb-4 font-serif">"</div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.logo || "/placeholder.svg"}
                  alt={testimonial.company}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.company}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
