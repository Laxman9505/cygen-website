"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Printer, Scan, Scale, CreditCard, Tablet, Globe, FileCheck } from "lucide-react"

const hardwareItems = [
  { icon: Monitor, name: "POS Terminal (Android/Windows)" },
  { icon: CreditCard, name: "Cash Drawer" },
  { icon: Printer, name: "Receipt Printer" },
  { icon: Printer, name: "Kitchen Printer / KDS" },
  { icon: Scan, name: "Barcode Scanner" },
  { icon: Printer, name: "Label Printer" },
  { icon: Scale, name: "Weighing Scale (Retail)" },
  { icon: Monitor, name: "Customer Display Screen" },
  { icon: Tablet, name: "Tablets for Waitstaff" },
]

const complianceFeatures = [
  { icon: FileCheck, name: "GST/VAT Ready" },
  { icon: Globe, name: "AU/NZ/US compliance" },
  { icon: Globe, name: "Language localizations on request" },
  { icon: FileCheck, name: "Custom tax codes & surcharges" },
]

export default function HardwareCompliance() {
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
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Hardware Compatibility</h2>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="grid gap-4">
                {hardwareItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Multi-Language & Regional Tax Ready</h2>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="grid gap-4">
                {complianceFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-900">{feature.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-4">Sample Reports Available</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Daily/Weekly/Monthly Sales</div>
                  <div>• Staff Productivity & Shift Summary</div>
                  <div>• Category-Wise Profit Margins</div>
                  <div>• Low Stock & Dead Stock Alerts</div>
                  <div>• GST & Compliance Reports</div>
                  <div>• Customer Purchase History</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Client Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <blockquote className="text-gray-600 mb-4 italic">
                "We switched to CYGEN POS across our 6 stores and saw smoother operations from day one. Easy to train
                staff and great local support!"
              </blockquote>
              <div className="font-semibold text-gray-900">— Café Group Owner, NSW</div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <blockquote className="text-gray-600 mb-4 italic">
                "CYGEN POS + CONNECT helped me reduce my wage leakages while giving me a clear view of my daily sales.
                Highly recommend!"
              </blockquote>
              <div className="font-semibold text-gray-900">— Retail Franchise Partner, VIC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
