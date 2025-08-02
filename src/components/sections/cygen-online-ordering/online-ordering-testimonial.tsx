"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

export default function OnlineOrderingTestimonial() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Used by Hundreds of Cafes, Takeaways, and Retail Outlets Across Australia
          </h2>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-md p-8 lg:p-12 border border-white/20">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Savings Badge */}
              <div className="absolute -top-6 right-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-md">
                <div className="text-center">
                  <div className="font-bold text-lg">$1,200/month</div>
                  <div className="text-xs opacity-90">Saved</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center mt-4">
                {/* Author Image */}
                <div className="lg:col-span-1 text-center">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=128&h=128&fit=crop&crop=face"
                        alt="Nisha G."
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center items-center mt-4 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                    "We switched from 3 different platforms to CYGEN Online Ordering. Saved over $1,200/month and our
                    regulars love the branded experience."
                  </blockquote>

                  <div className="space-y-1">
                    <div className="font-bold text-xl text-gray-900">Nisha G.</div>
                    <div className="text-gray-600">Café Owner</div>
                    <div className="text-orange-600 font-medium">VIC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
