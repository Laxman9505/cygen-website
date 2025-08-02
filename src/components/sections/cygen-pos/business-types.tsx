"use client"

import { useEffect, useRef, useState } from "react"
import { Store, Coffee } from "lucide-react"

const businessTypes = [
  {
    icon: Store,
    title: "Retail POS Features",
    subtitle: "Perfect for: Convenience Stores, Boutiques, Grocery, Electronics, Salons, Pharmacies",
    features: [
      "Barcode Scanning & SKU Search - Fast checkout with barcode or keyword-based item search",
      "Inventory Management - Real-time stock tracking, low stock alerts, auto-replenishment suggestions",
      "Multi-Store Management - Manage multiple outlets, price lists, and transfers between locations",
      "Discounts, Promotions & Loyalty - Configure store-wide or product-specific offers",
      "Receipts & Label Printing - Print branded receipts, barcode labels, and shelf labels easily",
      "Integrated Payments - Accept EFTPOS, cash, card, gift cards, BNPL, and mobile payments",
      "Returns & Exchanges - Flexible return policies and partial refunds directly from the POS",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    icon: Coffee,
    title: "Hospitality POS Features",
    subtitle: "Perfect for: Restaurants, Cafés, Bars, Quick Service, Food Trucks",
    features: [
      "Table Management - Visual layout, drag-and-drop table assignment, split bills & merges",
      "Order Routing to Kitchen - Seamless flow of orders from counter/table to KDS or kitchen printers",
      "Modifiers & Combos - Customise menu items, handle meal deals, and complex orders with ease",
      "Happy Hour & Pricing Rules - Set timed discounts, weekday/weekend pricing, staff-only menus",
      "Integrated Online Ordering - Sync with your branded online store or third-party delivery services",
      "Tip Handling & Staff Cashouts - Track individual staff tips and shift-wise sales summaries",
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
  },
]

export default function BusinessTypes() {
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
            Tailored for Your Business Type
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            CYGEN POS adapts to your specific industry needs with specialized features
            <br />
            designed for retail stores and hospitality businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {businessTypes.map((type, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group border-2 ${
                type.borderColor
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-16 h-16 ${type.bgColor} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <type.icon className={`h-8 w-8 ${type.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {type.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-6 font-medium">{type.subtitle}</p>

              <div className="space-y-4">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 ${type.bgColor} rounded-full mt-2 flex-shrink-0`}></div>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
