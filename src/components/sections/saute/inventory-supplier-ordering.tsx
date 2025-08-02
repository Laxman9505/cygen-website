"use client"

import { Package, ShoppingCart, ClipboardCheck } from "lucide-react"

export function InventorySupplierOrdering() {
  const features = [
    {
      icon: Package,
      title: "Live Stock Control",
      description:
        "Track inventory by location (pantry, cold store, bar). Auto-deduct stock by recipe when items are sold. FIFO & batch tracking.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: ShoppingCart,
      title: "Supplier Order Automation",
      description:
        "Set par levels, reorder alerts. Auto-generate Purchase Orders (POs). Email POs directly to suppliers with one click.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: ClipboardCheck,
      title: "Stock Audits & Variance",
      description:
        "Full and spot checks supported. Variance tracking between ideal vs actual usage. Integrated with SAASU or XERO if required.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">4. Inventory & Supplier Ordering</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never run out of stock again — manage inventory and automate supplier purchase orders.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    <span className="text-orange-500 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
