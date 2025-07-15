
import React from "react";
import logo from "../assets/mittal.png";
import bgImage from "../assets/bg.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";
import t7 from "../assets/t7.png";
import t8 from "../assets/t8.png";
import t9 from "../assets/t9.png";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";
import r5 from "../assets/r5.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
import f8 from "../assets/f8.png";
import f9 from "../assets/f9.png";
import f10 from "../assets/f10.png";
import f11 from "../assets/f11.png";

const logos = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

const HeroSection = () => {
  return (
    <section
      className="relative text-white text-center px-4 pb-20 pt-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-2 text-white h-20 bg-black/0  z-50">
        <div className="flex items-center relative z-10 mt-3">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-auto -my-2 object-contain"
          />
        </div>
        <ul className="hidden md:flex gap-6 text-base z-10">
          {[
            "Blogs",
            "Events",
            "Podcasts",
            "Pricing",
            "Books",
            "Mentors",
            "History",
            "Careers",
            "FAQs",
          ].map((item) => (
            <li key={item} className="cursor-pointer hover:text-[#CE9D4B]">
              {item}
            </li>
          ))}
        </ul>
        <div
          className="inline-block z-10"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
            backgroundColor: "#D4AF37",
            padding: "2px",
          }}
        >
          <button
            className="text-white text-lg cursor-pointer font-semibold px-8 py-4 w-full h-full"
            style={{
              clipPath:
                "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
              backgroundColor: "black",
              border: "none",
              fontSize: "1.20rem",
              padding: "1rem 2rem",
            }}
          >
            BOOK YOUR CALL
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#CE9D4B] mb-2">
          MITTAL <span className="text-white">CREATE</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-[#CE9D4B] font-bold mb-4 mt-5">
          VISIONARY CEO'S & INDUSTRY-LEADING ENTERPRISES
        </h2>
        <p className="text-lg md:text-xl font-normal mb-2 mt-9 ">
          I BUILD ICONIC PERSONAL BRANDS & REDEFINE CORPORATE IDENTITIES
        </p>
        <p className="text-base md:text-lg mb-4 font-normal text-gray-300 ">
          Blending Soul & Strategy to Shape Legacy, Influence, and Impact
        </p>

        {/* Media Mentions */}
        <div className="text-[#CE9D4B] mb-3 mt-13 font-normal">
          MY WORK HAS REACHED AUDIENCES AT
        </div>

        <div className="flex justify-center items-center gap-1 px-4 flex-wrap">
          {[f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`media-logo-${index + 1}`}
              className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-16 px-4 flex-wrap mt-4">
          {[r1, r2, r3, r4, r5].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`media-logo-${index + 1}`}
              className="h-5 w-auto object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="text-center mt-12">
          <div className="text-[#CE9D4B] font-normal text-sm mb-2">
            TRUSTED BY
          </div>

          <p className="text-xs md:text-sm text-gray-400 max-w-full mx-auto px-4 mb-4 whitespace-nowrap overflow-x-auto">
            Industry Icons | Conscious Companies | Soulful Celebrities |
            Internet Influencers | Passionate Professionals | Solopreneurs |
            Industrialists | Legacy-Driven Leaders
          </p>

          <div className="overflow-x-auto whitespace-nowrap px-4">
            <div className="inline-flex gap-4 items-center">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`trusted-logo-${index + 1}`}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
