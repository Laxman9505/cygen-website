"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  { name: "Branded ordering portal", included: true },
  { name: "Menu/Product sync with POS", included: true },
  { name: "Click & Collect / Delivery", included: true },
  { name: "Online payments", included: true },
  { name: "Customer loyalty program", included: true },
  { name: "Real-time dashboard", included: true },
  { name: "24x7 tech support", included: true },
]

const addons = [
  { name: "SMS Packs", description: "Send order confirmations and updates" },
  { name: "Custom App Build (Android/iOS)", description: "Native mobile apps for your brand" },
  { name: "Hardware Bundle: QR Display, Kitchen Printer", description: "Complete hardware setup" },
  { name: "Marketing Toolkit for Local Campaigns", description: "Automated marketing campaigns" },
]

export default function OnlineOrderingPricing() {
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
            14-Day Free Trial – No Setup Fees
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ready to offer direct ordering from your brand?
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features List */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-md border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  What You Get
                </h3>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing Display */}
                <div className="mt-8 p-6 bg-white rounded-2xl shadow-inner border border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      FREE
                      <span className="text-lg font-normal text-gray-600 ml-2">for 14 days</span>
                    </div>
                    <p className="text-gray-600">No setup fees, no hidden costs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-md border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Add-ons Available</h3>

                <div className="space-y-4">
                  {addons.map((addon, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{addon.name}</h4>
                          <p className="text-gray-600 text-sm">{addon.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-8 text-white shadow-md">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses already using CYGEN Online Ordering to increase sales and improve customer
                experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/enquiry">
                    Start Your Free Trial Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent"
                >
                  <Link href="/enquiry">Schedule a Demo with Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
