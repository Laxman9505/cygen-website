/** @format */

import { Button } from "@/components/ui/button";
import { Briefcase, Clock, MapPin, Users } from "lucide-react";

interface JobPosition {
  title: string;
  location: string;
  description: string;
  type: string;
  department: string;
}

const jobPositions: JobPosition[] = [
  {
    title: "IT Support Specialist",
    location: "Sydney",
    description:
      "Provide technical assistance and support to our clients, ensuring smooth operation of their IT systems. Troubleshoot hardware and software issues, and maintain network integrity.",
    type: "Full-time",
    department: "Technical Support",
  },
  {
    title: "Sales Officer",
    location: "Sydney",
    description:
      "Drive sales growth by identifying new business opportunities, building client relationships, and presenting CYGEN's innovative solutions to potential customers.",
    type: "Full-time",
    department: "Sales",
  },
  {
    title: "IT Graduate Program",
    location: "Sydney",
    description:
      "A comprehensive program designed for recent IT graduates to gain hands-on experience across various departments, including development, support, and project management.",
    type: "Graduate Program",
    department: "Multiple Teams",
  },
];

export default function OpenPositions() {
  return (
    <section
      id="open-positions"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing team and help shape the future of business
            technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobPositions.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {job.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {job.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{job.department}</span>
                </div>
              </div>

              {/* Apply Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-300">
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Don't see the right role?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
              Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
              Send Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
