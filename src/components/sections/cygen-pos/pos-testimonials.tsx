"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "We switched to CYGEN POS across our 6 stores and saw smoother operations from day one. Easy to train staff and great local support!",
    author: "Café Group Owner",
    location: "NSW",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "CYGEN POS + CONNECT helped me reduce my wage leakages while giving me a clear view of my daily sales. Highly recommend!",
    author: "Retail Franchise Partner",
    location: "VIC",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
]

export default function POSTestimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&crop=center"
          alt="Happy business team"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Client Testimonials
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-white rounded-2xl p-8 lg:p-12 shadow-md transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <Quote className="h-12 w-12 text-orange-500 mx-auto mb-6" />

              <div className="mb-8">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].author}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-bold text-gray-900">{testimonials[currentTestimonial].author}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
