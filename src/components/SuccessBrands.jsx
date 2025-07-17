import React from "react";
import bgImage from "../assets/bg-flags.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import a13 from "../assets/hexbg.png"; 

const logos = [logo1, logo2, logo3, logo4];

const SuccessBrands = () => {
  return (
    <div className="relative min-h-screen w-full font-[Montserrat]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 py-10">
        {/* Heading and Subtext */}
        <div className="w-full px-4 md:px-10 lg:px-24 self-start mb-12">
          <h1
            className="text-3xl md:text-5xl font-bold text-left mb-2 underline underline-offset-8 decoration-[#E6C584] whitespace-nowrap bg-clip-text text-transparent overflow-visible"
            style={{
              backgroundImage:
                "linear-gradient(89.74deg, #D0A151 8.4%, #DCB56C 51.24%, #E6C584 60.57%, #DDB56D 67.77%, #CE9D4B 98.28%)",
            }}
          >
            RESULT OF MY CONSISTENCY & PAIN
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 text-left">
            Businesses & Industries Acquired by Mittal Alliance
          </p>
        </div>

        {/* Hexagon Logo Section */}
        <div className="flex justify-center items-center gap-[16px] mt-[40px] max-w-[1306px] mx-auto flex-wrap lg:flex-nowrap">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="relative w-[200px] h-[200px] rounded-[24px] overflow-hidden"
            >
              <img
                src={a13}
                alt={`circle-${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-[45px] left-[45px] w-[110px] h-[110px] rounded-[12px] overflow-hidden">
                <img
                  src={logo}
                  alt={`logo-${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-25 text-md md:text-lg font-semibold underline underline-offset-4 decoration-[#E6C584] text-center">
          A Multinational “MITTAL” Brand Expanding by 2030
        </p>
      </div>
    </div>
  );
};

export default SuccessBrands;
