"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import Image from "next/image"

export default function WhatIsCygenPOS() {
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
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-orange-600">CYGEN POS</span>?
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              CYGEN POS is an intelligent, cloud-connected Point of Sale platform designed to streamline operations for
              retailers and hospitality businesses of all sizes.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From sales, payments, and stock, to staff, promotions, and analytics, manage everything in real-time —
              on-site or remotely.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Real-time operations management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Cloud-connected for remote access</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Scalable for businesses of all sizes</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
                  alt="CYGEN POS dashboard interface"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
