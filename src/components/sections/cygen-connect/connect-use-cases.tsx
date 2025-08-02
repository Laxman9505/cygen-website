"use client"

import { useEffect, useRef, useState } from "react"
import { Coffee, ShoppingBag, Heart, Wrench } from "lucide-react"
import Image from "next/image"

const useCases = [
  {
    title: "Cafés & Restaurants",
    description: "Manage casual and part-time staff across multiple locations with real-time visibility",
    icon: Coffee,
    color: "blue",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Retail Chains",
    description: "Roster based on footfall predictions and seasonal demand",
    icon: ShoppingBag,
    color: "green",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Franchise Businesses",
    description: "Maintain brand-level control with store-level autonomy",
    icon: Heart,
    color: "purple",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Aged Care or Medical Clinics",
    description: "Manage compliance-heavy rosters with ease",
    icon: Wrench,
    color: "orange",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
  },
]

export default function ConnectUseCases() {
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
      blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-200",
      green: "from-green-500 to-green-600 bg-green-50 border-green-200",
      purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200",
      orange: "from-orange-500 to-orange-600 bg-orange-50 border-orange-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Use Case Examples
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            See how CYGEN CONNECT works across different industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            const colorClasses = getColorClasses(useCase.color)

            return (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} flex items-center justify-center`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
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
