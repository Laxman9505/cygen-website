"use client"

import { useEffect, useRef, useState } from "react"

const addons = [
  {
    module: "CYGNAGE",
    description: "Auto-sync POS menu to digital screens with pricing & images.",
  },
  {
    module: "CONNECT",
    description: "Staff Rostering, Check-In/Out, Attendance tracking.",
  },
  {
    module: "SAUTE",
    description: "Kitchen Display System, Recipe & Inventory Management.",
  },
  {
    module: "Online Ordering",
    description: "Your own branded ordering site & QR menu integrated with POS.",
  },
  {
    module: "Xero/SAASU",
    description: "Real-time accounting integration with invoices and purchase data.",
  },
  {
    module: "Analytics Dashboards",
    description: "Custom Power BI dashboards or inbuilt reports for daily review.",
  },
]

export default function POSAddonsIntegrations() {
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
            Optional Add-Ons & Integrations
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-blue-500 p-6">
              <div className="flex items-center justify-between text-white">
                <h3 className="text-xl font-bold">Module</h3>
                <h3 className="text-xl font-bold">Description</h3>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className={`p-6 hover:bg-gray-50 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="font-bold text-orange-600 text-lg">{addon.module}</div>
                    <div className="md:col-span-2 text-gray-600">{addon.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
