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
          <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer py-2">
            <span className="font-medium">{item.title}</span>
            <ChevronDown className="h-4 w-4" />
          </div>

          {activeDropdown === item.title && <DropdownMenu items={item.items} />}
        </div>
      ))}
    </nav>
  );
}
