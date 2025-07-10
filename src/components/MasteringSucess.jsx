import React from "react";
import SucessImg from "../assets/sucess.png";
import triangleImg from "../assets/whitesvg.png";
const BookPublicationPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto mt-30">
        {/* White Chevron Down */}
        <img
          src={triangleImg}
          alt="Triangle Divider"
          className="mx-auto -mt-46 w-full h-auto"
        />

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-30">
          {/* Left Side - Book Image */}
          <div className="lg:w-1/2">
            <div className="relative max-w-md mx-auto">
              {/* Main Image with proper aspect ratio and no black background */}
              <img
                src={SucessImg}
                alt="Mastering Success in Contact Centers Book"
                className="relative z-10 w-full h-full object-contain border border-[#D0A151]  shadow-2xl"
                style={{ borderWidth: "1.5px" }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Latest Publication Badge */}
            <div className="inline-block mb-6">
              <span className="bg-[#FDAA5633] text-[#D0A151] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                LATEST PUBLICATION
              </span>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#D0A151]  to-[#FFFFFF] bg-clip-text text-transparent">
                Mastering Success in Contact Centres
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Unlock the secrets to exceptional customer service and operational
              excellence. This comprehensive guide provides proven strategies,
              real-world case studies, and actionable insights for contact
              centre leaders and professionals.
            </p>

            {/* Features List */}
            <div className="mb-8 text-left">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D0A151] rounded-full"></div>
                  <span className="text-gray-300">
                    Strategic frameworks for contact centre optimization
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D0A151] rounded-full"></div>
                  <span className="text-gray-300">
                    Real-world case studies and best practices
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D0A151] rounded-full"></div>
                  <span className="text-gray-300">
                    Leadership techniques for team excellence
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D0A151] rounded-full"></div>
                  <span className="text-gray-300">
                    Technology integration and digital transformation
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#D0A151]  hover:from-yellow-600 hover:to-orange-600 text-black font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                DOWNLOAD FREE SAMPLE
              </button>
              <button className="border-2 border-[#D0A151] text-[#D0A151] hover:border-yellow-500 hover:text-yellow-500 font-semibold py-3 px-8 rounded-full transition-all duration-200 flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                READ ONLINE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPublicationPage;
