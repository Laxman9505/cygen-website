"use client"

import { Clock, Users, Package, TrendingUp, AlertTriangle, FileText } from "lucide-react"

export function SauteReports() {
  const reports = [
    {
      icon: Clock,
      title: "Dish Prep Time Reports",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Kitchen Staff Efficiency",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Package,
      title: "Ingredient Usage by Day/Item",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Table Turnover & Dining Duration",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: AlertTriangle,
      title: "Stock on Hand & Expiry",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Purchase Order History",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reports That Matter</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get insights that help you make better business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${report.color} rounded-2xl p-6 text-white shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center gap-4">
                <report.icon className="h-8 w-8" />
                <h3 className="text-lg font-bold">{report.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
