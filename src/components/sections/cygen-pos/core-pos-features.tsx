"use client"

import { useEffect, useRef, useState } from "react"
import { Cloud, Wifi, Smartphone, Users, BarChart3, UserCheck, Receipt, Gift } from "lucide-react"

const coreFeatures = [
  {
    icon: Cloud,
    title: "Cloud-Based POS",
    description: "Access your sales and reports anytime, anywhere. Auto-sync across devices.",
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description: "Internet down? No worries. CYGEN POS continues to function and syncs back when online.",
  },
  {
    icon: Smartphone,
    title: "Device Flexibility",
    description: "Run on iPad, Android tablets, Windows PCs or CYGEN's purpose-built POS terminals.",
  },
  {
    icon: Users,
    title: "User Roles & Permissions",
    description: "Set staff access by role – Cashier, Manager, Admin.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Reporting",
    description: "Dashboard with live sales, category-wise performance, profit margins, and more.",
  },
  {
    icon: UserCheck,
    title: "CRM Integration",
    description: "Build customer profiles, track purchase history, and push marketing offers.",
  },
  {
    icon: Receipt,
    title: "Receipts & Invoicing",
    description: "Email or print receipts instantly; support for GST & ABN compliance.",
  },
  {
    icon: Gift,
    title: "Loyalty Programs",
    description: "Points-based or visit-based programs integrated directly with your POS.",
  },
]

export default function CorePOSFeatures() {
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
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Core Features for Both Retail & Hospitality
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {coreFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
