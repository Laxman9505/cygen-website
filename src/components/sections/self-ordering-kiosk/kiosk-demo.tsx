/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function KioskDemo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Get a Demo of <span className="text-blue-600">CYGEN Kiosk</span>
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Interested in seeing Cygen Kiosk in action?
            </h3>

            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600">
                Schedule a live demonstration today and witness firsthand how
                our kiosks can transform your restaurant's operational
                efficiency and customer engagement.
              </p>

              <p className="text-lg text-gray-600">
                Our team is ready to walk you through the features and answer
                any questions you may have about integrating Cygen Kiosks into
                your business.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full"
            >
              Schedule Your Demo Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CYGEN Kiosk Demo 1"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CYGEN Kiosk Demo 2"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CYGEN Kiosk Demo 3"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CYGEN Kiosk Demo 4"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
