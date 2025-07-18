// import React, { useState } from 'react';zz

// const MediaHonorsAwards = () => {
//   // Replace these paths with your actual asset paths
//   const awards = [
//     {
//       id: 1,
//       src: "/assets/certificate1.jpg", // Replace with your actual image path
//       alt: "Certificate of Excellence",
//       className: "aspect-[3/4]" // Portrait certificate
//     },
//     {
//       id: 2,
//       src: "/assets/appreciation.jpg", // Replace with your actual image path
//       alt: "Certificate of Appreciation",
//       className: "aspect-[4/3]" // Landscape certificate
//     },
//     {
//       id: 3,
//       src: "/assets/membership.jpg", // Replace with your actual image path
//       alt: "Membership Certificate",
//       className: "aspect-[4/3]" // Landscape certificate
//     },
//     {
//       id: 4,
//       src: "/assets/association.jpg", // Replace with your actual image path
//       alt: "Association Certificate",
//       className: "aspect-[4/3]" // Landscape certificate
//     },
//     {
//       id: 5,
//       src: "/assets/tech-talk.jpg", // Replace with your actual image path
//       alt: "Tech Talk Event",
//       className: "aspect-[3/4]" // Portrait image
//     },
//     {
//       id: 6,
//       src: "/assets/award-trophy.jpg", // Replace with your actual image path
//       alt: "Award Trophy",
//       className: "aspect-[3/4] " // Portrait trophy image
//     },
//     {
//       id: 7,
//       src: "/assets/award-ceremony.jpg", // Replace with your actual image path
//       alt: "Award Ceremony",
//       className: "aspect-[4/3]" // Landscape ceremony photo
//     },
//     {
//       id: 8,
//       src: "/assets/group-photo.jpg", // Replace with your actual image path
//       alt: "Group Award Photo",
//       className: "aspect-[4/3]" // Portrait group photo
//     },
//     {
//       id: 9,
//       src: "/assets/panel-discussion.jpg", // Replace with your actual image path
//       alt: "Panel Discussion",
//       className: "aspect-[3/4]" // Portrait event photo
//     },
//     {
//       id: 10,
//       src: "/assets/momento.jpg", // Replace with your actual image path
//       alt: "Momento of Honor",
//       className: "aspect-[4/3]" // Landscape momento
//     },
//     {
//       id: 11,
//       src: "/assets/team-photo.jpg", // Replace with your actual image path
//       alt: "Team Achievement Photo",
//       className: "aspect-[4/3]" // Landscape team photo
//     },
//     {
//       id: 12,
//       src: "/assets/certificate2.jpg", // Replace with your actual image path
//       alt: "Achievement Certificate",
//       className: "aspect-[4/3]" // Portrait certificate
//     },
//     {
//       id: 13,
//       src: "/assets/corporate-event.jpg", // Replace with your actual image path
//       alt: "Corporate Event",
//       className: "aspect-[4/3]" // Landscape event photo
//     },
//     {
//       id: 14,
//       src: "/assets/force-for-good.jpg", // Replace with your actual image path
//       alt: "Be a Force for Good",
//       className: "aspect-[4/3]" // Landscape banner
//     },
//     {
//       id: 15,
//       src: "/assets/awards-collection.jpg", // Replace with your actual image path
//       alt: "Awards Collection",
//       className: "aspect-[4/3]" // Landscape collection
//     },
//     {
//       id: 16,
//       src: "/assets/tedx-event.jpg", // Replace with your actual image path
//       alt: "TEDx Event",
//       className: "aspect-[3/4]" // Landscape TEDx photo
//     }
//   ];

//   const displayedAwards = awards;

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4 tracking-wider">
//             MEDIA HONORS AND AWARDS
//           </h1>
//           <div className="w-32 h-1 bg-yellow-600 mx-auto"></div>
//         </div>

//         {/* Awards Gallery */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {awards.map((award) => (
//             <div
//               key={award.id}
//               className="group cursor-pointer"
//             >
//               <div className="border-4 border-yellow-600 p-2 bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//                 <div className={`${award.className} overflow-hidden bg-gray-100`}>
//                   <img
//                     src={award.src}
//                     alt={award.alt}
//                     className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
//                     onError={(e) => {
//                       // Fallback placeholder if image doesn't exist
//                       e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3E${award.alt}%3C/text%3E%3C/svg%3E`;
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaHonorsAwards;

// import React from 'react';

// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';
// import img5 from '../assets/img5.jpg';
// import img6 from '../assets/img6.jpg';
// import img7 from '../assets/img7.jpg';
// import img8 from '../assets/img8.jpg';
// import img9 from '../assets/img9.jpg';
// import img10 from '../assets/img10.jpg';
// import img11 from '../assets/img11.png';
// import img12 from '../assets/img12.jpg';
// import img13 from '../assets/img13.jpg';
// import img14 from '../assets/img14.jpg';
// import img15 from '../assets/img15.jpg';
// import img16 from '../assets/img16.jpg';
// import img17 from '../assets/img17.jpg';
// import img18 from '../assets/img18.jpg';

// const images = [
//   img1, img2, img3, img4, img5, img6, img7, img8, img9,
//   img10, img11, img12, img13, img14, img15, img16, img17, img18
// ];

// const MediaHonorsPage = () => {
//   return (
//     <div className="min-h-screen bg-white py-16 px-4">
//       {/* Title */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           MEDIA HONORS AND AWARDS
//         </h2>
//         <div className="mt-2 w-24 h-1 bg-yellow-500 mx-auto" />
//       </div>

//       {/* Uniform Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {images.map((imgSrc, index) => (
//           <div
//             key={index}
//             className="aspect-[3/4] bg-white p-1 border border-yellow-300 shadow-sm flex items-center justify-center"
//           >
//             <img
//               src={imgSrc}
//               alt={`Award ${index + 1}`}
//               className="w-full h-full object-cover rounded"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MediaHonorsPage;

// import React from "react";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.jpg";
// import img7 from "../assets/img7.jpg";
// import img8 from "../assets/img8.jpg";
// import img9 from "../assets/img9.jpg";
// import img10 from "../assets/img10.jpg";
// import img11 from "../assets/img11.png";
// import img12 from "../assets/img12.jpg";
// import img13 from "../assets/img13.jpg";
// import img14 from "../assets/img14.jpg";
// import img15 from "../assets/img15.jpg";
// import img16 from "../assets/img16.jpg";
// import img17 from "../assets/img17.jpg";
// import img18 from "../assets/img18.jpg";

// const images = [
//   { src: img1, width: "w-full", height: "h-84" },
//   { src: img2, width: "w-full", height: "h-52" },
//   { src: img3, width: "w-full", height: "h-52" },
//   { src: img4, width: "w-full", height: "h-50" },
//   { src: img5, width: "w-80", height: "h-80" },
//   {
//     src: img6,
//     width: "w-full",
//     height: "h-84",
//     extra: "relative -top-20 left-11",
//   },
//   {
//     src: img7,
//     width: "w-full",
//     height: "h-60",
//     extra: "relative -top-20 left-10",
//   },
//   {
//     src: img8,
//     width: "w-58",
//     height: "h-40",
//     extra: "relative -top-13 left-10",
//   },
//   {
//     src: img9,
//     width: "w-70",
//     height: "h-50",
//     extra: "relative -top-45 -right-217",
//   },
//   { src: img10, width: "w-full", height: "h-100", extra: "relative -left-70" },
//   {
//     src: img11,
//     width: "w-full",
//     height: "h-55",
//     extra: "relative -top-15 right-63",
//   },
//   {
//     src: img12,
//     width: "w-full",
//     height: "h-56",
//     extra: "relative top-50 right-138 ",
//   },
//   {
//     src: img13,
//     width: "w-60",
//     height: "h-90",
//     extra: "relative -top-134 left-155 ",
//   },
//   {
//     src: img14,
//     width: "w-full",
//     height: "h-60",
//     extra: "relative -top-89 left-145 ",
//   },
//   {
//     src: img15,
//     width: "w-full",
//     height: "h-64",
//     extra: "relative right-145 top-8 ",
//   },
//   {
//     src: img16,
//     width: "w-full",
//     height: "h-55",
//     extra: "relative right-140 top-15",
//   },
//   {
//     src: img17,
//     width: "w-full",
//     height: "h-72",
//     extra: "relative -top-96 left-154 ",
//   },
//   {
//     src: img18,
//     width: "w-58",
//     height: "h-90",
//     extra: "relative -top-114 left-155 ",
//   },
// ];

// const MediaGrid = () => {
//   return (
//     <div className="h-auto  bg-white px-4 py-4 overflow-x-hidden">
//       <div className="h-auto bg-white p-4">
//         <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-t-[50px] border-l-transparent border-r-transparent border-t-black mx-auto -mt-8" />

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#D0A151] mt-20">
//             MEDIA HONORS AND AWARDS
//           </h2>
//           <div className="mt-2 w-135 h-2 bg-[#D0A151] mx-auto" />
//         </div>

//         <div className="w-full max-h-[1500px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-23 relative overflow-hidden isolate">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className={`p-2 border-2 shadow-2xl border-[#D0A151]  ${
//                 img.width
//               } ${img.height} bg-white rounded ${img.extra || ""}`}
//             >
//               <img
//                 src={img.src}
//                 alt={`img-${index + 1}`}
//                 className="w-full h-full object-contain rounded"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGrid;

// import React from "react";
// import frame from "../assets/frame.png";
// import triangleImg from "../assets/blacksvg.png";
// const MediaGrid = () => {
//   return (
//     <div className="h-auto bg-white px-4 py-4 overflow-x-hidden mb-19">
//       <div className="h-auto bg-white p-4">
//         {/* Triangle decoration */}
//         <img
//           src={triangleImg}
//           alt="Triangle Divider"
//           className="mx-auto -mt-10 w-full h-12"
//         />

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#D0A151] mt-20">
//             MEDIA HONORS AND AWARDS
//           </h2>
//           <div className="mt-2 w-[540px] h-2 bg-[#D0A151] mx-auto" />
//         </div>

//         {/* Frame image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={frame}
//             alt="Media Honors and Awards"
//             className="w-full max-w-7xl h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGrid;

import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import fullImage from '../assets/image.png';
import blacksvg from "../assets/blacksvg.png"

export default function Media() {
  const column1 = [img1, img5, img10, img15];
  const column2 = [img2, img6, img11, img12, img16];
  const column3 = [img3, img7, img13, img17];
  const column4 = [img4, img8, img9, img14, img18];

  return (
    <>
      <div className="w-full bg-white px-4 lg:px-20 py-16 font-[Montserrat]">
        <img
                src={blacksvg}
                alt="Triangle Divider"
                className="mx-auto -mt-16 w-full h-auto"
              />
        {/* Heading */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-[40px] md:text-[60px] font-bold uppercase text-[#D0A151] inline-block relative pb-2">
            Media Honors and Awards
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D0A151]" />
          </h1>
        </div>

        {/* 4 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[column1, column2, column3, column4].map((column, colIndex) => {
            const gapClass =
              colIndex === 1
                ? "gap-[40px]"
                : colIndex === 2
                ? "gap-[80px]"
                : colIndex === 3
                ? "gap-[40px]"
                : "gap-2";

            return (
              <div key={colIndex} className={`flex flex-col ${gapClass}`}>
                {column.map((img, index) => (
                  <div
                    key={index}
                    className="border-[3.33px] border-[#D0A151] p-3 bg-white"
                  >
                    <img
                      src={img}
                      alt={`Award ${colIndex + 1}-${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-width footer image */}
      <div className="w-full overflow-hidden">
        <img
          src={fullImage}
          alt="Footer Decorative"
          className="w-full max-h-[800px] object-cover"
        />
      </div>
    </>
  );
}
