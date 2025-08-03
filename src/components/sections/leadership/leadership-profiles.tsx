/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Award, Linkedin, Mail, Users } from "lucide-react";
import { useEffect, useState } from "react";

const leaders = [
  {
    name: "Venkat Bhasum",
    title: "Founder & CEO",
    company: "CYGEN",
    image: "/images/leadership/venkat.jpg",
    bio: `With over a decade of experience driving technology innovation across retail and hospitality, Venkat Bhasum founded CYGEN with a singular vision: to empower local businesses with intelligent, scalable, and affordable digital solutions.

What started as a bold idea during the challenges of the COVID era has now grown into a trusted platform supporting hundreds of venues across Australia. Venkat blends his expertise in software engineering, operations, and business strategy to build tools that are both practical and powerful—from point of sale and digital signage to smart rostering and online ordering.

Under his leadership, CYGEN has evolved into an integrated tech ecosystem, tailored for the fast-moving needs of food service, retail, and franchise operations. Venkat remains deeply involved in product development and client success, ensuring that CYGEN delivers value from Day One.

His approach is grounded in customer-first thinking, continuous innovation, and a belief that every small business should have access to enterprise-grade technology—without the enterprise price tag.`,
    highlights: [
      "Founded CYGEN during COVID era",
      "Over 10 years in tech innovation",
      "Supports hundreds of venues across Australia",
      "Expert in software engineering & business strategy",
    ],
    stats: [
      { label: "Years Experience", value: "10+" },
      { label: "Venues Supported", value: "500+" },
      { label: "Team Members", value: "25+" },
    ],
  },
  {
    name: "David Forshaw",
    title: "Chief Advisor",
    company: "CYGEN",
    image: "/images/leadership/david.jpg",
    bio: `David is a strategic advisor to Cygen Pty Ltd, bringing a hands-on, consultative approach to business engagement, market strategy, and solution development to drive the company's business direction, growth and customer success. Working closely with Cygen's executive team and customers, he helps design and deliver tailored solutions that enhance safety, operational efficiency, and profitability across a varied market place. By leveraging his deep industry insight and collaborative style, David plays a pivotal role in strengthening Cygen's reputation as a trusted technology partner, delivering solutions aligned to customer needs that generate measurable impact and lasting value.

David's career spans Australia-wide and international markets, with extensive experience across SME, Industrial (mining, petrochemical), Corporate, Government (State and Federal), and Offshore oil-gas and LNG sectors. He has led strategic initiatives in business development, key account and channel management; and technology integration across critical industries including satellite and wireless telecommunications (air, land, and sea), emergency and public safety systems, defence, health, utilities, construction, and transport.

His global footprint includes high-impact engagements in Southeast Asia, China, Mongolia, South Africa, Kazakhstan, Latin America, and New Zealand, delivering innovative solutions that improve operational resilience and business bottom lines.`,
    highlights: [
      "Strategic advisor with global experience",
      "Expert in business development & technology integration",
      "Extensive experience across multiple industries",
      "International market expertise across 8+ countries",
    ],
    stats: [
      { label: "Industries Served", value: "15+" },
      { label: "Countries Worked", value: "8+" },
      { label: "Years Experience", value: "20+" },
    ],
  },
];

export function LeadershipProfiles() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Users className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 text-sm font-medium">
              Leadership Team
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Minds Behind
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              CYGEN
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leadership team combines decades of experience in technology,
            business strategy, and customer success to drive innovation in the
            digital solutions space.
          </p>
        </div>

        {/* Leadership Profiles */}
        <div className="space-y-24">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div
                  className={`lg:flex ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Profile Image & Stats */}
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-12">
                    <div className="text-center">
                      <div className="relative inline-block mb-6">
                        <img
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          className="w-48 h-48 rounded-2xl object-cover border-4 border-white/20 shadow-2xl"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-orange-500 rounded-full p-3 shadow-lg">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-2">
                        {leader.name}
                      </h2>
                      <p className="text-blue-200 text-lg mb-2">
                        {leader.title}
                      </p>
                      <p className="text-blue-300 mb-6">{leader.company}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-1 gap-4 mb-8">
                        {leader.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                          >
                            <div className="text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-blue-200 text-sm">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex gap-3 justify-center">
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300"
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        About {leader.name.split(" ")[0]}
                      </h3>
                      <div className="prose prose-lg text-gray-600 leading-relaxed">
                        {leader.bio.split("\n\n").map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {leader.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                          >
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
