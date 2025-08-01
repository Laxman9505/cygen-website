/** @format */

import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface Overview {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  overview?: Overview;
  menuTitle: string;
  position?: "left" | "right";
}

export default function DropdownMenu({
  items,
  overview,
  menuTitle,
  position = "left",
}: DropdownMenuProps) {
  const itemsPerRow = 2;
  const rows = [];

  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow));
  }

  const getDropdownWidth = () => {
    if (menuTitle === "Services") return "w-[56rem]";
    if (menuTitle === "Products") return "w-[46rem]";
    if (menuTitle === "Company") return "w-[46rem]";
    if (menuTitle === "Resources") return "w-[40rem]";
    return "w-[48rem]";
  };

  return (
    <div
      className={`absolute top-full -mt-2 ${getDropdownWidth()} max-h-[28rem] bg-white rounded-2xl shadow-xl border border-gray-100 z-50 lg:block hidden transform transition-all duration-200 ease-out animate-in fade-in-0 slide-in-from-left-2`}
      style={{
        left: 0,
        maxWidth: "calc(100vw - 2rem)",
      }}
    >
      <div className="flex">
        {overview && (
          <div className="w-1/3 bg-gray-50 p-4 rounded-l-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {overview.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-base">
              {overview.description}
            </p>
            <Link href={overview.ctaHref}>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 text-sm">
                {overview.ctaText}
              </Button>
            </Link>
          </div>
        )}

        <div className={`${overview ? "w-2/3" : "w-full"} p-4`}>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{menuTitle}</h3>
          <div className="space-y-2 max-h-[20rem] overflow-y-auto">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-2 gap-3">
                {row.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-2 p-2 hover:bg-blue-50 rounded-lg transition-all duration-200 group hover:scale-105"
                  >
                    <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-all duration-200 flex-shrink-0 group-hover:scale-110">
                      <item.icon className="h-4 w-4 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-base">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
