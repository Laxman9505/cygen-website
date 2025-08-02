"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

export default function CygnageTestimonial() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Client Testimonial
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Background Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center"
                alt="Happy business team"
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-900/80"></div>

              {/* Testimonial Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-3xl">
                  <Quote className="w-12 h-12 text-white/80 mx-auto mb-6" />

                  <blockquote className="text-xl lg:text-2xl text-white font-medium mb-8 leading-relaxed">
                    "The live menu sync has been a game-changer — no more price mismatches. And we're saving hundreds
                    every month on printing."
                  </blockquote>

                  {/* Stars */}
                  <div className="flex items-center justify-center mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                        alt="Nickolas Jaber"
                        width={60}
                        height={60}
                        className="w-15 h-15 rounded-full object-cover border-3 border-white"
                      />
                    </div>
                    <div className="ml-4 text-left">
                      <div className="font-semibold text-white">Nickolas Jaber</div>
                      <div className="text-white/80">Franchise Ops, NSW</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-2xl shadow-md">
                <div className="text-center">
                  <div className="font-bold">Hundreds Saved</div>
                  <div className="text-xs opacity-90">Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
