"use client"

import { Utensils, Coffee, Truck, Building, Users } from "lucide-react"

export function IdealForSection() {
  const businesses = [
    {
      icon: Utensils,
      title: "Restaurants",
      subtitle: "Fine Dine, Casual, QSR",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Coffee,
      title: "Cafés & Bakeries",
      subtitle: "Coffee shops, Bakeries",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Truck,
      title: "Ghost Kitchens",
      subtitle: "Cloud kitchens, Delivery-only",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Building,
      title: "Food Courts",
      subtitle: "Mall food courts, Shared kitchens",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Users,
      title: "Multi-Venue Groups",
      subtitle: "Hospitality chains, Franchises",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ideal for</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CYGEN SAUTE is perfect for various types of food service businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square relative">
                <img
                  src={business.image || "/placeholder.svg"}
                  alt={business.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <business.icon className="h-5 w-5 text-white" />
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{business.title}</h3>
                  <p className="text-sm text-gray-200">{business.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
