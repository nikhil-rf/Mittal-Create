import React from "react";
import IMG from "../assets/podcast.png";
import triangleImg from "../assets/blacksvg.png";
const PodcastPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 font-[Montserrat]">
      {/* Black Chevron Fortress */}
      <img
        src={triangleImg}
        alt="Triangle Divider"
        className="mx-auto -mt-16 w-full h-auto"
      />

      <div className="max-w-6xl mx-auto mt-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[#D0A151] text-5xl font-bold tracking-wider mb-2">
            PODCASTS
          </h1>
          <div className="w-69 h-2 bg-[#D0A151] mx-auto"></div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image with overlay */}
          <div className="relative lg:w-1/2">
            <div className="relative">
              {/* Decorative element behind image */}
              <div className="absolute -bottom-8 right-4 w-[80%] h-[100%] bg-[#D0A151] opacity-30  z-0"></div>

              {/* Main podcast image */}
              <div className="w-full max-w-md mx-auto border-[#D0A151] border-3 relative z-10">
                <img
                  src={IMG}
                  alt="Sarthak Mittal Podcast"
                  className="w-full h-auto  shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              A podcast for makers and entrepreneurs
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Welcome to our podcast series dedicated to makers and
              entrepreneurs. Join industry leaders and innovators as they share
              insights, stories, and practical advice to inspire your journey.
              Whether you're building a startup or launching your next big idea,
              these conversations offer valuable guidance and motivation to help
              you succeed.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#D0A151] hover:bg-[#D0A151] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                WATCH PODCAST
              </button>
              <button className="border-2 border-[#D0A151] text-[#D0A151] hover:bg-[#D0A151] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200">
                JOIN FOR A PODCAST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;
