"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const hospitalityFeatures = [
  {
    title: "Branded Menu Page",
    description:
      "Custom domain (e.g., order.yourrestaurant.com.au), Your logo, fonts, and imagery, Dynamic menu with categories, pricing & modifiers, Daily specials, combos, and upsells",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Flexible Order Types",
    description:
      "Pickup & takeaway, Table ordering via QR, Scheduled orders, Optional delivery integration (via your staff or 3rd-party couriers)",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Integrated with CYGEN POS",
    description:
      "Auto-sync menu items, modifiers, stock availability, Orders print directly to kitchen (KDS/Kitchen Printer), No manual reconciliation, no double entry",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
  },
]

export default function HospitalityFeatures() {
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
            Built for Hospitality Businesses
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Whether you're a bustling QSR, boutique café, or fine-dine restaurant — CYGEN gives you:
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-24">
          {hospitalityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image Side */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-orange-400 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative bg-white p-4 rounded-3xl shadow-md">
                      <div className="relative h-80 overflow-hidden rounded-2xl">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                        {/* Step Number */}
                        <div className="absolute top-6 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">{feature.title}</h3>
                    <div className="text-lg text-gray-600 leading-relaxed">
                      {feature.description.split(", ").map((item, i) => (
                        <div key={i} className="flex items-start space-x-2 mb-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
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
