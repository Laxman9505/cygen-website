/** @format */

"use client";

import MobileMenu from "@/components/navigation/mobile-menu";
import NavigationMenu from "@/components/navigation/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pink-50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/cygen-logo.png"
              alt="Cygen - Empowering Digital Transformation"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:block">
            <NavigationMenu />
          </div>

          <div className="hidden lg:block">
            <Link href="/enquiry">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full">
                Book a Free Strategy Session
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}
