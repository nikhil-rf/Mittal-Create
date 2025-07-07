// import React, { useState } from 'react';

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
//   { src: img1, width: 'w-full', height: 'h-84' },
//   { src: img2, width: 'w-full', height: 'h-52' },
//   { src: img3, width: 'w-full', height: 'h-52' },
//   { src: img4, width: 'w-full', height: 'h-50' },
//   { src: img5, width: 'w-80', height: 'h-80' },
//   { src: img6, width: 'w-full', height: 'h-84', extra: 'relative -top-20 left-11'},
//   { src: img7, width: 'w-full', height: 'h-60', extra: 'relative -top-20 left-10' },
//   { src: img8, width: 'w-58', height: 'h-40', extra: 'relative -top-13 left-10' },
//   { src: img9, width: 'w-70', height: 'h-50' , extra: 'relative -top-45 -right-217'},
//   { src: img10, width: 'w-full', height: 'h-100', extra: 'relative -left-70' },
//   { src: img11, width: 'w-full', height: 'h-55' ,extra: 'relative -top-15 right-63'},
//   { src: img12, width: 'w-full', height: 'h-56' ,extra: 'relative top-50 right-138 ' },
//   { src: img13, width: 'w-60', height: 'h-90' ,extra: 'relative -top-134 left-155 ' },
//   { src: img14, width: 'w-full', height: 'h-60',extra: 'relative -top-89 left-145 ' },
//   { src: img15, width: 'w-full', height: 'h-64',extra: 'relative right-145 top-8 ' },
//   { src: img16, width: 'w-full', height: 'h-55' ,extra: 'relative right-140 top-15'},
//   { src: img17, width: 'w-full', height: 'h-72',extra: 'relative -top-96 left-154 ' },
//   { src: img18, width: 'w-58', height: 'h-90',extra: 'relative -top-114 left-155 ' },
// ];

// const MediaGrid = () => {
//   return (
//     <div className="h-auto  bg-white px-4 py-4 overflow-x-hidden">

//     <div className="h-auto bg-white p-4">
//       <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-t-[50px] border-l-transparent border-r-transparent border-t-black mx-auto -mt-8" />

//             {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#D0A151] mt-20">
//           MEDIA HONORS AND AWARDS
//         </h2>
//         <div className="mt-2 w-135 h-2 bg-[#D0A151] mx-auto" />
//       </div>

//       <div className="w-full max-h-[1500px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-23 relative overflow-hidden">
//         {images.map((img, index) => (
//           <div
//   key={index}
//     className={`p-2 border-2 shadow-2xl border-[#D0A151]  ${img.width} ${img.height} bg-white rounded ${img.extra || ''}`}
// >
//   <img
//     src={img.src}
//     alt={`img-${index + 1}`}
//     className="w-full h-full object-contain rounded"
//   />
// </div>

//         ))}
//       </div>
//     </div>

//     </div>
//   );
// };

// export default MediaGrid;



//production ready fixing
import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.jpg';
import img17 from '../assets/img17.jpg';
import img18 from '../assets/img18.jpg';

const images = [
  { src: img1, width: 'w-full', height: 'h-[336px]' },
  { src: img2, width: 'w-full', height: 'h-[208px]' },
  { src: img3, width: 'w-full', height: 'h-[208px]' },
  { src: img4, width: 'w-full', height: 'h-[200px]' },
  { src: img5, width: 'w-[320px]', height: 'h-[320px]' },
  { src: img6, width: 'w-full', height: 'h-[336px]', extra: 'relative top-[-80px] left-[44px]' },
  { src: img7, width: 'w-full', height: 'h-[240px]', extra: 'relative top-[-80px] left-[40px]' },
  { src: img8, width: 'w-[232px]', height: 'h-[160px]', extra: 'relative top-[-52px] left-[40px]' },
  { src: img9, width: 'w-[280px]', height: 'h-[200px]', extra: 'relative top-[-180px] right-[-868px]' },
  { src: img10, width: 'w-full', height: 'h-[400px]', extra: 'relative left-[-280px]' },
  { src: img11, width: 'w-full', height: 'h-[220px]', extra: 'relative top-[-60px] right-[252px]' },
  { src: img12, width: 'w-full', height: 'h-[224px]', extra: 'relative top-[200px] right-[552px]' },
  { src: img13, width: 'w-[240px]', height: 'h-[360px]', extra: 'relative top-[-536px] left-[620px]' },
  { src: img14, width: 'w-full', height: 'h-[240px]', extra: 'relative top-[-356px] left-[580px]' },
  { src: img15, width: 'w-full', height: 'h-[256px]', extra: 'relative right-[580px] top-[32px]' },
  { src: img16, width: 'w-full', height: 'h-[220px]', extra: 'relative right-[560px] top-[60px]' },
  { src: img17, width: 'w-full', height: 'h-[288px]', extra: 'relative top-[-384px] left-[616px]' },
  { src: img18, width: 'w-[232px]', height: 'h-[360px]', extra: 'relative top-[-456px] left-[620px]' },
];

const MediaGrid = () => {
  return (
    <div className="h-auto bg-white px-4 py-4 overflow-x-hidden">
      <div className="h-auto bg-white p-4">
        <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-t-[50px] border-l-transparent border-r-transparent border-t-black mx-auto -mt-8" />

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D0A151] mt-20">
            MEDIA HONORS AND AWARDS
          </h2>
          <div className="mt-2 w-[540px] h-2 bg-[#D0A151] mx-auto" />
        </div>

        {/* Image Grid */}
        <div className="w-full max-h-[1500px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-24 relative overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`p-2 border-2 shadow-2xl border-[#D0A151] ${img.width} ${img.height} bg-white rounded ${img.extra || ''}`}
            >
              <img
                src={img.src}
                alt={`img-${index + 1}`}
                className="w-full h-full object-contain rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaGrid;
