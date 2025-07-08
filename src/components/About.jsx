// import React from 'react';
// import profileImg from '../assets/about(1).png'; 

// const AboutSarthak = () => {
//   return (
//     <div className="min-h-screen bg-white py-20 px-1 md:px-20 relative">
//       {/* Top Chevron */}
//       <div className="w-0 h-0 border-x-[80px] border-x-transparent border-t-[40px] border-t-black mx-auto -mt-20"></div>

//       {/* Section Container */}
//       <div className="bg-white p-6 md:p-10 flex flex-col md:flex-row items-start gap-10 relative z-20">
//         {/* Left Content */}
//         <div className="relative  md:w-2/3 ">
//           {/* Title */}
//           <div className="relative inline-block mb-6">
//             <span className="text-5xl -ml-9 font-bold text-[#D0A151] font-Montserrat px-2 py-2">
//               ABOUT SARTHAK MITTAL
//             </span>
//           </div>

//             <div className="absolute -mt-30 -ml-19 w-20 h-70 bg-[#E6C584] opacity-50 z-40"></div>

//             <div className="relative z-20 border-2 border-black rounded-xl p-6 w-222 -ml-8 bg-white flex-1 ">
//               <div className="relative z-10 space-y-2 space-x-5 text-black text-sm lg:text-base leading-relaxed p-2 ">
//                 {/* First bullet point */}
//                 <div className="flex items-start space-x-6 ">
//                   <span className="text-black font-bold mt-1 text-lg space-x-6">•</span>
//                   <p className="text-justify space-x-6">
//                     <span className="font-bold ">FOUNDER & CEO OF MITTAL ALLIANCE INDUSTRIES PRIVATE LIMITED (INDIA)</span> AND{' '} <br />
//                     <span className="font-bold">MITTAL BRANDTECH INC. (COLORADO, USA)</span> — TWO SUCCESSFUL ENTERPRISES <br />
//                     PARTNERING WITH LEADING BRANDS AND <span className="font-bold">2000+ INDUSTRIALISTS</span> WORLDWIDE.
//                   </p>
//                 </div>
                
//                 {/* Second bullet point */}
//                 <div className="flex items-start space-x-6">
//                   <span className="text-black font-bold mt-1 text-lg">•</span>
//                   <p className="text-justify">
//                     RECOGNIZED AS ONE OF THE <span className="font-bold">MOST TRUSTED BRANDING EXPERTS</span> ACROSS APAC, USA, <br />
//                     AND EUROPE, WITH MULTIPLE ASSOCIATED VENTURES AND HIGH-IMPACT CLIENT <br />
//                     PORTFOLIOS.
//                   </p>
//                 </div>
                
//                 {/* Third bullet point */}
//                 <div className="flex items-start space-x-6">
//                   <span className="text-black font-bold mt-1 text-lg">•</span>
//                   <p className="text-justify">
//                     CREATOR OF <span className="font-bold">BADVERSE</span> (BREAKDOWN, ANALYSIS, AND DECISION), A THRIVING <br />
//                     COMMUNITY OF OVER <span className="font-bold">10,000 MEMBERS</span> DEDICATED TO STRATEGIC PERSONAL AND <br />
//                     BUSINESS TRANSFORMATION.
//                   </p>
//                 </div>
                
//                 {/* Fourth bullet point */}
//                 <div className="flex items-start space-x-6">
//                   <span className="text-black font-bold mt-1 text-lg">•</span>
//                   <p className="text-justify">
//                     ACHIEVED A LINKEDIN REACH OF OVER <span className="font-bold">15 MILLION+</span>, EARNING THE TRUST AND <br />
//                     ADMIRATION OF TOP INDUSTRIALISTS AND BUSINESS LEADERS.
//                   </p>
//                 </div>
                
//                 {/* Fifth bullet point */}
//                 <div className="flex items-start space-x-6">
//                   <span className="text-black font-bold mt-1 text-lg">•</span>
//                   <p className="text-justify">
//                     AUTHOR OF "CONTACT CENTRE SUCCESS", A <span className="font-bold">KINDLE BOOK</span> FOCUSED ON SALES, <br />
//                     COMMUNICATION, AND CUSTOMER ENGAGEMENT IN CALL CENTERS.
//                   </p>
//                 </div>
                
//                 {/* Sixth bullet point */}
//                 <div className="flex items-start space-x-6">
//                   <span className="text-black font-bold mt-1 text-lg">•</span>
//                   <p className="text-justify">
//                     PODCASTER & CONTENT CREATOR, RUNNING A <span className="font-bold">YOUTUBE CHANNEL</span> AND LINKEDIN LIVE <br />
//                     SERIES WITH <span className="font-bold">3,500+ SUBSCRIBERS</span>, OFFERING POWERFUL INSIGHTS ON BRANDING, <br />
//                     ENTREPRENEURSHIP, AND LEADERSHIP.
//                   </p>
//                 </div>
                
//                 {/* Seventh bullet point */}
//                 <div className="flex items-start space-x-6">
//                   <span className="text-black font-bold mt-1 text-lg">•</span>
//                   <p className="text-justify">
//                     <span className="font-bold">GLOBAL SPEAKER</span>, DELIVERING <span className="font-bold">200+ WEBINARS</span>, FEATURED ON <span className="font-bold">TEDX</span>, AND HONORED <br />
//                     WITH <span className="font-bold">12+ AWARDS</span> AND <span className="font-bold">70+ TESTIMONIALS</span> FROM CLIENTS AND FORUMS AROUND THE <br />
//                     GLOBE — INCLUDING MITTAL BUSINESS EXCHANGE, MSFB, AND AACST.
//                   </p>
//                 </div>
//               </div>
//             </div>
//         </div>

//         {/* Right Image */}
//         <div className=" flex justify-center items-center ml-1">
//           <img
//             src={profileImg}
//             alt="Sarthak Mittal"
//             className="relative -right-[161px] top-[100px] w-[250px] max-w-full h-[700px] object-cover z-0"
            
//           />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default AboutSarthak;

import React from 'react';
import profileImg from '../assets/about(1).png';

const AboutSarthak = () => {
  return (
    <div className="min-h-screen bg-white pt-10 pb-2 px-0 md:px-0 relative mt-10">
      {/* Top Chevron */}
      <div className="w-0 h-0 border-x-[80px] border-x-transparent border-t-[40px] border-t-black mx-auto -mt-20"></div>

      {/* Section Container */}
      <div className="bg-white p-6 md:p-10 flex flex-col md:flex-row items-start gap-10 mt-9 relative z-20">
        
        {/* Left Content */}
        <div className="relative w-full">
          {/* Title */}
          <div className="mb-6">
            <span className="text-4xl md:text-5xl font-bold text-[#D0A151] font-Montserrat">
              ABOUT SARTHAK MITTAL
            </span>
          </div>

          {/* Decorative box */}
          <div className="absolute top-0 left-0 w-20 h-72 bg-[#E6C584] -mt-9 opacity-50 z-40"></div>

          {/* Full-width Info Box */}
          <div className="w-full max-w-[1600px] ml-10 border-2 border-black rounded-xl p-6 bg-white relative z-10">
            <div className="space-y-6 text-sm md:text-base text-black leading-relaxed">
              {[
                <>
                  <span className="font-bold">FOUNDER & CEO OF MITTAL ALLIANCE INDUSTRIES PRIVATE LIMITED (INDIA)</span> AND <br />
                  <span className="font-bold">MITTAL BRANDTECH INC. (COLORADO, USA)</span> — TWO SUCCESSFUL ENTERPRISES PARTNERING WITH LEADING BRANDS AND <span className="font-bold">2000+ INDUSTRIALISTS</span> WORLDWIDE.
                </>,
                <>
                  RECOGNIZED AS ONE OF THE <span className="font-bold">MOST TRUSTED BRANDING EXPERTS</span> ACROSS APAC, USA, AND EUROPE, WITH MULTIPLE ASSOCIATED VENTURES AND HIGH-IMPACT CLIENT PORTFOLIOS.
                </>,
                <>
                  CREATOR OF <span className="font-bold">BADVERSE</span> (BREAKDOWN, ANALYSIS, AND DECISION), A COMMUNITY OF OVER <span className="font-bold">10,000 MEMBERS</span> DEDICATED TO STRATEGIC PERSONAL AND BUSINESS TRANSFORMATION.
                </>,
                <>
                  ACHIEVED A LINKEDIN REACH OF OVER <span className="font-bold">15 MILLION+</span>, EARNING THE TRUST AND ADMIRATION OF TOP INDUSTRIALISTS AND BUSINESS LEADERS.
                </>,
                <>
                  AUTHOR OF "<span className="font-bold">CONTACT CENTRE SUCCESS</span>", A KINDLE BOOK FOCUSED ON SALES, COMMUNICATION, AND CUSTOMER ENGAGEMENT IN CALL CENTERS.
                </>,
                <>
                  PODCASTER & CONTENT CREATOR, RUNNING A <span className="font-bold">YOUTUBE CHANNEL</span> AND LINKEDIN LIVE SERIES WITH <span className="font-bold">3,500+ SUBSCRIBERS</span>, OFFERING POWERFUL INSIGHTS ON BRANDING, ENTREPRENEURSHIP, AND LEADERSHIP.
                </>,
                <>
                  <span className="font-bold">GLOBAL SPEAKER</span>, DELIVERING <span className="font-bold">200+ WEBINARS</span>, FEATURED ON <span className="font-bold">TEDX</span>, AND HONORED WITH <span className="font-bold">12+ AWARDS</span> AND <span className="font-bold">70+ TESTIMONIALS</span> FROM CLIENTS AND FORUMS AROUND THE GLOBE — INCLUDING MITTAL BUSINESS EXCHANGE, MSFB, AND AACST.
                </>
              ].map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="text-lg font-bold">•</span>
                  <p className="text-justify w-full">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src={profileImg}
            alt="Sarthak Mittal"
            className="w-[350px] h-full max-h-[800px] object-contain mt-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSarthak;



//mobile responsive
// import React from 'react';
// import profileImg from '../assets/about(2).png';

// const AboutSarthak = () => {
//   return (
//     <div className="min-h-screen bg-white pt-10 pb-6 px-4 md:px-10 relative mt-10 mb-7">
//       {/* Top Chevron */}
//       <div className="w-0 h-0 border-x-[50px] md:border-x-[80px] border-x-transparent border-t-[30px] md:border-t-[40px] border-t-black mx-auto -mt-16 md:-mt-20"></div>

//       {/* Section Container */}
// <div className="flex flex-row items-start gap-6 md:gap-10 mt-9 relative z-20">
  
//   {/* Left Side - Text */}
//   <div className="w-[70%] sm:w-[75%] transform translate-x-15">

//     {/* Title above box */}
//     <div className="mb-4 relative">
//       <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-[#D0A151] font-Montserrat">
//         ABOUT SARTHAK MITTAL
//       </h2>
//     </div>

//     {/* Text Box */}
//     <div className="bg-white border-2 border-black rounded-xl p-4 sm:p-6 text-black relative">

//       {/* Optional Decorative Box (inside or remove if not needed) */}
//       <div className="absolute top-0 left-0  w-20 h-65 bg-[#E6C584] -mt-19  opacity-50 z-0"></div>

//       {/* Description */}
//       <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm leading-relaxed z-10 relative">
//         {[
//           <>
//             <strong>FOUNDER & CEO OF MITTAL ALLIANCE INDUSTRIES PRIVATE LIMITED (INDIA)</strong> AND <strong>MITTAL BRANDTECH INC. (COLORADO, USA)</strong> — TWO SUCCESSFUL ENTERPRISES PARTNERING WITH LEADING BRANDS AND <strong>2000+ INDUSTRIALISTS</strong> WORLDWIDE.
//           </>,
//           <>
//             RECOGNIZED AS ONE OF THE <strong>MOST TRUSTED BRANDING EXPERTS</strong> ACROSS APAC, USA, AND EUROPE, WITH MULTIPLE ASSOCIATED VENTURES AND HIGH-IMPACT CLIENT PORTFOLIOS.
//           </>,
//           <>
//             CREATOR OF <strong>BADVERSE</strong> (BREAKDOWN, ANALYSIS, AND DECISION), A THRIVING COMMUNITY OF OVER <strong>10,000 MEMBERS</strong> DEDICATED TO STRATEGIC PERSONAL AND BUSINESS TRANSFORMATION.
//           </>,
//           <>
//             ACHIEVED A LINKEDIN REACH OF OVER <strong>15 MILLION+</strong>, EARNING THE TRUST AND ADMIRATION OF TOP INDUSTRIALISTS AND BUSINESS LEADERS.
//           </>,
//           <>
//             AUTHOR OF <strong>“CONTACT CENTRE SUCCESS”</strong>, A <strong>KINDLE BOOK</strong> FOCUSED ON SALES, COMMUNICATION, AND CUSTOMER ENGAGEMENT IN CALL CENTERS.
//           </>,
//           <>
//             PODCASTER & CONTENT CREATOR, RUNNING A <strong>YOUTUBE CHANNEL</strong> AND LINKEDIN LIVE SERIES WITH <strong>3,500+ SUBSCRIBERS</strong>, OFFERING POWERFUL INSIGHTS ON BRANDING, ENTREPRENEURSHIP, AND LEADERSHIP.
//           </>,
//           <>
//             <strong>GLOBAL SPEAKER</strong>, DELIVERING <strong>200+ WEBINARS</strong>, FEATURED ON <strong>TEDX</strong>, AND HONORED WITH <strong>12+ AWARDS</strong> AND <strong>70+ TESTIMONIALS</strong> FROM CLIENTS AND FORUMS AROUND THE GLOBE — INCLUDING MITTAL BUSINESS EXCHANGE, MSFB, AND AACST.
//           </>
//         ].map((point, idx) => (
//           <div key={idx} className="flex items-start space-x-2">
//             <span className="text-lg font-bold leading-relaxed">•</span>
//             <p className="text-justify">{point}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* Right Side Image */}
//   <div className="w-[30%] sm:w-[25%] flex items-end justify-end">
//     <div className="flex flex-col items-center text-center">
//       <img
//         src={profileImg}
//         alt="Sarthak Mittal"
//         className="w-full h-auto object-contain max-h-[590px] mr-16 mt-9"
//       />
//     </div>
//   </div>
// </div>
// </div>

//   );
// };

// export default AboutSarthak;
