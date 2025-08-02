"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Smartphone, Cloud, Zap } from "lucide-react"
import Image from "next/image"

const accessFeatures = [
  {
    title: "Mobile UI for staff and managers",
    icon: Smartphone,
    color: "blue",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=400&fit=crop&crop=center",
  },
  {
    title: "Cloud-based dashboard",
    icon: Cloud,
    color: "green",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Secure, fast, and mobile-optimized",
    icon: Monitor,
    color: "purple",
  },
]

const integrations = ["Xero, MYOB, QuickBooks", "CYGEN POS", "Slack, Microsoft Teams, Google Calendar"]

export default function ConnectAccess() {
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Access Anywhere, Anytime
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {accessFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            const colorClasses = getColorClasses(feature.color)

            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {feature.image ? (
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      <div
                        className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} flex items-center justify-center`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div
          className={`bg-white rounded-3xl p-12 shadow-md transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Seamlessly connect with your existing tools and workflows</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <p className="font-medium text-gray-900">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
