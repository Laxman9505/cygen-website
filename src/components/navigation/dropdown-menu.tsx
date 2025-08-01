/** @format */

import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface DropdownMenuProps {
  items: DropdownItem[];
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <div className="absolute top-full left-0 -mt-2 w-[32rem] max-h-[32rem] overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100 py-4 z-50">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-start space-x-3 px-6 py-3 hover:bg-blue-50 transition-colors group"
        >
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
            <item.icon className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
