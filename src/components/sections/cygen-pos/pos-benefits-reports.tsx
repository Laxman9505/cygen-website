"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Package, ChefHat, Heart, Cloud, BarChart3 } from "lucide-react"

const benefits = [
  { icon: TrendingUp, text: "Speed up checkout by 40%", color: "text-green-500" },
  { icon: Package, text: "Reduce stock loss by 25%", color: "text-blue-500" },
  { icon: ChefHat, text: "Improve order accuracy in kitchens", color: "text-orange-500" },
  { icon: Heart, text: "Boost customer retention with loyalty", color: "text-red-500" },
  { icon: Cloud, text: "Manage stores from anywhere, anytime", color: "text-purple-500" },
]

const reports = [
  "Daily/Weekly/Monthly Sales",
  "Staff Productivity & Shift Summary",
  "Category-Wise Profit Margins",
  "Low Stock & Dead Stock Alerts",
  "GST & Compliance Reports",
  "Customer Purchase History",
]

export default function POSBenefitsReports() {
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
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Benefits */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Benefits of Choosing <span className="text-orange-600">CYGEN POS</span>
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md`}>
                      <IconComponent className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <span className="text-lg font-medium text-gray-900">{benefit.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Reports */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Sample Reports Available</h2>
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${(index + 5) * 150}ms` }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">{report}</span>
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
