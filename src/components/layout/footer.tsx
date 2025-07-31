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
  products: [
    { name: "Cloud Platform", href: "/products/cloud-platform" },
    { name: "Data Analytics", href: "/products/data-analytics" },
    { name: "Security Shield", href: "/products/security-shield" },
    { name: "Mobile Solutions", href: "/products/mobile-solutions" },
  ],
  solutions: [
    { name: "Enterprise", href: "/solutions/enterprise" },
    { name: "Manufacturing", href: "/solutions/manufacturing" },
    { name: "E-commerce", href: "/solutions/ecommerce" },
    { name: "Healthcare", href: "/solutions/healthcare" },
  ],
  company: [
    { name: "About Us", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Leadership", href: "/company/leadership" },
    { name: "News", href: "/company/news" },
  ],
  resources: [
    { name: "Blog", href: "/resources/blog" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Support", href: "/resources/support" },
    { name: "Downloads", href: "/resources/downloads" },
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
                <span className="text-gray-200">hello@cygen.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-200" />
                <span className="text-gray-200">+61 2 8123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-200" />
                <span className="text-gray-200">
                  Sydney, Melbourne, Brisbane
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
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
            <h3 className="font-semibold mb-4 text-gray-50">Solutions</h3>
            <ul className="space-y-2">
              {footerSections.solutions.map((link) => (
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
            © {new Date().getFullYear()} Cygen Pty Ltd. All rights reserved.
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
