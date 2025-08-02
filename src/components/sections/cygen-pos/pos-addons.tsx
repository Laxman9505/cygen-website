"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Calendar, ChefHat, Globe, Calculator, BarChart } from "lucide-react"

const addons = [
  {
    icon: Monitor,
    title: "CYGNAGE",
    description: "Auto-sync POS menu to digital screens with pricing & images.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Calendar,
    title: "CONNECT",
    description: "Staff Rostering, Check-In/Out, Attendance tracking.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: ChefHat,
    title: "SAUTE",
    description: "Kitchen Display System, Recipe & Inventory Management.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: Globe,
    title: "Online Ordering",
    description: "Your own branded ordering site & QR menu integrated with POS.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Calculator,
    title: "Xero/SAASU",
    description: "Real-time accounting integration with invoices and purchase data.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboards",
    description: "Custom Power BI dashboards or inbuilt reports for daily review.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
]

export default function POSAddons() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Optional Add-Ons & Integrations
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Extend your POS capabilities with powerful add-ons and integrations
            <br />
            designed to enhance your business operations and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {addons.map((addon, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group border border-gray-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 ${addon.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <addon.icon className={`h-8 w-8 ${addon.color}`} />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {addon.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {addon.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
