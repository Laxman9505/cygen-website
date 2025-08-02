"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Users, Smartphone, Shield, Cloud } from "lucide-react"

const whyFeatures = [
  {
    title: "Built specifically for hospitality, retail, and service-based businesses",
    icon: Users,
    color: "blue",
  },
  {
    title: "Easy-to-use interface for managers and staff",
    icon: Smartphone,
    color: "green",
  },
  {
    title: "Automated compliance with award rules & Fair Work",
    icon: Shield,
    color: "purple",
  },
  {
    title: "Cloud-based, mobile-ready, and scalable",
    icon: Cloud,
    color: "orange",
  },
]

export default function WhyCygenConnect() {
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50",
      orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Check className="h-4 w-4 mr-2" />
            Why CYGEN CONNECT?
          </div>

          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Smart Choice for Modern Businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whyFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            const colorClasses = getColorClasses(feature.color)

            return (
              <div
                key={index}
                className={`relative group transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed font-medium">{feature.title}</p>
                  </div>

                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
