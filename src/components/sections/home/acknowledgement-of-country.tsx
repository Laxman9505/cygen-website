/** @format */

export default function AcknowledgementOfCountry() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-2 bg-gradient-to-b from-red-500 via-yellow-500 to-blue-500 rounded-full opacity-60"></div> */}

            {/* <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-gray-300"></div> */}

            <div className="ml-6 sm:ml-8 lg:ml-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-6 sm:mb-8 text-center">
                Acknowledgement of Country
              </h2>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
                <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  <p>
                    Cygen Consulting Pty Ltd acknowledges the Traditional Owners
                    of the land where we work and live. We pay our respects to
                    Elders past, present and emerging.
                  </p>

                  <p>
                    We celebrate the stories, culture and traditions of
                    Aboriginal and Torres Strait Islanders of all communities
                    who also work and live on this land.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
