"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Coffee, Utensils, ShoppingBag, Building2, Hotel, Dumbbell } from "lucide-react"

const industries = [
  {
    icon: Coffee,
    title: "QSRs & Cafés",
    description: "Live menu displays with POS sync",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Utensils,
    title: "Fine-Dining",
    description: "Wine list rotations, chef's specials",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Product banners, in-store promotions",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Building2,
    title: "Franchises",
    description: "Brand consistency across regions",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    description: "Lobby signage, event info",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop&crop=center",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Wellness Studios",
    description: "Timetables, announcements",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
  },
]

export default function CygnageIndustries() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                    <p className="text-gray-200 text-sm">{industry.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
