/** @format */

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerSections = {
  services: [
    {
      name: "Custom App Development",
      href: "/services/custom-app-development",
    },
    {
      name: "Managed IT Services",
      href: "/services/managed-it-services",
    },
    {
      name: "Data Visualization",
      href: "/services/data-visualization",
    },
    {
      name: "Cloud Services & IT Infrastructure",
      href: "/services/cloud-services-and-it-infrastructure",
    },
    {
      name: "Cybersecurity",
      href: "/services/cybersecurity",
    },
  ],
  products: [
    {
      name: "CRM",
      href: "/products/cygen-crm",
    },
    {
      name: "POS",
      href: "/products/cygen-pos",
    },
    {
      name: "Connect",
      href: "/products/cygen-connect",
    },
    {
      name: "Cygnage",
      href: "/products/cygnage",
    },
    {
      name: "Saute",
      href: "/products/saute",
    },
    {
      name: "Online Ordering",
      href: "/products/cygen-online-ordering",
    },
    {
      name: "Self Ordering Kiosk",
      href: "/products/self-ordering-kiosk",
    },
  ],
  company: [
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Press & Media",
      href: "/media",
    },
    {
      name: "Career",
      href: "/careers",
    },
    {
      name: "Leadership",
      href: "/leadership",
    },
    {
      name: "Contact Us",
      href: "/enquiry",
    },
  ],
  resources: [
    {
      name: "Newsletters",
      href: "/blog",
    },
    {
      name: "Testimonials",
      href: "/resources/ramdom-resource-1",
    },
    {
      name: "Insights",
      href: "/resources/ramdom-resource-2",
    },
    {
      name: "Glossary / Help",
      href: "/resources/ramdom-resource-4",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <Image
              src="/images/cygen-logo.png"
              alt="Cygen"
              width={150}
              height={50}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-200 mb-6 max-w-md">
              Empowering Australian businesses with cutting-edge digital
              solutions. Transform your business with our world-class IT
              services.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-200" />
                <span className="text-gray-200">
                  sales@cygenconsulting.com.au
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-200" />
                <span className="text-gray-200">
                  +61 458 116 301/+61 402 502 649
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-200" />
                <span className="text-gray-200">
                  Level 3/90 Phillip St, Parramatta, NSW - 2150
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/cygenitconsulting",
                },
                { icon: Twitter, href: "#" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/cygen-consulting/",
                },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-50">Services</h3>
            <ul className="space-y-2">
              {footerSections.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-50">Products</h3>
            <ul className="space-y-2">
              {footerSections.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-50">Company</h3>
            <ul className="space-y-2">
              {footerSections.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-50">Resources</h3>
            <ul className="space-y-2">
              {footerSections.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Cygen Consulting Pty Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-200 hover:text-gray-50 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-200 hover:text-gray-50 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-200 hover:text-gray-50 text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
