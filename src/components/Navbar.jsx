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
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded z-10">
        BOOK YOUR CALL
      </button>
    </nav>
  );
};

export default Navbar;
