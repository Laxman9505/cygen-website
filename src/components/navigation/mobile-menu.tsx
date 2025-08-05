/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { navigationData } from "@/data/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50 max-h-screen overflow-y-auto">
      <nav className="py-4">
        {navigationData.map((section) => (
          <div
            key={section.title}
            className="border-b border-gray-100 last:border-b-0"
          >
            <button
              onClick={() =>
                setExpandedSection(
                  expandedSection === section.title ? null : section.title
                )
              }
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50"
            >
              <span className="font-medium">{section.title}</span>
              {expandedSection === section.title ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>

            {expandedSection === section.title && (
              <div className="bg-gray-50">
                {section.overview && (
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {section.overview.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {section.overview.description}
                    </p>
                    {/* <Link href={section.overview.ctaHref} onClick={onClose}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-sm py-2">
                        {section.overview.ctaText}
                      </Button>
                    </Link> */}
                  </div>
                )}
                <div className="grid grid-cols-1 gap-1">
                  {section.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 px-6 py-3 hover:bg-blue-50 transition-all duration-200 group hover:scale-105"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-all duration-200 group-hover:scale-110">
                        <item.icon className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="px-4 py-4">
          <Link href={"/enquiry"}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Book a Free Strategy Session
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
