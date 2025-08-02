"use client"

import { Monitor, Clock, Layers } from "lucide-react"

export function KitchenDisplaySystem() {
  const features = [
    {
      icon: Monitor,
      title: "Live Order Queue",
      description:
        "Instantly receive dine-in, takeaway, and online orders. Color-coded for preparation time & order type. Auto-routing to stations: grill, salad, dessert, etc.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Clock,
      title: "Bump, Recall, and Auto-Timer",
      description:
        "Chefs can mark dishes as prepped & served. Auto-alert if prep time exceeds SLAs. Recall last orders in a click.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Layers,
      title: "Supports Multiple Screens",
      description: "Mount screens per section. KOT (Kitchen Order Ticket) mode available. Mobile tablet compatibility.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">1. Kitchen Display System (KDS)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digitize your kitchen with a real-time KDS interface connected to your POS.
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
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
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
