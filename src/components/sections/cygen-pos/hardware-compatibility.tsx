"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Tablet, Printer, Scan, Scale, Tv } from "lucide-react"

const hardwareItems = [
  { icon: Monitor, name: "POS Terminal (Android/Windows)" },
  { icon: Printer, name: "Cash Drawer" },
  { icon: Printer, name: "Receipt Printer" },
  { icon: Printer, name: "Kitchen Printer / KDS" },
  { icon: Scan, name: "Barcode Scanner" },
  { icon: Printer, name: "Label Printer" },
  { icon: Scale, name: "Weighing Scale (Retail)" },
  { icon: Tv, name: "Customer Display Screen" },
  { icon: Tablet, name: "Tablets for Waitstaff" },
]

const compliance = [
  "GST/VAT Ready",
  "AU/NZ/US compliance",
  "Language localizations on request",
  "Custom tax codes & surcharges (e.g., holiday levy, packaging)",
]

export default function HardwareCompatibility() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Hardware Compatibility */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Hardware Compatibility</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hardwareItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium text-sm">{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Multi-Language & Regional Tax */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Multi-Language & Regional Tax Ready</h2>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="space-y-4">
                {compliance.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${(index + 9) * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-900 font-medium">{item}</span>
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
