/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

export function KioskHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Restaurant <span className="text-blue-600">KIOSK</span> for Self
              Ordering
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
              Transform Your Restaurant Experience.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Discover how CYGEN Kiosk can revolutionize your restaurant
              operations with cutting-edge self-service technology. Learn about
              the key features, benefits, and how to get a live demo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full bg-transparent"
              >
                Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center items-end space-x-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="CYGEN Self-Ordering Kiosk"
                  className="w-48 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Zap className="w-4 h-4 mr-1" />
                  Fast Ordering
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="CYGEN Self-Ordering Kiosk Interface"
                  className="w-48 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  User Friendly
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Boost Sales by 30%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
