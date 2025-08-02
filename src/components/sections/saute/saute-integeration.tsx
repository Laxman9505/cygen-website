"use client"

import { Link, Menu, BarChart3, Database } from "lucide-react"

export function SauteIntegration() {
  const integrations = [
    {
      icon: Menu,
      title: "Menu Sync",
      description: "Menu, orders, modifiers sync automatically",
    },
    {
      icon: Link,
      title: "Recipe Linking",
      description: "Recipes linked to menu items",
    },
    {
      icon: BarChart3,
      title: "Order Flow",
      description: "Online, in-store, and third-party orders all flow into the same KDS",
    },
    {
      icon: Database,
      title: "Unified Dashboard",
      description: "Unified dashboard for sales, inventory, and prep reports",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fully Integrated with CYGEN POS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamless integration ensures all your systems work together perfectly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <integration.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{integration.title}</h3>
              <p className="text-gray-600">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
