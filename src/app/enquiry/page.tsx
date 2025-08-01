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
import Link from "next/link";
import type React from "react";
import { useState } from "react";

export default function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "+61",
    phone: "",
    company: "",
    industry: "",
    message: "",
    agreement: false,
  });

  const phoneCountries = [
    { code: "+61", country: "Australia" },
    { code: "+64", country: "New Zealand" },
    { code: "+44", country: "United Kingdom" },
    { code: "+1", country: "Canada" },
  ];

  const auPhoneRegex = /^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validatePhoneNumber = (phone: string) => {
    if (formData.phoneCountry === "+61") {
      return auPhoneRegex.test(phone.replace(/\s/g, ""));
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.phone)) {
      alert("Please enter a valid Australian phone number");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: `${formData.phoneCountry}${formData.phone}`,
          company: formData.company,
          industry: formData.industry,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneCountry: "+61",
          phone: "",
          company: "",
          industry: "",
          message: "",
          agreement: false,
        });
      } else {
        throw new Error(result.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send enquiry. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-lg animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-bounce-slow">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-6">
                Thank You!
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Your enquiry has been submitted successfully. Our team will get
                back to you within 24 hours.
              </p>
              <Link href="/enquiry">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-full transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Submit Another Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="py-16 lg:py-16 bg-gray-50">
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
                      <div className="text-gray-600">
                        sales@cygenconsulting.com.au
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">
                        {" "}
                        +61 458 116 301/+61 402 502 649
                      </div>
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
                        Level 3/90 Phillip St, Parramatta, NSW - 2150
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50">
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
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
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
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
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
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <div className="flex gap-2">
                          <Select
                            value={formData.phoneCountry}
                            onValueChange={(value) =>
                              handleInputChange("phoneCountry", value)
                            }
                          >
                            <SelectTrigger className="w-[120px] shrink-0">
                              <SelectValue placeholder="Country" />
                            </SelectTrigger>
                            <SelectContent
                              position="popper"
                              className="z-[100]"
                            >
                              {phoneCountries.map((country) => (
                                <SelectItem
                                  key={country.code}
                                  value={country.code}
                                >
                                  {country.code}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder={
                              formData.phoneCountry === "+61"
                                ? "412 345 678"
                                : "Phone number"
                            }
                            className="w-full"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                          />
                        </div>
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
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Industry
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("industry", value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent position="popper">
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
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreement"
                      required
                      className="mt-1"
                      checked={formData.agreement}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreement", checked as boolean)
                      }
                    />
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
