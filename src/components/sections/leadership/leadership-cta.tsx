/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Mail,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

export function LeadershipCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect with Our
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Leadership Team?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you're looking to discuss partnership opportunities, explore
            our solutions, or learn more about CYGEN's vision, our leadership
            team is here to help.
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Schedule a Leadership Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Calendar,
              title: "Schedule a Call",
              description:
                "Book a direct meeting with our leadership team to discuss your business needs.",
              action: "Book Meeting",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: MessageCircle,
              title: "Request Demo",
              description:
                "Get a personalized demonstration of our solutions from our executive team.",
              action: "Request Demo",
              color: "from-orange-500 to-orange-600",
            },
            {
              icon: Users,
              title: "Meet the Team",
              description:
                "Connect with our leadership team at industry events and conferences.",
              action: "View Events",
              color: "from-blue-500 to-blue-600",
            },
          ].map((option, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {option.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 bg-transparent"
                >
                  {option.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Contact */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Direct Contact
            </h3>
            <p className="text-gray-300 mb-6">
              For immediate assistance or urgent inquiries, reach out to our
              leadership team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Call Leadership
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Email Leadership
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
