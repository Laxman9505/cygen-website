"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, CreditCard, Users, BarChart3, Shield } from "lucide-react"

const coreFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Responsive design for mobile & tablet, PWA-ready for app-like experience, One-click reordering for customers",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Stripe, Square, or Bank Deposit options, Coupon codes, tips, and wallet balance, Full transaction log and refund control",
  },
  {
    icon: Users,
    title: "Customer Engagement Tools",
    description:
      "Loyalty points and rewards system, Promo codes, first-order discounts, Integrated SMS & email confirmations",
  },
  {
    icon: BarChart3,
    title: "Live Dashboard & Reporting",
    description:
      "Real-time order status view, Sales analytics by item, time, or location, Customer trends & repeat order insights",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description:
      "SSL encryption, secure checkout, Cloud-hosted and backed by Google Cloud, Easily handles spikes during peak hours or events",
  },
]

export default function CoreOnlineFeatures() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Core Features Across All Industries
          </h2>
        </div>

        {/* Icon Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 border border-gray-100">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <div className="text-gray-600 leading-relaxed">
                  {feature.description.split(", ").map((item, i) => (
                    <div key={i} className="flex items-start space-x-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
