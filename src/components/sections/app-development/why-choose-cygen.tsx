/** @format */
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseCygen() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Here's why people choose to
            <br />
            work with Cygen
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative max-w-md mx-auto">
              <div
                className={`absolute -top-8 -left-8 w-32 h-32 bg-blue-400 rounded-3xl transition-all duration-1000 delay-500 ${
                  isVisible ? "scale-100 rotate-0" : "scale-90 rotate-12"
                }`}
              />
              <div
                className={`absolute -bottom-8 -right-8 w-24 h-32 bg-orange-400 rounded-3xl transition-all duration-1000 delay-700 ${
                  isVisible ? "scale-100 rotate-0" : "scale-90 -rotate-12"
                }`}
              />

              <div
                className={`relative bg-gray-200 rounded-3xl p-6 shadow-xl transition-all duration-1000 delay-600 ${
                  isVisible ? "scale-100 rotate-0" : "scale-95 rotate-3"
                }`}
              >
                <div className="bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 text-center">
                      <div className="text-xs text-gray-600">MARKETING BY</div>
                      <div className="text-sm font-semibold text-gray-800">
                        Studio Shadyve
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Looking to grow
                          <br />
                          on social media?
                        </h3>
                      </div>

                      <div className="bg-gray-900 text-white rounded-2xl p-4 text-center">
                        <p className="text-sm font-medium">
                          Get in touch for a free
                          <br />
                          consultation!
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-xs text-gray-500">
                          REALLYGREATSITE.COM
                        </p>
                        <div className="w-4 h-4 mx-auto mt-1">
                          <div className="w-full h-full border-2 border-gray-400 rounded-sm relative">
                            <div className="absolute top-0 left-0 w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1 -translate-y-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className={`flex items-start space-x-4 hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div
                className={`w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-all duration-500 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Quality at its best
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Delivering reliable, stylish solutions that are easy to use is
                  everything to us. When you want it done well, choose us
                  because we have more than 8 years of experience, a staff made
                  up entirely of Australians, and tested design & development
                  procedures.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start space-x-4 hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div
                className={`w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-all duration-500 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
                style={{ transitionDelay: "1100ms" }}
              >
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Understand your Insights
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The reason you will pick Cygen is because our team spends the
                  time comprehending what you are seeking to accomplish and
                  considering your most pressing business issues. We provide a
                  plethora of knowledge and expertise, and we frequently make
                  amazing suggestions to produce a result that surpasses your
                  original expectations.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start space-x-4 hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <div
                className={`w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-all duration-500 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
                style={{ transitionDelay: "1300ms" }}
              >
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Innovative yet Convenient
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Cygen offers reliable, innovative, and tailored IT solutions
                  with local expertise to empower Australian business growth.
                </p>

                <div
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "1400ms" }}
                >
                  <Link href="/enquiry">
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full group hover:scale-105 transition-all duration-300 bg-transparent"
                    >
                      Book A Call
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
