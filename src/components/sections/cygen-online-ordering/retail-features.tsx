"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const retailFeatures = [
  {
    title: "Product Catalogue with Barcodes",
    description: "Bulk upload of product list with categories, Live availability tracking, SKU/barcode based checkout",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Smart Cart & Search",
    description:
      'Customers search by name, barcode, or brand, Auto-suggestions and popular picks, Upsell with "Frequently Bought Together"',
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Click & Collect / Local Delivery",
    description:
      "Scheduled pickups or door-to-door delivery, Configure zones, charges, and delivery times, Smart assignment to drivers or staff",
    image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=600&h=400&fit=crop&crop=center",
  },
]

export default function RetailFeatures() {
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
            Made for Retail Ordering Too
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Own a convenience store, grocery outlet, or specialty goods shop? CYGEN powers smooth online ordering for:
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-24">
          {retailFeatures.map((feature, index) => (
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-blue-400 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
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
                        <div className="absolute top-6 left-6 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
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
                          <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
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
