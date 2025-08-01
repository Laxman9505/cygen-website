/** @format */

"use client";

import { navigationData } from "@/data/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu";

export default function NavigationMenu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="flex items-center space-x-8">
      {navigationData.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setActiveDropdown(item.title)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer py-2 transition-all duration-200 group">
            <span className="font-medium group-hover:scale-105 transition-transform duration-200">
              {item.title}
            </span>
            <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
          </div>

          {activeDropdown === item.title && (
            <div className="animate-in fade-in-0 slide-in-from-top-2 duration-300">
              <DropdownMenu
                items={item.items}
                overview={item.overview}
                menuTitle={item.title}
                position="right"
              />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
