"use client"

import { CheckCircle } from "lucide-react"

export function WhatIsSaute() {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What is CYGEN SAUTE?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              CYGEN SAUTE is a powerful kitchen display and operations suite built for restaurants, cafes, and
              commercial kitchens that want full control over back-of-house efficiency, stock management, and supplier
              ordering.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From order routing to recipe-level costing, SAUTE ensures your kitchen runs smoother, faster, and smarter.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Real-time kitchen display system</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Recipe-level costing and inventory management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Automated supplier ordering system</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Integrated with CYGEN POS</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative transform -rotate-3 shadow-md rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Kitchen Operations Dashboard"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
