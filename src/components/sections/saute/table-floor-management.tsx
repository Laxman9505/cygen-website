"use client"

import { Layout, FolderSyncIcon as Sync } from "lucide-react"

export function TableFloorManagement() {
  const features = [
    {
      icon: Layout,
      title: "Drag & Drop Table Layout",
      description:
        "Create your venue layout: tables, booths, bar. Assign servers to sections. View table status: occupied, bill requested, vacant.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Sync,
      title: "Table-to-Kitchen Sync",
      description:
        "Orders routed to KDS instantly. Split bills, merge tables, change seats. Table status updated in real-time across POS, KDS, and cashier.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">2. Table & Floor Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deliver seamless dining experiences with live floor tracking.
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
