/** @format */

"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your enquiry has been submitted successfully. Our team will get
                back to you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
              >
                Submit Another Enquiry
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="py-16 lg:py-24 bg-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology?
              Fill out the form below and let's discuss how Cygen can help you
              achieve your digital goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            <div className="lg:col-span-1 animate-slide-in-left">
              <div className="bg-white rounded-3xl p-8 shadow-sm h-fit sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">hello@cygen.com.au</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+61 2 8123 4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Locations
                      </div>
                      <div className="text-gray-600">
                        Sydney, Melbourne, Brisbane
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-pink-50">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Free Consultation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Book a free 30-minute strategy session to discuss your
                    project requirements and get expert advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 animate-slide-in-right animation-delay-200">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          required
                          placeholder="John"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          required
                          placeholder="Doe"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+61 4XX XXX XXX"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Company Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Company Name
                        </label>
                        <Input
                          id="company"
                          placeholder="Your Company Pty Ltd"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Industry
                        </label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">
                              Technology
                            </SelectItem>
                            <SelectItem value="healthcare">
                              Healthcare
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Give us some details.
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Give us some details."
                        className="w-full h-24"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="agreement" required className="mt-1" />
                    <label
                      htmlFor="agreement"
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      I agree to Cygen's{" "}
                      <a
                        href="/privacy"
                        className="text-blue-600 hover:underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="/terms"
                        className="text-blue-600 hover:underline"
                      >
                        Terms of Service
                      </a>
                      . I consent to being contacted about my enquiry.
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-full group disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
