"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, MapPin, Calendar, Shield, Bell, FileText, BarChart3 } from "lucide-react"
import Image from "next/image"

const keyFeatures = [
  {
    title: "Smart Rostering Engine",
    description: [
      "Auto-generate shifts based on availability, role, and award compliance",
      "Drag-and-drop interface for quick edits",
      "Role-based cost predictions and budget caps",
    ],
    icon: Clock,
    step: "01",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Employee Check-In/Check-Out",
    description: [
      "GPS-tagged mobile check-ins",
      "Biometric/QR kiosk support for high-traffic venues",
      "Real-time updates and shift status tracking",
    ],
    icon: MapPin,
    step: "02",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Leave & Availability Management",
    description: [
      "Staff can apply for leave or update availability via mobile",
      "Managers receive real-time notifications",
      "Easy calendar view for planning",
    ],
    icon: Calendar,
    step: "03",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Award Interpretation & Compliance",
    description: [
      "Built-in support for Australian award rates",
      "Automatic overtime, penalty rate calculations",
      "Stay audit-ready with full logs and reports",
    ],
    icon: Shield,
    step: "04",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Notifications & Communication Tools",
    description: [
      "Notify staff of roster changes via SMS/Email",
      "One-click shift reminders",
      "Bulletin board for staff announcements",
    ],
    icon: Bell,
    step: "05",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Timesheets & Payroll Integration",
    description: [
      "Approved shifts auto-convert to timesheets",
      "Export to major payroll systems (Xero, MYOB, etc.)",
      "Save hours on admin with accurate data syncing",
    ],
    icon: FileText,
    step: "06",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Custom Reports & Analytics",
    description: ["Workforce cost reports", "Attendance insights", "Shift compliance monitoring"],
    icon: BarChart3,
    step: "07",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  },
]

export default function ConnectKeyFeatures() {
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
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Key Features
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Everything you need to manage your workforce efficiently and compliantly
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">  
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-orange-500 h-full hidden lg:block" />

          <div className="space-y-16">
            {keyFeatures.map((feature, index) => {
              const isEven = index % 2 === 0
              const IconComponent = feature.icon

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-16 gap-8 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center z-10 hidden lg:flex">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>

                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-24" : "lg:pl-24"}`}>
                    <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 text-white font-bold text-lg rounded-full mb-4">
                        {feature.step}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>

                      <ul className="space-y-3">
                        {feature.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        <IconComponent className="h-4 w-4 mr-2" />
                        Core Feature
                      </div>
                    </div>
                  </div>

                  <div className={`lg:w-1/2 ${isEven ? "lg:pl-24" : "lg:pr-24"}`}>
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl shadow-md transform group-hover:scale-105 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 z-10" />
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          width={600}
                          height={400}
                          className="w-full h-64 lg:h-80 object-cover"
                        />

                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900 z-20">
                          Step {feature.step}
                        </div>
                      </div>

                      <div
                        className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse`}
                      />
                      <div
                        className={`absolute -bottom-4 ${isEven ? "-left-4" : "-right-4"} w-6 h-6 bg-orange-500 rounded-full opacity-60 animate-pulse`}
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
