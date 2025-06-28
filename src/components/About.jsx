import React from 'react';
import profileImg from '../assets/about(1).png'; 

const AboutSarthak = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-1 md:px-20 relative">
      {/* Top Chevron */}
      <div className="w-0 h-0 border-x-[80px] border-x-transparent border-t-[40px] border-t-black mx-auto -mt-20"></div>

      {/* Section Container */}
      <div className="bg-white p-6 md:p-10 flex flex-col md:flex-row items-start gap-10 relative z-20">
        {/* Left Content */}
        <div className="relative  md:w-2/3 ">
          {/* Title */}
          <div className="relative inline-block mb-6">
            <span className="text-5xl -ml-9 font-bold text-[#D0A151] font-Montserrat px-2 py-2">
              ABOUT SARTHAK MITTAL
            </span>
          </div>

            <div className="absolute -mt-30 -ml-19 w-20 h-70 bg-[#E6C584] opacity-50 z-40"></div>

            <div className="relative z-20 border-2 border-black rounded-xl p-6 w-222 -ml-8 bg-white flex-1 ">
              <div className="relative z-10 space-y-2 space-x-5 text-black text-sm lg:text-base leading-relaxed p-2 ">
                {/* First bullet point */}
                <div className="flex items-start space-x-6 ">
                  <span className="text-black font-bold mt-1 text-lg space-x-6">•</span>
                  <p className="text-justify space-x-6">
                    <span className="font-bold ">FOUNDER & CEO OF MITTAL ALLIANCE INDUSTRIES PRIVATE LIMITED (INDIA)</span> AND{' '} <br />
                    <span className="font-bold">MITTAL BRANDTECH INC. (COLORADO, USA)</span> — TWO SUCCESSFUL ENTERPRISES <br />
                    PARTNERING WITH LEADING BRANDS AND <span className="font-bold">2000+ INDUSTRIALISTS</span> WORLDWIDE.
                  </p>
                </div>
                
                {/* Second bullet point */}
                <div className="flex items-start space-x-6">
                  <span className="text-black font-bold mt-1 text-lg">•</span>
                  <p className="text-justify">
                    RECOGNIZED AS ONE OF THE <span className="font-bold">MOST TRUSTED BRANDING EXPERTS</span> ACROSS APAC, USA, <br />
                    AND EUROPE, WITH MULTIPLE ASSOCIATED VENTURES AND HIGH-IMPACT CLIENT <br />
                    PORTFOLIOS.
                  </p>
                </div>
                
                {/* Third bullet point */}
                <div className="flex items-start space-x-6">
                  <span className="text-black font-bold mt-1 text-lg">•</span>
                  <p className="text-justify">
                    CREATOR OF <span className="font-bold">BADVERSE</span> (BREAKDOWN, ANALYSIS, AND DECISION), A THRIVING <br />
                    COMMUNITY OF OVER <span className="font-bold">10,000 MEMBERS</span> DEDICATED TO STRATEGIC PERSONAL AND <br />
                    BUSINESS TRANSFORMATION.
                  </p>
                </div>
                
                {/* Fourth bullet point */}
                <div className="flex items-start space-x-6">
                  <span className="text-black font-bold mt-1 text-lg">•</span>
                  <p className="text-justify">
                    ACHIEVED A LINKEDIN REACH OF OVER <span className="font-bold">15 MILLION+</span>, EARNING THE TRUST AND <br />
                    ADMIRATION OF TOP INDUSTRIALISTS AND BUSINESS LEADERS.
                  </p>
                </div>
                
                {/* Fifth bullet point */}
                <div className="flex items-start space-x-6">
                  <span className="text-black font-bold mt-1 text-lg">•</span>
                  <p className="text-justify">
                    AUTHOR OF "CONTACT CENTRE SUCCESS", A <span className="font-bold">KINDLE BOOK</span> FOCUSED ON SALES, <br />
                    COMMUNICATION, AND CUSTOMER ENGAGEMENT IN CALL CENTERS.
                  </p>
                </div>
                
                {/* Sixth bullet point */}
                <div className="flex items-start space-x-6">
                  <span className="text-black font-bold mt-1 text-lg">•</span>
                  <p className="text-justify">
                    PODCASTER & CONTENT CREATOR, RUNNING A <span className="font-bold">YOUTUBE CHANNEL</span> AND LINKEDIN LIVE <br />
                    SERIES WITH <span className="font-bold">3,500+ SUBSCRIBERS</span>, OFFERING POWERFUL INSIGHTS ON BRANDING, <br />
                    ENTREPRENEURSHIP, AND LEADERSHIP.
                  </p>
                </div>
                
                {/* Seventh bullet point */}
                <div className="flex items-start space-x-6">
                  <span className="text-black font-bold mt-1 text-lg">•</span>
                  <p className="text-justify">
                    <span className="font-bold">GLOBAL SPEAKER</span>, DELIVERING <span className="font-bold">200+ WEBINARS</span>, FEATURED ON <span className="font-bold">TEDX</span>, AND HONORED <br />
                    WITH <span className="font-bold">12+ AWARDS</span> AND <span className="font-bold">70+ TESTIMONIALS</span> FROM CLIENTS AND FORUMS AROUND THE <br />
                    GLOBE — INCLUDING MITTAL BUSINESS EXCHANGE, MSFB, AND AACST.
                  </p>
                </div>
              </div>
            </div>
        </div>

        {/* Right Image */}
        <div className=" flex justify-center items-center ml-1">
          <img
            src={profileImg}
            alt="Sarthak Mittal"
            className="relative -right-[161px] top-[100px] w-[250px] max-w-full h-[700px] object-cover z-0"
            
          />
        </div>
      </div>

    </div>
  );
};

export default AboutSarthak;


