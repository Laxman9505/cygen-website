"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Cloud, Link, Palette } from "lucide-react"

const steps = [
  {
    step: "1",
    icon: Monitor,
    title: "Install Screen/KIOSK with Android",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    step: "2",
    icon: Cloud,
    title: "Connect to CYGEN Dashboard (Cloud)",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    step: "3",
    icon: Link,
    title: "Link to CYGEN POS (for dynamic updates)",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    step: "4",
    icon: Palette,
    title: "Drag, Drop & Go Live with beautiful layouts",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

export default function HowItWorks() {
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
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-md">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
