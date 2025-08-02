"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Monitor, Calendar, MapPin, Wifi, Palette, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "POS-Synced Digital Menu Boards",
    description: "Auto-sync with CYGEN POS: Prices, availability, categories update instantly",
    bullets: [
      "Dynamic menus based on time of day (breakfast/lunch/dinner)",
      "Special offers, sold-out items, and combos updated live",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=center",
  },
  {
    icon: Calendar,
    title: "Smart Content Scheduling",
    description: "Set promos by time, day, or event",
    bullets: [
      "Schedule special campaigns (Happy Hour, Weekends, Holiday Specials)",
      "Playlist mode for rotating banners, ads, or upsells",
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center",
  },
  {
    icon: MapPin,
    title: "Screen Grouping & Location Control",
    description: "Assign content by zone (e.g., Sydney QSRs, VIC Cafés)",
    bullets: ["Update one or all locations from one dashboard", "Ideal for franchises and multi-site businesses"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
  },
  {
    icon: Wifi,
    title: "Offline-Resilient",
    description: "Screens continue running content even if the internet drops",
    bullets: ["Sync resumes automatically when back online", "No customer experience interruptions"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
  },
  {
    icon: Palette,
    title: "Custom Branding & Templates",
    description: "Drag-and-drop template editor",
    bullets: [
      "Add logos, animations, videos, QR codes, and more",
      "Responsive design for all screen sizes (landscape/portrait)",
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop&crop=center",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics & Monitoring",
    description: "Uptime tracking, content play reports",
    bullets: ["Remote health dashboard for 400+ screens", "Set alerts for power or network failures"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
  },
]

export default function CygnageFeatures() {
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
            Core Features
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-orange-400 rounded-full hidden lg:block"></div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 p-8 border border-gray-100">
                      {/* Step Number */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                          {index + 1}
                        </div>
                        <div className="ml-4">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>

                      <ul className="space-y-2">
                        {feature.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="relative group">
                      <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-6 shadow-md">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Step Badge on Image */}
                        <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-blue-400 rounded-full shadow-md hidden lg:block z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
