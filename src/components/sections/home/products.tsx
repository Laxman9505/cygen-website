/** @format */

"use client";

import {
  Code,
  Database,
  Monitor,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const services = [
  {
    title: "Custom App Development",
    description: "We develop custom apps for your business",
    href: "/services/custom-app-development",
    icon: Smartphone,
  },
  {
    title: "Managed IT Services",
    description:
      "We provide managed IT services to help you manage your IT infrastructure",
    href: "/services/managed-it-services",
    icon: Shield,
  },
  {
    title: "Data Visualization",
    description:
      "We provide data visualization services to help you make data-driven decisions",
    href: "/services/data-visualization",
    icon: Database,
  },
  {
    title: "Cloud Services & IT Infrastructure",
    description:
      "We provide cloud services and IT infrastructure to help you manage your IT infrastructure",
    href: "/services/cloud-services-and-it-infrastructure",
    icon: Smartphone,
  },
  {
    title: "Cybersecurity",
    description:
      "We provide cybersecurity services to help you protect your data",
    href: "/services/cybersecurity",
    icon: Code,
  },
  {
    title: "IT Staff Augmentation",
    description:
      "We provide IT staff augmentation services to help you manage your IT infrastructure",
    href: "/services/it-staff-augmentation",
    icon: Code,
  },
];

const products = [
  {
    title: "CRM",
    description:
      "We provide CRM solutions to help you manage your customers and sales",
    href: "/products/cygen-crm",
    icon: Users,
  },
  {
    title: "POS",
    description: "We provide POS solutions to help you manage your sales",
    href: "/products/cygen-pos",
    icon: Code,
  },
  {
    title: "Connect",
    description:
      "We provide Connect solutions to help you manage your customers and sales",
    href: "/products/cygen-connect",
    icon: Users,
  },
  {
    title: "Cygnage",
    description:
      "We provide Cygnage solutions to help you manage your customers and sales",
    href: "/products/cygnage",
    icon: Users,
  },
  {
    title: "Saute",
    description:
      "We provide Saute solutions to help you manage your customers and sales",
    href: "/products/saute",
    icon: Users,
  },
  {
    title: "Online Ordering",
    description:
      "We provide Online Ordering solutions to help you manage your customers and sales",
    href: "/products/cygen-online-ordering",
    icon: Users,
  },
  {
    title: "Self Ordering Kiosk",
    description:
      "We provide self ordering kiosk solutions to help you manage your customers and sales",
    href: "/products/self-ordering-kiosk",
    icon: Monitor,
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("services");
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = activeTab === "services" ? services : products;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Products & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of innovative solutions designed to
            transform your business
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                activeTab === "services"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                activeTab === "products"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Products
            </button>
          </div>
        </div>

        <Slider {...sliderSettings}>
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.title} className="px-2">
                <Link href={item.href}>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
