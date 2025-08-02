"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingCart, Utensils, Check } from "lucide-react"
import Image from "next/image"

const retailFeatures = [
  "Barcode Scanning & SKU Search",
  "Inventory Management",
  "Multi-Store Management",
  "Discounts, Promotions & Loyalty",
  "Receipts & Label Printing",
  "Integrated Payments",
  "Returns & Exchanges",
]

const hospitalityFeatures = [
  "Table Management",
  "Order Routing to Kitchen",
  "Modifiers & Combos",
  "Happy Hour & Pricing Rules",
  "Integrated Online Ordering",
  "Tip Handling & Staff Cashouts",
]

export default function BusinessTypeFeatures() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("retail")
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
            Tailored for Your Business Type
          </h2>
        </div>

        {/* Tab Navigation - Responsive */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-white rounded-full p-1 shadow-md w-full max-w-md">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setActiveTab("retail")}
                className={`flex items-center justify-center space-x-2 px-3 sm:px-6 py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "retail" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium">Retail POS</span>
              </button>
              <button
                onClick={() => setActiveTab("hospitality")}
                className={`flex items-center justify-center space-x-2 px-3 sm:px-6 py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "hospitality" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Utensils className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium">Hospitality POS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "retail" && (
            <div
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail POS Features</h3>
                <p className="text-gray-600 mb-6">
                  Perfect for: Convenience Stores, Boutiques, Grocery, Electronics, Salons, Pharmacies
                </p>
                <div className="space-y-4">
                  {retailFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {feature.split(" ")[0]} {feature.split(" ")[1]}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {feature === "Barcode Scanning & SKU Search" &&
                            "Fast checkout with barcode or keyword-based item search."}
                          {feature === "Inventory Management" &&
                            "Real-time stock tracking, low stock alerts, auto-replenishment suggestions."}
                          {feature === "Multi-Store Management" &&
                            "Manage multiple outlets, price lists, and transfers between locations."}
                          {feature === "Discounts, Promotions & Loyalty" &&
                            "Configure store-wide or product-specific offers, integrate with loyalty programs."}
                          {feature === "Receipts & Label Printing" &&
                            "Print branded receipts, barcode labels, and shelf labels easily."}
                          {feature === "Integrated Payments" &&
                            "Accept EFTPOS, cash, card, gift cards, BNPL, and mobile payments."}
                          {feature === "Returns & Exchanges" &&
                            "Flexible return policies and partial refunds directly from the POS."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-2xl transform -rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center"
                    alt="Retail POS system in store"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "hospitality" && (
            <div
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center"
                    alt="Restaurant POS system"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hospitality POS Features</h3>
                <p className="text-gray-600 mb-6">Perfect for: Restaurants, Cafés, Bars, Quick Service, Food Trucks</p>
                <div className="space-y-4">
                  {hospitalityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {feature.split(" ")[0]} {feature.split(" ")[1]}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {feature === "Table Management" &&
                            "Visual layout, drag-and-drop table assignment, split bills & merges."}
                          {feature === "Order Routing to Kitchen" &&
                            "Seamless flow of orders from counter/table to KDS or kitchen printers."}
                          {feature === "Modifiers & Combos" &&
                            "Customise menu items, handle meal deals, and complex orders with ease."}
                          {feature === "Happy Hour & Pricing Rules" &&
                            "Set timed discounts, weekday/weekend pricing, staff-only menus."}
                          {feature === "Integrated Online Ordering" &&
                            "Sync with your branded online store or third-party delivery services."}
                          {feature === "Tip Handling & Staff Cashouts" &&
                            "Track individual staff tips and shift-wise sales summaries."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
