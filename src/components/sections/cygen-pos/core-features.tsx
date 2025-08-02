"use client"

import { useEffect, useRef, useState } from "react"
import { Cloud, Wifi, Smartphone, Users, BarChart3, UserCheck, Receipt, Award } from "lucide-react"

const coreFeatures = [
  {
    icon: Cloud,
    title: "Cloud-Based POS",
    description: "Access your sales and reports anytime, anywhere. Auto-sync across devices.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description: "Internet down? No worries. CYGEN POS continues to function and syncs back when online.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Smartphone,
    title: "Device Flexibility",
    description: "Run on iPad, Android tablets, Windows PCs or CYGEN's purpose-built POS terminals.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Users,
    title: "User Roles & Permissions",
    description: "Set staff access by role – Cashier, Manager, Admin.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: BarChart3,
    title: "Real-Time Reporting",
    description: "Dashboard with live sales, category-wise performance, profit margins, and more.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    icon: UserCheck,
    title: "CRM Integration",
    description: "Build customer profiles, track purchase history, and push marketing offers.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    icon: Receipt,
    title: "Receipts & Invoicing",
    description: "Email or print receipts instantly; support for GST & ABN compliance.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    icon: Award,
    title: "Loyalty Programs",
    description: "Points-based or visit-based programs integrated directly with your POS.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
]

export default function CoreFeatures() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Core Features for Both Retail & Hospitality
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Essential features that power your business operations regardless of your industry,
            <br />
            designed to streamline processes and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group border border-gray-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-4">
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
