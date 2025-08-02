"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Hachem Zehour",
    role: "Operations Manager",
    company: "Fine Dine Restaurant",
    location: "Sydney",
    content: "CYGEN CONNECT saved us 12 hours of admin every week and improved staff satisfaction.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya R.",
    role: "Franchise Owner",
    company: "QSR Chain",
    location: "Melbourne",
    content: "Perfect for our fast-paced QSRs. Award rules built-in, seamless timesheets – it just works.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

export default function ConnectTestimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 lg:p-12 shadow-md">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <Quote className="h-12 w-12 text-blue-500 mr-4" />
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-2xl lg:text-3xl text-gray-900 font-medium leading-relaxed mb-8 italic">
                    "{currentTestimonial.content}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={currentTestimonial.image || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-gray-600">{currentTestimonial.role}</p>
                      <p className="text-sm text-gray-500">
                        {currentTestimonial.company}, {currentTestimonial.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
                      alt="Happy team using CYGEN CONNECT"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />

                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                      <div className="text-2xl font-bold text-green-600">12hrs</div>
                      <div className="text-sm text-gray-600">Saved Weekly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-blue-500" : "w-3 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
