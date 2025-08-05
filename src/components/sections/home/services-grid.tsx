/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            You can solve it all.
            <br />
            With Cygen
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-orange-600 rounded-3xl p-8 md:col-span-2 lg:col-span-1 animate-slide-in-up animation-delay-600 hover:scale-105 transition-all duration-500 group">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
              Custom App
              <br />
              Development
            </h3>
            <p className="text-gray-100 mb-8 leading-relaxed">
              Tailored mobile and web applications built to transform
              <br />
              your business ideas into powerful digital solutions.
            </p>
            <Link href="/services/custom-app-development">
              <Button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full group-hover:scale-110 transition-all duration-300">
                Explore App Development
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="mt-8 animate-fade-in animation-delay-600">
              <Image
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300&h=200&fit=crop&crop=center"
                alt="App development visualization"
                width={300}
                height={200}
                className="rounded-2xl hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="bg-blue-600 rounded-3xl p-8 relative animate-slide-in-left hover:scale-105 transition-all duration-500 group">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
              Cloud & Infrastructure
              <br />
              Services
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Future-ready cloud strategy, seamless migrations, and 24/7
              <br />
              infrastructure support tailored to Australian businesses.
            </p>
            <Link href="/services/cloud-services-and-it-infrastructure">
              <Button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full group-hover:scale-110 transition-all duration-300">
                Explore Cloud Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <div className="mt-8 animate-fade-in animation-delay-600">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center"
                alt="Cloud infrastructure visualization"
                width={300}
                height={200}
                className="rounded-2xl hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="bg-teal-500 rounded-3xl p-8 animate-slide-in-right animation-delay-200 hover:scale-105 transition-all duration-500 group">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
              BI & Data Insights
            </h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              From raw data to real decisions—build modern platforms,
              <br />
              implement AI/ML, automate workflows.
            </p>
            <Link href="/services/data-visualization">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full group-hover:scale-110 transition-all duration-300">
                Explore BI & Data Insights
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="mt-8 animate-fade-in animation-delay-600">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
                alt="Cloud infrastructure visualization"
                width={300}
                height={150}
                className="rounded-2xl hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="bg-yellow-500 rounded-3xl p-8 md:col-span-2 lg:col-span-1 animate-slide-in-up animation-delay-400 hover:scale-105 transition-all duration-500 group">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-teal-100 transition-colors">
              Cybersecurity & Managed
              <br />
              Services
            </h3>
            <p className="text-white mb-8 leading-relaxed">
              Penetration testing, 24x7 helpdesk, IAM strategies, and managed
              <br />
              security aligned with Aussie compliance.
            </p>
            <Link href="/services/cybersecurity">
              <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-6 py-3 rounded-full group-hover:scale-110 transition-all duration-300">
                Explore Security Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="mt-8 animate-fade-in animation-delay-600">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center"
                alt="Cybersecurity visualization"
                width={300}
                height={200}
                className="rounded-2xl hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
