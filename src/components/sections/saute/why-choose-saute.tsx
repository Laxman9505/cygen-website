"use client"

import { Check } from "lucide-react"

export function WhyChooseSaute() {
  const features = [
    { name: "KDS with multi-station support", included: true },
    { name: "Floor/Table layout management", included: true },
    { name: "POS integration", included: true },
    { name: "Recipe + Ingredient linking", included: true },
    { name: "Inventory with reorder automation", included: true },
    { name: "Supplier PO generation", included: true },
    { name: "Real-time reporting", included: true },
    { name: "24x7 support", included: true },
  ]

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SAUTE?</h2>
              <p className="text-xl text-gray-600">Boost Kitchen Efficiency by 30%+</p>
              <p className="text-lg text-gray-600 mt-4">
                Chefs prep faster. Servers turn tables quicker. Managers stay on top of costs. With SAUTE, your kitchen
                becomes a profit powerhouse.
              </p>
            </div>
          </div>

          {/* Features Table */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50/30 rounded-2xl p-8 shadow-md">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-gray-900 font-medium">{feature.name}</span>
                  <div className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-blue-600" />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
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
