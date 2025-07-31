/** @format */

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            What People Say
            <br />
            About US
          </h2>
        </div>

        <div className="max-w-6xl mx-auto animate-fade-in-up animation-delay-300">
          <div className="bg-blue-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="grid lg:grid-cols-2">
              <div className="bg-blue-200 p-12 flex flex-col justify-center animate-slide-in-left">
                <div className="mb-6">
                  <div className="w-12 h-12 text-blue-600 mb-4 animate-bounce-in animation-delay-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full"
                    >
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>

                <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 mb-6 leading-relaxed animate-fade-in-up animation-delay-400">
                  "Saving time and simplifying the process and saving money. It
                  was the triple trifecta."
                </blockquote>
              </div>

              <div className="relative animate-slide-in-right animation-delay-200">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Team working together in office"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
