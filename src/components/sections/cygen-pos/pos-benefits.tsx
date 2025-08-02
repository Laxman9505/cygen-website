"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Package, ChefHat, DollarSign, Cloud } from "lucide-react"
import Link from "next/link"

const benefits = [
  { icon: Zap, text: "Speed up checkout by 40%", color: "text-orange-500" },
  { icon: Package, text: "Reduce stock loss by 25%", color: "text-blue-500" },
  { icon: ChefHat, text: "Improve order accuracy in kitchens", color: "text-green-500" },
  { icon: DollarSign, text: "Boost customer retention with loyalty", color: "text-purple-500" },
  { icon: Cloud, text: "Manage stores from anywhere, anytime", color: "text-teal-500" },
]

const industries = [
  "Restaurants & Cafés",
  "Cloud Kitchens & Food Courts",
  "Bars & Breweries",
  "Grocery & Supermarkets",
  "Mobile Food Vans",
  "Retail Chains & Franchises",
  "Boutiques, Salons & Specialty Stores",
]

export default function POSBenefits() {
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
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Benefits of Choosing{" "}
              <span className="text-orange-600">
                CYGEN POS<span className="text-gray-900"></span>
              </span>
            </h2>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-500 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div
              className={`transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
                <Link href="/enquiry">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full group hover:scale-105 transition-all duration-300">
                Start Your 14-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h3>

                <div className="grid gap-4">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">{industry}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full opacity-20 transition-all duration-1000 delay-1000 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-45"
                }`}
              />
              <div
                className={`absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-20 transition-all duration-1000 delay-1200 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 -rotate-45"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
