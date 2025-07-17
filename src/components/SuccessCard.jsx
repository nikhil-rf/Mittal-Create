



// const SuccessCard = () => {
//   return (
//     <div className="h-auto w-auto">
//       <div className="h-[260px] w-[180px]"> {/* Taller than wide */}
//         <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="none">

//           {/* Polygon Shape */}
//           <polygon
//             points="0,0 100,0 100,100 50,120 0,100"
//             className="fill-black stroke-yellow-500"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };


import React from "react";
import sm1 from "../assets/sm1.png";
import sm2 from "../assets/sm2.png";
import sm3 from "../assets/sm3.png";
import sm4 from "../assets/sm4.png";

const cardData = [
  {
    image: sm1,
    title: "32,000+ LinkedIn Connections",
    description: "Strong network of CXOs, entrepreneurs, and professionals  actively engaging with thought leadership and brand content.",
  },
  {
    image: sm2,
    title: "15,000,000+ People Reached",
    description: "Over 1.5 Crore cumulative digital impressions across platforms  through branding, education, and marketing campaigns.",
  },
  {
    image: sm3,
    title: "12,000+ Newsletter Subscribers",
    description: "Consistent audience consuming insights, updates, and strategies  via high-engagement email campaigns.",
  },
  {
    image: sm4,
    title: "50,000+ Students Impacted",
    description: "Learners reached through workshops, mentorships, webinars,  and academic outreach programs.",
  },
];

const SuccessCard = ({ image, title, description }) => {
  return (
    <div className="relative h-[350px] w-[200px] font-[Montserrat]">
      {/* SVG Background */}
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,0 100,0 100,100 50,120 0,100"
          className="fill-black stroke-[#D0A151]"
          strokeWidth="2"
        />
      </svg>

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col items-center text-white px-3 py-2">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-[180px] h-[140px] object-cover rounded-md mb-2 mt-2"
        />

        
        <div className="flex flex-col items-center text-center mt-1">
          <h3 className="text-sm text-[#D0A151] items-end font-bold leading-tight">
            {title}
          </h3>
          <p className="text-xs ml-3 text-left tracking-widest leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
};






// const SuccessCardDown = () => {
//    return (
//     <div className="h-[350px] w-[200px] mr-3.5">
//       <svg
//         viewBox="0 0 100 120"
//         className="w-full h-full rotate-180"
//         preserveAspectRatio="none"
//       >
//         {/* Flipped Polygon */}
//         <polygon
//           points="0,0 100,0 100,100 50,120 0,100"
//           className="fill-black stroke-yellow-500"
//           strokeWidth="2"
//         />
//       </svg>
//     </div>
//   );
// };


import sm5 from "../assets/sm5.png";
import sm6 from "../assets/sm6.png";
import sm8 from "../assets/sm8.png";
import sm9 from "../assets/sm9.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
const downCardData = [
  {
    image: sm5,
    title: "3,600+ YouTube Subscribers",
    description: "Educational video content creating continuous impact and  community growth.",
  },
  {
    image: sm6,
    title: "75+ Global Projects  Delivered",
    description: "Successful branding, digital, and consulting projects executed  across India, USA, UK, Spain, Dubai, and Australia.",
  },
  {
    image: [logo1, logo2],
    title: "2 Incorporated Companies",
    description: "Leading ventures in brandtech, digital transformation, and  consulting.",
    isDualImage: true,
  },
  {
    image: sm8,
    title: "1 Community  Platform (Badverse)",
    description: "Empowering solopreneurs, students, and creators with  mentorship and digital tools.",
  },
  {
    image: sm9,
    title: "1 Handicraft Firm  (Anjucreations)",
    description: "Promoting Indian craftsmanship globally through sustainable and  ethical commerce.",
  },
];


const SuccessCardDown = ({ image, title, description, isDualImage }) => {
  return (
    <div className="relative h-[350px] w-[200px] font-[Montserrat]">
      {/* Flipped SVG background */}
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full rotate-180"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,0 100,0 100,100 50,120 0,100"
          className="fill-black stroke-[#D0A151]"
          strokeWidth="2"
        />
      </svg>

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col items-center mt-9 text-white px-3 py-2 justify-between">
        {/* Top: Text */}
        <div className="flex flex-col items-center text-center mt-4">
          <h3 className="text-sm text-[#D0A151] font-bold leading-tight">
            {title}
          </h3>
          <p className="text-xs mt-2 text-left tracking-widest leading-snug">{description}</p>
        </div>

        {/* Bottom: Image or Dual Image */}
        <div className="mb-2">
          {isDualImage ? (
            <div className="flex gap-2">
              <img
                src={image[0]}
                alt="logo1"
                className="w-[100px] h-[80px] object-contain rounded"
              />
              <img
                src={image[1]}
                alt="logo2"
                className="w-[80px] h-[60px] object-contain rounded"
              />
            </div>
          ) : (
            <img
              src={image}
              alt={title}
              className="w-[190px] h-[150px] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};


const ZigZagCards = () => {
  return (
    <div className="flex flex-col items-center bg-black py-10 font-[Montserrat]">
      {/* Top Cards (SuccessCard) */}
      <div className="flex gap-4 mb-1 flex-wrap justify-center">
        {cardData.map((card, idx) => (
          <SuccessCard
            key={idx}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Down Cards (SuccessCardDown) */}
      <div className="flex gap-4 mt-1 flex-wrap justify-center">
        {downCardData.map((card, idx) => (
          <SuccessCardDown
            key={idx}
            image={card.image}
            title={card.title}
            description={card.description}
            isDualImage={card.isDualImage}
          />
        ))}
      </div>
    </div>
  );
};


export default ZigZagCards;


export { SuccessCard, SuccessCardDown, ZigZagCards };
