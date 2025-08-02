"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Smartphone, Tablet } from "lucide-react"

const compatibility = [
  {
    icon: Monitor,
    title: "Android Screens (preferred), Smart TVs, or HDMI-based displays",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Landscape/Portrait orientation",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Tablet,
    title: "Perfect for menu boards, self-order kiosks, table displays, and foyer signage",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]

export default function ScreenCompatibility() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Compatible with Any Screen or Kiosk
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {compatibility.map((item, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 ${item.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <p className="text-gray-700 leading-relaxed">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
