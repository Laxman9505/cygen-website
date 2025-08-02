"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, Wrench, Palette, Zap } from "lucide-react"

const addons = [
  { name: 'Screen supply & installation (50"/32")', icon: Monitor },
  { name: "KIOSK stand & wall mounts", icon: Wrench },
  { name: "Content design services", icon: Palette },
  { name: "Custom animation package", icon: Zap },
]

export default function CygnageCTA() {
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
      className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 relative overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Try CYGNAGE Free for 14 Days
          </h2>
          <p
            className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No hardware purchase required. Just plug in and experience the future of signage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CTA Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex-1"
                >
                  <Link href="/enquiry">Start Free Trial</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl transition-all duration-300 bg-transparent flex-1"
                >
                  <Link href="/enquiry">Book a Demo with a CYGEN Specialist</Link>
                </Button>
              </div>

              <div className="text-center">
                <p className="text-white/80 text-sm">No credit card required • 14-day free trial</p>
              </div>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-white mb-6">Optional Add-ons</h3>

              <div className="space-y-4">
                {addons.map((addon, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white/90">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <addon.icon className="w-5 h-5" />
                    </div>
                    <span>{addon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
