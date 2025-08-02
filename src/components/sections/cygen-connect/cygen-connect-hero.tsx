"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Users } from "lucide-react"
import Image from "next/image"

export default function CygenConnectHero() {
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
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10">
        <div className="grid grid-cols-6 gap-4 pr-8">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-blue-500 rounded-full transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Smart Employee
              <br />
              Rostering & Attendance
              <br />
              <span className="text-blue-600">Made Simple</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline workforce scheduling, reduce admin time, and empower your team with CYGEN CONNECT — the
              intelligent rostering and attendance platform built for modern businesses.
            </p>

            <div
              className={`flex items-start space-x-3 mb-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Built specifically for hospitality, retail, and service-based businesses with automated compliance and
                award rules integration.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full group hover:scale-105 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full group hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative max-w-lg mx-auto">
              <div className="relative w-96 h-96 mx-auto">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 transition-all duration-1000 delay-500 ${
                    isVisible ? "scale-100 rotate-0" : "scale-90 rotate-6"
                  }`}
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />

                <div
                  className={`absolute inset-2 bg-white overflow-hidden transition-all duration-1000 delay-700 ${
                    isVisible ? "scale-100 rotate-0" : "scale-95 -rotate-3"
                  }`}
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=center"
                    alt="Team collaboration and workforce management"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute top-16 left-16 bg-blue-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-1000 delay-1000 ${
                      isVisible ? "opacity-100 translate-y-0 animate-float" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    Smart Rostering
                  </div>

                  <div
                    className={`absolute top-24 right-16 bg-orange-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-1000 delay-1200 ${
                      isVisible ? "opacity-100 translate-y-0 animate-float" : "opacity-0 -translate-y-4"
                    }`}
                    style={{ animationDelay: "1s" }}
                  >
                    GPS Check-In
                  </div>

                  <div
                    className={`absolute bottom-24 left-16 bg-green-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-1000 delay-1400 ${
                      isVisible ? "opacity-100 translate-y-0 animate-float" : "opacity-0 translate-y-4"
                    }`}
                    style={{ animationDelay: "1.5s" }}
                  >
                    Award Compliance
                  </div>

                  <div
                    className={`absolute bottom-16 right-16 bg-purple-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-1000 delay-1600 ${
                      isVisible ? "opacity-100 translate-y-0 animate-float" : "opacity-0 translate-y-4"
                    }`}
                    style={{ animationDelay: "2s" }}
                  >
                    Mobile Ready
                  </div>
                </div>
              </div>

              <div
                className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-all duration-1000 delay-1000 shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0 animate-float" : "opacity-0 -translate-y-4"
                }`}
              >
                <Users className="h-8 w-8 text-white" />
              </div>

              <div
                className={`absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center transition-all duration-1000 delay-1200 shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0 animate-float" : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: "1s" }}
              >
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
