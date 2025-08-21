/** @format */

"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const faqData = [
  {
    question: "What cloud platforms do you support?",
    answer:
      "We support all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud solutions. Our certified cloud architects can help you choose the right platform based on your specific business requirements, compliance needs, and budget considerations.",
  },
  {
    question: "How long does cloud migration typically take?",
    answer:
      "Cloud migration timelines vary depending on the complexity and size of your infrastructure. Simple migrations can take 2-4 weeks, while complex enterprise migrations may take 3-6 months. We provide a detailed migration roadmap and timeline after conducting a thorough assessment of your current environment.",
  },
  {
    question: "What security measures do you implement for cloud services?",
    answer:
      "We implement comprehensive security measures including data encryption at rest and in transit, multi-factor authentication, identity and access management (IAM), network security groups, regular security audits, and compliance with Australian data protection regulations including the Privacy Act and industry-specific requirements.",
  },
  {
    question: "Do you provide 24/7 support for cloud infrastructure?",
    answer:
      "Yes, we offer 24/7 monitoring and support for all our managed cloud services. Our Australian-based support team provides round-the-clock monitoring, proactive issue resolution, and emergency response to ensure your cloud infrastructure maintains optimal performance and availability.",
  },
];

export default function CloudFAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);
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

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Get answers to common questions about our cloud services and IT
            solutions.
            <br className="hidden sm:block" />
            Can't find what you're looking for? Contact our team for
            personalized assistance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl sm:rounded-2xl transition-colors duration-300"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-4 sm:pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/enquiry">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Contact Our Experts
              </button>
            </Link>
            <Link href="/enquiry">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
