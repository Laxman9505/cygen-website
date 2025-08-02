"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Zap, RefreshCw, Clock } from "lucide-react"

export default function SeamlessIntegration() {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Seamless Integration with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                CYGEN POS
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Keep your screens in sync with your business. CYGNAGE directly integrates with CYGEN POS — ensuring your
              menu boards, promo banners, and pricing are always up to date, in real time.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Menu boards, promo banners, and pricing always up to date</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Real-time synchronization with your POS system</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Automatic updates across all connected displays</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-6 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center"
                  alt="POS Integration Dashboard"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Floating Integration Icons */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-md animate-float">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-md animate-float animation-delay-2000">
                <RefreshCw className="w-6 h-6 text-orange-600" />
              </div>
              <div className="absolute top-1/2 -right-6 bg-white rounded-full p-3 shadow-md animate-float animation-delay-4000">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
