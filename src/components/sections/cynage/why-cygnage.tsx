"use client"

import { useEffect, useRef, useState } from "react"
import { Check, RefreshCw, Palette, Cloud } from "lucide-react"

const benefits = [
  {
    icon: RefreshCw,
    title: "No more reprinting menus or wasting time on manual updates",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Check,
    title: "Real-time display of offers, combos, and availability",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Palette,
    title: "Customizable templates to match your brand",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Cloud,
    title: "Works across 1 screen or 1,000 — scalable and cloud-controlled",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

export default function WhyCygnage() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">CYGNAGE?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div
                  className={`w-12 h-12 ${benefit.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">{benefit.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
