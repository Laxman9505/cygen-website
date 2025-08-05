/** @format */
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-pink-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-slide-in-left">
              Australian-Owned,
              <br />
              World-Class IT
            </h1>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed animate-slide-in-left animation-delay-200">
              Modern Solutions, Unwavering Reliability, and Flexible
              <br />
              Pricing to Propel Your Business Forward.
            </p>

            <div className="flex items-start space-x-3 mb-8 animate-slide-in-left animation-delay-400">
              <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                Cygen empowers Australian businesses with cutting-edge Cloud,
                <br />
                Data & AI, Cybersecurity, and Digital solutions, crafted for
                local needs
                <br />
                and globally proven
              </p>
            </div>

            <div className="animate-slide-in-left animation-delay-600">
              <Link href="/enquiry">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-6 text-lg rounded-full group hover:scale-105 transition-all duration-300">
                  Book a Free Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden ">
              <Image
                src="/images/hero-person.jpg"
                alt="Professional working on laptop"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute top-8 right-4 bg-yellow-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-float">
              Expand your team and hire globally
            </div>

            <div className="absolute top-32 left-4 bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-float">
              Managed Services
            </div>

            <div className="absolute bottom-32 right-16 bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-float">
              Digital Transformation
            </div>

            <div className="absolute bottom-8 left-8 bg-orange-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-float">
              Cloud Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
