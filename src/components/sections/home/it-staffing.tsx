/** @format */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ITStaffing() {
  return (
    <section className="py-16 lg:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden bg-blue-100 p-8 hover:scale-105 transition-transform duration-700">
              <Image
                src="https://plus.unsplash.com/premium_photo-1686244745156-72376fc1d060?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXQlMjBzdGFmZnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Woman working on laptop"
                width={500}
                height={300}
                className="rounded-2xl hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute top-12 right-12 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce-in animation-delay-800">
                Finish Pay Run
              </div>

              <div className="absolute bottom-12 left-12 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center animate-bounce-in animation-delay-1000">
                <span className="w-2 h-2 bg-blue-200 rounded-full mr-2 animate-pulse"></span>
                Accepted shifts
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right animation-delay-300">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              IT Staffing & Contract Workforce
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Quickly access niche tech talent in Australia with contract
              staffing, BOT models, and project-based deployment. Scale fast,
              reduce overheads, and stay agile with Cygen.
            </p>

            <div className="animate-fade-in-up animation-delay-400">
              <Button className="bg-white border border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full group hover:scale-105 transition-all duration-300">
                IT Staffing Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
