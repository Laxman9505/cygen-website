"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function ConnectCTA() {
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
      className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-orange-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className={`text-3xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Try CYGEN CONNECT Free for 14 Days
          </h2>

          <p
            className={`text-xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Experience the difference — no credit card required.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full group hover:scale-105 transition-all duration-300 font-semibold">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-white mr-2" />
              <h3 className="text-xl font-bold text-white">Need Help Choosing a Plan?</h3>
            </div>

            <p className="text-white/90 mb-6">
              Speak with our product consultant to tailor the perfect solution for your business
            </p>

            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
