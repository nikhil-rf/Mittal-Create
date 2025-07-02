//  import React from 'react';
// import img from '../assets/mittal.png'; 
// import commentImg from '../assets/comment.png'; 
// const MittalFooter = () => {
//   return (
//     <footer className="bg-black text-white py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Company Info Section */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
//                 <span className="text-black text-xs font-bold">S</span>
//               </div>
//               <h3 className="text-[#D4AF37] font-semibold">Sarthak Mittal</h3>
//             </div>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Sarthak Group of Companies provides the best business solutions, helping businesses thrive through strategic and technical development. Led by Mr. Sarthak Mittal, a top-tier business consultant representing various companies, we are dedicated to "Creating CEOs" and fostering the growth of MSMEs.
//             </p>
//           </div>

//           {/* Pages Section */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Pages</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Home</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Services</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Courses</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Blog Insight</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Contact</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Term & Condition</a></li>
//             </ul>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Company</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Careers</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Support</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#D4AF37] text-sm transition-colors">Price & Plans</a></li>
//             </ul>
//           </div>

//           {/* Get In Touch Section */}
//  {/* Get In Touch + Chat Button Combined Section */}
// <div className="flex justify-between items-start space-x-6">
//   {/* Get In Touch Section */}
//   <div className="flex-1 pr-4">
//     <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
//     <div className="space-y-4">
//       <div>
//         <h5 className="text-white font-medium text-sm mb-1">Head Office</h5>
//         <p className="text-gray-300 text-sm">Vijay Nagar Part-II,</p>
//         <p className="text-gray-300 text-sm">Indore, INDIA</p>
//       </div>
//       <div>
//         <h5 className="text-white font-medium text-sm mb-1">Sub Office</h5>
//         <p className="text-gray-300 text-sm">Indore, INDIA</p>
//       </div>
//     </div>
//   </div>

//   {/* Chat Button */}
//   <div className="h-16 w-16 rounded-2xl bg-[#D0A151] flex items-center justify-center shadow-md hover:shadow-xl transition">
//     <img 
//       src={commentImg} 
//       alt="Mittal Chat" 
//       className="h-10 w-auto"
//     />
//   </div>
// </div>

//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-400 text-sm mb-4 md:mb-0">
//             Copyright By © <span className="text-[#D4AF37]">Sarthak Mittal</span> - 2025
//           </div>
          
//           {/* Logo */}
//           <div className="flex items-center">
//             <img 
//               src={img} 
//               alt="Mittal Logo" 
//               className="h-12 w-auto"
//             />
//           </div>
//         </div>


//       </div>

//     </footer>
//   );
// };

// export default MittalFooter;







import React from 'react';
import mittalLogo from '../assets/mittal.png'; 
import commentImg from '../assets/comment.png'; 
import svg from '../assets/man.png'; 

const MittalFooter = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Company Info Section*/}
      <div className="lg:col-span-1 w-60 ml-25">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 ">
            <img src={svg} alt="Sarthak Mittal Logo" className=" w-auto" />
          </div>
          <h3 className="text-[#D4AF37] font-semibold">Sarthak Mittal</h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          Sarthak Group of Companies provides the best business solutions, helping businesses thrive through strategic and technical development. Led by Mr. Sarthak Mittal, a top-tier business consultant representing various companies, we are dedicated to "Creating CEOs" and fostering the growth of MSMEs.
        </p>
      </div>

      {/* Pages */}
      <div className='ml-21'>
        <h4 className="text-white font-semibold mb-4">Pages</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Services</a></li>
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Courses</a></li>
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Blog Insight</a></li>
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Contact</a></li>
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Term & Condition</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Careers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Support</a></li>
          <li><a href="#" className="text-gray-300 hover:text-[#D4AF37]">Price & Plans</a></li>
        </ul>
      </div>

      {/* Get In Touch */}
      <div className="flex justify-between items-start -ml-29">
        <div>
          <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
          <div className="space-y-4 text-sm">
            <div>
              <h5 className="text-white font-medium mb-1">Head Office</h5>
              <p className="text-gray-300">Vijay Nagar Part-II,</p>
              <p className="text-gray-300">Indore, INDIA</p>
            </div>
            <div>
              <h5 className="text-white font-medium mb-1">Sub Office</h5>
              <p className="text-gray-300">Indore, INDIA</p>
            </div>
          </div>
        </div>

        {/* Chat Button */}
        <div className="ml-4">
          <div className="h-14 w-14 bg-[#D0A151] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition">
            <img src={commentImg} alt="Chat Icon" className="h-7 w-auto" />
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-800 mt-15 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="text-gray-400 text-sm mb-4 md:mb-0">
        Copyright By © <span className="text-[#D4AF37]">Sarthak Mittal</span> - 2025
      </div>
      <img src={mittalLogo} alt="Sarthak Mittal Logo" className="h-10 w-auto" />
    </div>
  </div>
</footer>


  );
};

export default MittalFooter;
