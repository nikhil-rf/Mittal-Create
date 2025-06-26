import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-black bg-opacity-50 text-white h-20 relative overflow-visible">
      <div className="flex items-center bg-opacity-50 relative z-10">
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-auto -my-2 object-contain"
        />
      </div>
      <ul className="hidden md:flex gap-6 text-sm z-10">
        {['Blogs', 'Events', 'Podcasts', 'Pricing', 'Books', 'Mentors', 'History', 'Careers', 'FAQs'].map((item) => (
          <li key={item} className="cursor-pointer hover:text-yellow-400">{item}</li>
        ))}
      </ul>


      <div className="inline-block z-10"
      style={{
        clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
        backgroundColor: '#D4AF37', // gold border simulation
        padding: '2px',             // thickness of "border"
      }}
      >
      <button className="text-white text-sm font-medium px-6 py-2 w-full h-full"
        style={{
          clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
          backgroundColor: 'black',
          border: 'none',
        }}>
        BOOK YOUR CALL
      </button>
      </div>

    </nav>
  );
};

export default Navbar;
