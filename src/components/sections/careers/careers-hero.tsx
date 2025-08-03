/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function CareersHero() {
  const scrollToPositions = () => {
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233B82F6' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Join Our Growing
            <span className="block text-blue-600">Team of Innovators</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            If You're an IT Professional Looking to Make an Impact and Grow Your
            Career with a Dynamic Team, Explore Our Open Positions Below.
          </p>
          <Button
            onClick={scrollToPositions}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-300 text-lg"
          >
            Available Roles <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern office workspace with professionals"
              fill
              className="object-cover"
            />
            {/* Floating Elements */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="text-blue-600 font-semibold text-sm">
                Sydney Office
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-orange-500/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="text-white font-semibold text-sm">
                We're Hiring!
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-100 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
