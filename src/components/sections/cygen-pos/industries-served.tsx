"use client"

import { useEffect, useRef, useState } from "react"
import { Utensils, Coffee, Wine, ShoppingCart, Truck, Building, Scissors } from "lucide-react"
import Image from "next/image"

const industries = [
  {
    icon: Utensils,
    name: "Restaurants & Cafés",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Coffee,
    name: "Cloud Kitchens & Food Courts",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Wine,
    name: "Bars & Breweries",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: ShoppingCart,
    name: "Grocery & Supermarkets",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Truck,
    name: "Mobile Food Vans",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Building,
    name: "Retail Chains & Franchises",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Scissors,
    name: "Boutiques, Salons & Specialty Stores",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop&crop=center",
  },
]

export default function IndustriesServed() {
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
            Industries We Serve
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">{industry.name}</h3>
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
