// import React from "react";
// import logo1 from "../assets/logo1.png";
// import logo2 from "../assets/logo2.png";
// import moment3 from "../assets/moment3.jpg";
// import moment4 from "../assets/moment4.png";
// import moment5 from "../assets/moment5.jpg";
// import moment6 from "../assets/moment6.jpg";
// import moment7 from "../assets/moment7.jpg";
// import moment8 from "../assets/moment8.png";
// import moment9 from "../assets/moment9.jpg";
// import moment10 from "../assets/moment10.jpg";
// import moment11 from "../assets/moment11.jpg";
// import moment12 from "../assets/moment12.jpg";

// const struggles = [
//   {
//     title: "First Privates Limited Company after 17Y",
//     desc: "Starting my first Privates Limited company was a real challenge. Every step, from registration to scaling, taught me something new.",
//     img: logo1,
//   },
//   {
//     title: "My First USA Based Company",
//     desc: "Expanding overseas wasn't easy. In 2022, after years of hard work, I created my first USA-based company.",
//     img: logo2,
//   },
//   {
//     title: "My First TEDx talk",
//     desc: "I was grateful to deliver my first TEDx talk in 2022, sharing my entrepreneurial journey worldwide.",
//     img: moment3,
//   },
//   {
//     title: "35000 LinkedIn Followers + 10 Million",
//     desc: "Creating a following of 35,000+ on LinkedIn and reaching 10 million impressions is a milestone I cherish.",
//     img: moment4,
//   },
//   {
//     title: "LinkedIn Star",
//     desc: "My insights and advice led to LinkedIn Star status, unlocking new opportunities and connections.",
//     img: moment5,
//   },
//   {
//     title: "My First 'Luxurious' Watch",
//     desc: "After years of effort, I rewarded myself with a special watch—a symbol of my journey and growth.",
//     img: moment6,
//   },
//   {
//     title: "The First Offline Session",
//     desc: "I took pride in physically meeting students and sharing my experiences in my first offline session.",
//     img: moment7,
//   },
//   {
//     title: "The First Presentation",
//     desc: "From college days to professional life, my first presentation was a leap in public speaking.",
//     img: moment8,
//   },
//   {
//     title: "Founding Coding Community",
//     desc: "Founded a coding community to help students learn and grow together, fostering collaboration and innovation.",
//     img: moment9,
//   },
//   {
//     title: "The First Talk Show",
//     desc: "Organized my first talk show, bringing together industry leaders and students for knowledge sharing.",
//     img: moment10,
//   },
//   {
//     title: "Teaching a Microsoft Student Community",
//     desc: "Mentored students as part of the Microsoft Student Community, sharing my journey and practical tips.",
//     img: moment11,
//   },
//   {
//     title: "Founding Coding Community",
//     desc: "Founded a coding community to help students learn and grow together, fostering collaboration and innovation.",
//     img: moment12,
//   },
// ];

// const Struggle = () => {
//   return (
//     <div className="min-h-screen bg-black font-montserrat px-4 py-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-3xl font-bold text-[#FFC94A] text-center tracking-wide mb-2">
//           MY STRUGGLES MADE ME HUMBLE & GROUNDED
//         </h1>
//         <div className="w-32 h-1 bg-[#FFC94A] mx-auto mb-6" />
//         <p className="text-white text-center text-lg md:text-xl mb-12">
//           Some moments which made my life memorable
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {struggles.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto"
//             >
//               {/* Card background split */}
//               <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
//                 <div className="h-[40%] bg-[#FFC94A] w-full" />
//                 <div className="h-[60%] bg-white w-full" />
//               </div>
//               {/* Image at intersection */}
//               <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-24 h-24 object-cover rounded shadow-lg border-4 border-white"
//                 />
//               </div>
//               {/* Text content */}
//               <div className="flex flex-col items-center justify-end h-full pt-[60%] pb-6 px-4 z-20 relative">
//                 <h3 className="text-lg font-bold text-[#FFC94A] text-center mb-2 mt-12">
//                   {item.title}
//                 </h3>
//                 <p className="text-black text-center text-sm">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Struggle;









// import React from "react";
// import logo1 from "../assets/logo1.png";
// import logo2 from "../assets/logo2.png";
// import moment3 from "../assets/moment3.jpg";
// import moment4 from "../assets/moment4.png";
// import moment5 from "../assets/moment5.jpg";
// import moment6 from "../assets/moment6.jpg";
// import moment7 from "../assets/moment7.jpg";
// import moment8 from "../assets/moment8.png";
// import moment9 from "../assets/moment9.jpg";
// import moment10 from "../assets/moment10.jpg";
// import moment11 from "../assets/moment11.jpg";
// import moment12 from "../assets/moment12.jpg";

// const struggles = [
//   {
//     title: "First Private Limited Company after 119 Years",
//     desc: "Starting my first private limited company was a tough and daring journey. But through every challenge, my mom stood by my side - and together, we made it.",
//     img: logo1,
//   },
//   {
//     title: "My First USA Based Company",
//     desc: "It was my dream to start a company in the USA. After years of hard work and hope, I finally made it.",
//     img: logo2,
//   },
//   {
//     title: "My First TEDx talk",
//     desc: "I was grateful to be invited to deliver a TEDx Talk at MRU — a lifelong achievement that I will always cherish.",
//     img: moment3,
//   },
//   {
//     title: "35000 LinkedIn Followers + 10 Million Impressions",
//     desc: "Getting 10 Million impressions on Linkedin in early age is a huge milestone for me, so happy to get accepted by thousands of people",
//     img: moment4,
//   },
//   {
//     title: "LinkedIn Star",
//     desc: "My Profile was selected as a Linkedin Star Profile, Linkedin Entrepreneurship Expert, and Top 1% of the world's most viewed profiles.",
//     img: moment5,
//   },
//   {
//     title: "My First 'Luxurious' Watch",
//     desc: "After years of dedication and hard work, I am incredibly proud to own my first luxury watch — a symbol of perseverance and a milestone I will always cherish.",
//     img: moment6,
//   },
//   {
//     title: "The First Offline Session",
//     desc: "I was invited by SV Polytechnic Institute Bhopal by HOD Mr.Mukesh Kumar Kataria to deliver a session on Starting a Business in Early Age, It is always the most proud moment for me",
//     img: moment7,
//   },
//   {
//     title: "The First Presentation",
//     desc: "This the images of one of my early presentation at my college NMIMS with my colleagues, NMIMS Helped me a lot to boost my presentation skills",
//     img: moment8,
//   },
//   {
//     title: "Founding Coding Community",
//     desc: "Sarthak Mittal Initated coding community in NMIMS Indore, to empower his juniors about current industry trends and enriching the coding culture, this gave him idea to launch Young Leaders Foundation a highly successful initiative, now YLF is under Mittal Alliance",
//     img: moment9,
//   },
//   {
//     title: "The First Talk Show",
//     desc: "I was honored to deliver a founder talk to IPS Academy Indore for The First Time, it is the great honor for me to achieve this in such an early age",
//     img: moment10,
//   },
//   {
//     title: "Teaching a Microsoft Student Community",
//     desc: "Yesterday, I taught 50+ students ot NIT,IIT,IIIT and NMIMS 'The Fundamentals of Python', I also provided certification to each and every attendees powered by Microsoft.",
//     img: moment11,
//   },
//   {
//     title: "Founding Coding Community",
//     desc: "Sarthak Mittal Initated coding community in NMIMS Indore, to empower his juniors about current industry trends and enriching the coding culture, this gave him idea to launch Young Leaders Foundation a highly successful initiative, now YLF is under Mittal Alliance",
//     img: moment12,
//   },
// ];

// const Struggle = () => {
//   return (
//     <div className="min-h-screen bg-black font-montserrat px-4 py-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-3xl font-bold text-[#D0A151] text-center tracking-wide mb-2">
//           MY STRUGGLES MADE ME HUMBLE & GROUNDED
//         </h1>
//         <div className="w-32 h-1 bg-[#D0A151] mx-auto mb-6" />
//         <p className="text-white text-center text-lg md:text-xl mb-12">
//           Some moments which made my life memorable
//         </p>

//         <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {struggles.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto"
//             >
//               {/* Background split */}
//               <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
//                 <div className="h-[40%] bg-[#D0A151] w-full" />
//                 <div className="h-[60%] bg-white w-full" />
//               </div>

//               {/* Image with manual size */}
//               <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-10">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-59 h-36 object-cover object-center rounded-lg border-4 border-[#D0A151] shadow-lg mb-12"
//                 />
//               </div>

//               {/* Text content */}
//               <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
//                 <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
//                   {item.title}
//                 </h3>
//                 <p className="text-black text-center  text-sm">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Struggle;



// import React from "react";
// import logo1 from "../assets/logo1.png";
// import logo2 from "../assets/logo2.png";
// import moment3 from "../assets/moment3.jpg";
// import moment4 from "../assets/moment4.png";
// import moment5 from "../assets/moment5.jpg";
// import moment6 from "../assets/moment6.jpg";
// import moment7 from "../assets/moment7.jpg";
// import moment8 from "../assets/moment8.png";
// import moment9 from "../assets/moment9.jpg";
// import moment10 from "../assets/moment10.jpg";
// import moment11 from "../assets/moment11.jpg";
// import moment12 from "../assets/moment12.jpg";

// const struggles = [
//   {
//     title: "First Private Limited Company after 119 Years",
//     desc: "Starting my first private limited company was a tough and daring journey. But through every challenge, my mom stood by my side - and together, we made it.",
//     img: logo1,
//     size: "w-[120px] h-[120px] mb-12",
//   },
//   {
//     title: "My First USA Based Company",
//     desc: "It was my dream to start a company in the USA. After years of hard work and hope, I finally made it.",
//     img: logo2,
//     size: "w-[120px] h-[120px] mb-8",
//   },
//   {
//     title: "My First TEDx talk",
//     desc: "I was grateful to be invited to deliver a TEDx Talk at MRU — a lifelong achievement that I will always cherish.",
//     img: moment3,
//     size: " w-full h-[180px] mb-8",
//   },
//   {
//     title: "35000 LinkedIn Followers + 10 Million Impressions",
//     desc: "Getting 10 Million impressions on Linkedin in early age is a huge milestone for me, so happy to get accepted by thousands of people",
//     img: moment4,
//     size: "w-[115px] h-[115px]",
//   },
//   {
//     title: "LinkedIn Star",
//     desc: "My Profile was selected as a Linkedin Star Profile, Linkedin Entrepreneurship Expert, and Top 1% of the world's most viewed profiles.",
//     img: moment5,
//     size: "w-[105px] h-[105px]",
//   },
//   {
//     title: "My First 'Luxurious'  Watch",
//     desc: "After years of dedication and hard work, I am incredibly proud to own my first luxury watch — a symbol of perseverance and a milestone I will always cherish.",
//     img: moment6,
//     size: "w-[115px] h-[115px]",
//   },
//   {
//     title: "The First Offline Session",
//     desc: "I was invited by SV Polytechnic Institute Bhopal by HOD Mr.Mukesh Kumar Kataria to deliver a session on Starting a Business in Early Age, It is always the most proud moment for me",
//     img: moment7,
//     size: "w-[100px] h-[100px]",
//   },
//   {
//     title: "The First Presentation",
//     desc: "This the images of one of my early presentation at my college NMIMS with my colleagues, NMIMS Helped me a lot to boost my presentation skills",
//     img: moment8,
//     size: "w-[110px] h-[110px]",
//   },
//   {
//     title: "Founding Coding Community",
//     desc: "Sarthak Mittal Initated coding community in NMIMS Indore, to empower his juniors about current industry trends and enriching the coding culture, this gave him idea to launch Young Leaders Foundation a highly successful initiative, now YLF is under Mittal Alliance",
//     img: moment9,
//     size: "w-[120px] h-[120px]",
//   },
//   {
//     title: "The First Talk Show",
//     desc: "I was honored to deliver a founder talk to IPS Academy Indore for The First Time, it is the great honor for me to achieve this in such an early age",
//     img: moment10,
//     size: "w-[105px] h-[105px]",
//   },
//   {
//     title: "Teaching a Microsoft Student Community",
//     desc: "Yesterday, I taught 50+ students ot NIT,IIT,IIIT and NMIMS 'The Fundamentals of Python', I also provided certification to each and every attendees powered by Microsoft.",
//     img: moment11,
//     size: "w-[110px] h-[110px]",
//   },
//   {
//     title: "Founding Coding Community",
//     desc: "Sarthak Mittal Initated coding community in NMIMS Indore, to empower his juniors about current industry trends and enriching the coding culture, this gave him idea to launch Young Leaders Foundation a highly successful initiative, now YLF is under Mittal Alliance",
//     img: moment12,
//     size: "w-[100px] h-[100px]",
//   },
// ];

// const Struggle = () => {
//   return (
//     <div className="min-h-screen bg-black font-montserrat px-4 py-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-3xl font-bold text-[#D0A151] text-center tracking-wide mb-2">
//           MY STRUGGLES MADE ME HUMBLE & GROUNDED
//         </h1>
//         <div className="w-32 h-1 bg-[#D0A151] mx-auto mb-6" />
//         <p className="text-white text-center text-lg md:text-xl mb-12">
//           Some moments which made my life memorable
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {struggles.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto"
//             >
//               {/* Background split */}
//               <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
//                 <div className="h-[40%] bg-[#D0A151] w-full" />
//                 <div className="h-[60%] bg-white w-full" />
//               </div>

//               {/* Image with manual size */}
//               <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className={`${item.size} object-cover rounded  border-2 border-[#D0A151]`}
//                 />
//               </div>

//               {/* Text content */}
//               <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
//                 <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
//                   {item.title}
//                 </h3>
//                 <p className="text-black text-center  text-sm">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Struggle;  


import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import moment3 from "../assets/moment3.jpg";
import moment4 from "../assets/moment4.png";
import moment5 from "../assets/moment5.jpg";
import moment6 from "../assets/moment6.jpg";
import moment7 from "../assets/moment7.jpg";
import moment8 from "../assets/moment8.png";
import moment9 from "../assets/moment9.jpg";
import moment10 from "../assets/moment10.jpg";
import moment11 from "../assets/moment11.jpg";
import moment12 from "../assets/moment12.jpg";
import triangleImg from '../assets/whitesvg.png';

// Individual Card Components
const FirstCompanyCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[40%] bg-[#D0A151] w-full" />
      <div className="h-[60%] bg-white w-full" />
    </div>

    {/* Image with manual size */}
    <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={logo1}
        alt="First Private Limited Company"
        className="w-[120px] h-[120px] mb-12 object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 mt-5 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        First Private Limited Company after 119 Years
      </h3>
      <p className="text-black text-center text-sm">
        Starting my first private limited company was a tough and daring journey. But through every challenge, my mom stood by my side - and together, we made it.
      </p>
    </div>
  </div>
);

const USACompanyCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[40%] bg-[#D0A151] w-full" />
      <div className="h-[60%] bg-white w-full" />
    </div>

    {/* Image with manual size */}
    <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={logo2}
        alt="USA Based Company"
        className="w-[120px] h-[120px] mb-8 object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        My First USA Based Company
      </h3>
      <p className="text-black text-center text-sm">
        It was my dream to start a company in the USA. After years of hard work and hope, I finally made it.
      </p>
    </div>
  </div>
);

const TEDxTalkCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[30%] bg-[#D0A151] w-full" />
      <div className="h-[70%] bg-white w-full" />
    </div>

    {/* Image with manual size */}
    <div className="absolute w-[250px] left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment3}
        alt="TEDx Talk"
        className="w-full h-[150px] mb-8 object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        My First TEDx talk
      </h3>
      <p className="text-black text-center text-sm">
        I was grateful to be invited to deliver a TEDx Talk at MRU — a lifelong achievement that I will always cherish.
      </p>
    </div>
  </div>
);

const LinkedInFollowersCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[30%] bg-[#D0A151] w-full" />
      <div className="h-[70%] bg-white w-full" />
    </div>

    {/* Image with manual size */}
    <div className="absolute w-[250px] h-[150px] left-1/2 top-[40%] -mt-7 -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment4}
        alt="LinkedIn Followers"
        className="w-[350px] h-[145px] object-contain rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        35000 LinkedIn Followers + 10 Million Impressions
      </h3>
      <p className="text-black text-center text-sm">
        Getting 10 Million impressions on Linkedin in early age is a huge milestone for me, so happy to get accepted by thousands of people
      </p>
    </div>
  </div>
);

const LinkedInStarCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[40%] bg-[#D0A151] w-full" />
      <div className="h-[60%] bg-white w-full" />
    </div>

    {/* Image with manual size */}
    <div className="absolute h-[220px] w-[275px] left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment5}
        alt="LinkedIn Star"
        className="w-[292px] h-[180px] object-contain rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        LinkedIn Star
      </h3>
      <p className="text-black text-center text-sm">
        My Profile was selected as a Linkedin Star Profile, Linkedin Entrepreneurship Expert, and Top 1% of the world's most viewed profiles.
      </p>
    </div>
  </div>
);

const LuxuryWatchCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[30%] bg-[#D0A151] w-full" />
      <div className="h-[70%] bg-white w-full" />
    </div>

    {/* Image with manual size */}
    <div className="absolute h-[240px] left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment6}
        alt="Luxury Watch"
        className="w-[195px] h-[180px] object-contain rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 mt-5 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        My First 'Luxurious' Watch
      </h3>
      <p className="text-black text-center text-sm">
        After years of dedication and hard work, I am incredibly proud to own my first luxury watch — a symbol of perseverance and a milestone I will always cherish.
      </p>
    </div>
  </div>
);

const OfflineSessionCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[35%] bg-[#D0A151] w-full" />
      <div className="h-[65%] bg-white w-full" />
    </div>

    {/* Image with landscape ratio */}
    <div className="absolute h-[200px] w-[250px] left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment7}
        alt="Offline Session"
        className="w-[290px]  object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6  px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        The First Offline Session
      </h3>
      <p className="text-black text-center text-xs">
        I was invited by SV Polytechnic Institute Bhopal by HOD Mr.Mukesh Kumar Kataria to deliver a session on Starting a Business in Early Age, It is always the most proud moment for me
      </p>
    </div>
  </div>
);

const FirstPresentationCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[30%] bg-[#D0A151] w-full" />
      <div className="h-[70%] bg-white w-full" />
    </div>

    {/* Image with landscape ratio */}
    <div className="absolute  h-[200px] w-[250px] left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment8}
        alt="First Presentation"
        className="w-[290px]   object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        The First Presentation
      </h3>
      <p className="text-black text-center text-sm">
        This the images of one of my early presentation at my college NMIMS with my colleagues, NMIMS Helped me a lot to boost my presentation skills
      </p>
    </div>
  </div>
);

const CodingCommunityCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[30%] bg-[#D0A151] w-full" />
      <div className="h-[70%] bg-white w-full" />
    </div>

    {/* Image with landscape ratio */}
    <div className="absolute h-[200px] w-[250px] left-1/2 top-[40%] -mt-5 -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment9}
        alt="Coding Community"
        className="w-[290px] object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-8 px-4 mt-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        Founding Coding Community
      </h3>
      <p className="text-black text-center text-xs">
        Sarthak Mittal Initated coding community in NMIMS Indore, to empower his juniors about current industry trends and enriching the coding culture, this gave him idea to launch Young Leaders Foundation a highly successful initiative, now YLF is under Mittal Alliance
      </p>
    </div>
  </div>
);

const TalkShowCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[40%] bg-[#D0A151] w-full" />
      <div className="h-[60%] bg-white w-full" />
    </div>

    {/* Image with landscape ratio */}
    <div className="absolute h-[200px] w-[250px] left-1/2 top-[40%] -mt-4 -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment10}
        alt="Talk Show"
        className="w-[290px] object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        The First Talk Show
      </h3>
      <p className="text-black text-center text-sm">
        I was honored to deliver a founder talk to IPS Academy Indore for The First Time, it is the great honor for me to achieve this in such an early age
      </p>
    </div>
  </div>
);

const MicrosoftTeachingCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[40%] bg-[#D0A151] w-full" />
      <div className="h-[60%] bg-white w-full" />
    </div>

    {/* Image with landscape ratio */}
    <div className="absolute h-[200px] w-[250px] left-1/2 top-[40%] -mt-4 -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment11}
        alt="Microsoft Teaching"
        className="w-[290px] object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] mt-2 pb-6 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        Teaching a Microsoft Student Community
      </h3>
      <p className="text-black text-center text-sm">
        Yesterday, I taught 50+ students ot NIT,IIT,IIIT and NMIMS 'The Fundamentals of Python', I also provided certification to each and every attendees powered by Microsoft.
      </p>
    </div>
  </div>
);

const SecondCodingCommunityCard = () => (
  <div className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto">
    {/* Background split */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div className="h-[40%] bg-[#D0A151] w-full" />
      <div className="h-[60%] bg-white w-full" />
    </div>

    {/* Image with landscape ratio */}
    <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
      <img
        src={moment12}
        alt="Second Coding Community"
        className="w-[120px] h-[80px] object-cover rounded border-2 border-[#D0A151]"
      />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-center justify-end h-full pt-[70%] pb-6 px-4 z-20 relative">
      <h3 className="text-lg font-bold text-[#D0A151] text-center mb-2 mt-12">
        Founding Coding Community
      </h3>
      <p className="text-black text-center text-sm">
        Sarthak Mittal Initated coding community in NMIMS Indore, to empower his juniors about current industry trends and enriching the coding culture, this gave him idea to launch Young Leaders Foundation a highly successful initiative, now YLF is under Mittal Alliance
      </p>
    </div>
  </div>
);







// Main Component
const Struggle = () => {
  return (
    <div className="min-h-screen bg-black font-montserrat px-4 py-10 ">
      {/* White Chevron Down - Top of Footer */}
      <img
  src={triangleImg}
  alt="Triangle Divider"
  className="mx-auto -mt-10 w-full h-auto"
/>
      <div className="max-w-6xl mx-auto mt-19">
        <h1 className="text-3xl md:text-4xl font-bold text-[#D0A151] text-center tracking-wide mb-2">
          MY STRUGGLES MADE ME HUMBLE & GROUNDED
        </h1>
        <div className="w-[890px] h-1.5 bg-[#D0A151] mx-auto mb-6" />
        <p className="text-white text-center text-lg md:text-xl mb-12">
          Some moments which made my life memorable
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FirstCompanyCard />
          <USACompanyCard />
          <TEDxTalkCard />
          <LinkedInFollowersCard />
          <LinkedInStarCard />
          <LuxuryWatchCard />
          <OfflineSessionCard />
          <FirstPresentationCard />
          <CodingCommunityCard />
          <TalkShowCard />
          <MicrosoftTeachingCard />
          <CodingCommunityCard />
        </div>
      </div>
    </div>
  );
};

export default Struggle;