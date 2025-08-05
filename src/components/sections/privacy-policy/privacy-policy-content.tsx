/** @format */

"use client";

import {
  AlertCircle,
  Eye,
  FileText,
  Globe,
  Lock,
  Mail,
  Monitor,
  RefreshCw,
  Shield,
} from "lucide-react";
import Link from "next/link";

export function PrivacyPolicyContent() {
  const sections = [
    {
      id: "respect-privacy",
      title: "We respect your privacy",
      icon: Shield,
      content: [
        {
          subtitle: "1.1.",
          text: "Cygen Consulting Pty Ltd respects your right to privacy and is committed to safeguarding the privacy of our customers and website visitors. We adhere to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth). This policy sets out how we collect and treat your personal information.",
        },
        {
          subtitle: "1.2.",
          text: '"Personal information" is information we hold which is identifiable as being about you.',
        },
      ],
    },
    {
      id: "collection",
      title: "Collection of personal information",
      icon: FileText,
      content: [
        {
          subtitle: "2.1",
          text: "Cygen Consulting Pty Ltd will, from time to time, receive and store personal information you enter onto our website, provided to us directly or given to us in other forms.",
        },
        {
          subtitle: "2.2",
          text: "You may provide basic information such as your name, phone number, address and email address to enable us to send information, provide updates and process your product or service order. We may collect additional information at other times, including but not limited to, when you provide feedback, when you provide information about your personal or business affairs, change your content or email preference, respond to surveys and/or promotions, provide financial or credit card information, or communicate with our customer support.",
        },
        {
          subtitle: "2.3",
          text: "Additionally, we may also collect any other information you provide while interacting with us.",
        },
      ],
    },
    {
      id: "how-collect",
      title: "How we collect your personal information",
      icon: Eye,
      content: [
        {
          subtitle: "3.1",
          text: "Cygen Consulting Pty Ltd collects personal information from you in a variety of ways, including when you interact with us electronically or in person, when you access our website and when we provide our services to you. We may receive personal information from third parties. If we do, we will protect it as set out in this Privacy Policy.",
        },
      ],
    },
    {
      id: "use-information",
      title: "Use of your personal information",
      icon: Globe,
      content: [
        {
          subtitle: "4.1",
          text: "Cygen Consulting Pty Ltd may use personal information collected from you to provide you with information, updates and our services. We may also make you aware of new and additional products, services and opportunities available to you. We may use your personal information to improve our products and services and better understand your needs.",
        },
        {
          subtitle: "4.2",
          text: "Cygen Consulting Pty Ltd may contact you by a variety of measures including, but not limited to telephone, email, sms or mail.",
        },
      ],
    },
    {
      id: "disclosure",
      title: "Disclosure of your personal information",
      icon: AlertCircle,
      content: [
        {
          subtitle: "5.1",
          text: "We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this Policy. Personal information is only supplied to a third party when it is required for the delivery of our services.",
        },
        {
          subtitle: "5.2",
          text: "We may from time to time need to disclose personal information to comply with a legal requirement, such as a law, regulation, court order, subpoena, warrant, in the course of a legal proceeding or in response to a law enforcement agency request.",
        },
        {
          subtitle: "5.3",
          text: "We may also use your personal information to protect the copyright, trademarks, legal rights, property or safety of Cygen Consulting Pty Ltd.",
        },
      ],
    },
    {
      id: "security",
      title: "Security of your personal information",
      icon: Lock,
      content: [
        {
          subtitle: "6.1.",
          text: "Cygen Consulting Pty Ltd is committed to ensuring that the information you provide to us is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.",
        },
        {
          subtitle: "6.2.",
          text: "The transmission and exchange of information is carried out at your own risk. We cannot guarantee the security of any information that you transmit to us, or receive from us. Although we take measures to safeguard against unauthorised disclosures of information, we cannot assure you that personal information that we collect will not be disclosed in a manner that is inconsistent with this Privacy Policy.",
        },
      ],
    },
    {
      id: "access",
      title: "Access to your personal information",
      icon: Eye,
      content: [
        {
          subtitle: "7.1.",
          text: "You may request details of personal information that we hold about you in accordance with the provisions of the Privacy Act 1988 (Cth). A small administrative fee may be payable for the provision of information. If you would like a copy of the information, which we hold about you or believe that any information we hold on you is inaccurate, out of date, incomplete, irrelevant or misleading, please email us at support@cygenconsulting.com.au",
        },
        {
          subtitle: "7.2.",
          text: "We reserve the right to refuse to provide you with information that we hold about you, in certain circumstances set out in the Privacy Act.",
        },
      ],
    },
    {
      id: "complaints",
      title: "Complaints about privacy",
      icon: Mail,
      content: [
        {
          subtitle: "8.1.",
          text: "If you have any complaints about our privacy practises, please feel free to send in details of your complaints to 203/12 East Street, Granville, New South Wales, 2142. We take complaints very seriously and will respond shortly after receiving written notice of your complaint.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to Privacy Policy",
      icon: RefreshCw,
      content: [
        {
          subtitle: "9.1.",
          text: "Please be aware that we may change this Privacy Policy in the future. We may modify this Policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on our website or notice board. Please check back from time to time to review our Privacy Policy.",
        },
      ],
    },
    {
      id: "website",
      title: "Website",
      icon: Monitor,
      content: [
        {
          subtitle: "10.1.",
          text: "When you visit our website When you come to our website (www.cygen.com.au) we may collect certain information such as browser type, operating system, website visited immediately before coming to our site, etc. This information is used in an aggregated manner to analyse how people use our site, such that we can improve our service.",
        },
        {
          subtitle: "10.2.",
          text: "Cookies We may from time to time use cookies on our website. Cookies are very small files which a website uses to identify you when you come back to the site and to store details about your use of the site. Cookies are not malicious programs that access or damage your computer. Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. However, this may prevent you from taking full advantage of our website. Our website may from time to time use cookies to analyses website traffic and help us provide a better website visitor experience. In addition, cookies may be used to serve relevant ads to website visitors through third party services such as Google Adwords. These ads may appear on this website or other websites you visit.",
        },
        {
          subtitle: "10.3.",
          text: "Third party sites Our site may from time to time have links to other websites not owned or controlled by us. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware that Cygen Consulting Pty Ltd is not responsible for the privacy practises of other such websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personal identifiable information.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              PRIVACY POLICY
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Learn how CYGEN collects, uses, and protects your personal
              information
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="space-y-6 sm:space-y-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 sm:ml-16">
                  {section.content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                    >
                      <span className="text-orange-500 font-semibold flex-shrink-0 text-sm sm:text-base">
                        {item.subtitle}
                      </span>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Questions about our Privacy Policy?
          </h3>
          <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">
            If you have any questions or concerns about how we handle your
            personal information, please don't hesitate to contact us.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
