/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const blogPosts = [
  {
    id: "ai-in-kitchen-cygen-pos",
    title:
      "AI in the Kitchen? How Cygen POS is Powering Smart Kitchens for Australian Hospitality Businesses",
    excerpt:
      "Discover how AI-powered POS systems are revolutionizing kitchen operations, reducing waste, and improving efficiency in Australian hospitality businesses.",
    image: "https://cygendev.com/blog/uploads/AI%20POS.jpg",
    date: "2024-01-15",
    category: "AI Technology",
  },
  {
    id: "pos-slowing-down-qsrs",
    title:
      "Is Your POS Slowing You Down? Here's How Cygen POS Helps QSRs Serve Faster",
    excerpt:
      "Learn how modern POS systems can dramatically improve service speed in quick service restaurants with over 1025+ successful installations.",
    image: "https://cygendev.com/blog/uploads/Cygen%20QSRs.png",
    date: "2024-01-12",
    category: "QSR Solutions",
  },
  {
    id: "smart-pos-reduce-food-waste",
    title: "How Smart POS Systems Help You Reduce Food Waste & Save Costs?",
    excerpt:
      "Explore real-time inventory tracking, menu performance insights, and automated reordering features that help restaurants reduce waste and increase profits.",
    image: "https://cygendev.com/blog/uploads/Smart%20POS.jpg",
    date: "2024-01-10",
    category: "Cost Management",
  },
  {
    id: "troubleshooting-pos-problems",
    title: "Troubleshooting Common POS System Problems and How to Fix Them?",
    excerpt:
      "A comprehensive guide to identifying and resolving the most common POS system issues that can disrupt your business operations.",
    image: "https://cygendev.com/blog/uploads/POS%20Troubleshooting.png",
    date: "2024-01-08",
    category: "Technical Support",
  },
  {
    id: "ai-kitchen-hospitality-duplicate",
    title:
      "AI in the Kitchen? How Cygen POS is Powering Smart Kitchens for Australian Hospitality",
    excerpt:
      "Deep dive into how artificial intelligence is transforming kitchen management and customer service in the Australian hospitality industry.",
    image: "https://cygendev.com/blog/uploads/AI%20POS.jpg",
    date: "2024-01-05",
    category: "AI Technology",
  },
  {
    id: "pos-qsrs-serve-faster-duplicate",
    title:
      "Is Your POS Slowing You Down? Here's How Cygen POS Helps QSRs Serve Faster",
    excerpt:
      "Advanced strategies and features that help quick service restaurants optimize their operations and deliver exceptional customer experiences.",
    image: "https://cygendev.com/blog/uploads/Cygen%20QSRs.png",
    date: "2024-01-03",
    category: "QSR Solutions",
  },
];

const getCategoryColor = (category: string) => {
  const colors = {
    "AI Technology": "bg-gradient-to-r from-blue-500 to-blue-600",
    "QSR Solutions": "bg-gradient-to-r from-orange-500 to-orange-600",
    "Cost Management": "bg-gradient-to-r from-green-500 to-green-600",
    "Technical Support": "bg-gradient-to-r from-purple-500 to-purple-600",
  };
  return (
    colors[category as keyof typeof colors] ||
    "bg-gradient-to-r from-gray-500 to-gray-600"
  );
};

export function BlogGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mr-3 animate-pulse"></span>
            Latest Insights & Updates
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">CYGEN</span> Blog
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, tips, and innovations in POS
            systems, restaurant technology, and business optimization
            strategies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-2 ${getCategoryColor(
                      post.category
                    )} text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Floating Read More Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Link href={`/blog/${post.id}`}>
                    <Button
                      size="sm"
                      className="bg-white/90 hover:bg-white text-gray-900 shadow-lg backdrop-blur-sm rounded-full px-4 py-2 font-semibold"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <CardContent className="p-6 relative">
                {/* Date */}
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-4 ">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="pt-4 border-t border-gray-100">
                  <Link href={`/blog/${post.id}`} className="block">
                    <Button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
