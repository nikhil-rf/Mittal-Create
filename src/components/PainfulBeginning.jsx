import React from "react";
import image1 from "../assets/founder1.jpg"; // Make sure filenames match
import image2 from "../assets/founder2.jpg";

const PainfulBeginning = () => {
  return (
    <div className="bg-black text-white px-6 md:px-24 py-20 font-sans">
      {/* Inverted Chevron at the top */}
      <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-t-[40px] border-l-transparent border-r-transparent border-t-white mx-auto -mt-20" />

      <div className="h-[100px]" />
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-2">
        A <span className="text-[#CE9D4B] italic">PAINFUL</span> BEGINNING
      </h2>
      <div className="h-1 w-[52%] bg-[#CE9D4B] mx-auto mb-12"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto space-y-6 text-sm md:text-base leading-7 text-justify">
        {/* Intro Paragraphs and Images (Side by Side Images, Full Width Text) */}
        <div className="relative flex flex-col md:flex-col gap-4">
          {/* First line */}
          <p className="font-bold">
            I didn’t inherit an empire. <br />I inherited the ashes of one.
          </p>

          {/* Paragraph + Images Block */}
          <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
            {/* Paragraph Text */}
            <div className="md:w-[60%] text-justify">
              <p className="font-light">
                In <strong className="font-bol">1907</strong>, two brave
                visionaries —{" "}
                <strong className="font-bold">Ganga Ram Mohanlal Mittal</strong>{" "}
                and <strong className="font-bold">Shri Babulal Mittal</strong> —
                built{" "}
                <strong className="font-bold ">
                  India’s first brass rolling mill
                </strong>
                . What began as a small dream grew into the{" "}
                <strong className="font-bold ">mighty Mittal Group</strong>, a
                symbol of strength, jobs, and national pride.
              </p>
            </div>

            {/* Images on the right */}
            <div className="flex gap-4 md:w-1/3 justify-end -mt-20">
              <img
                src={image1}
                alt="Ganga Ram Mittal"
                className="h-50 w-50 border-3 border-[#D4AF37] "
              />
              <img
                src={image2}
                alt="Babulal Mittal"
                className="h-50 w-50 border-3 border-[#D4AF37] "
              />
            </div>
          </div>
        </div>

        {/* Rest of the Paragraphs */}
        <p className="font-light">
          But{" "}
          <strong className="font-bold">
            success doesn’t always last forever.
          </strong>
        </p>

        <p className="font-light">
          By <strong className="font-bold">2003</strong>, after decades of{" "}
          <strong className="font-bold">internal disputes</strong> and{" "}
          <strong className="font-bold">poor financial decisions</strong>, the
          empire collapsed. The{" "}
          <strong className="font-bold">₹1,000 crore</strong> dream faded into{" "}
          <strong className="font-bold">bankruptcy</strong> — the same year{" "}
          <strong className="font-bold">I was born</strong>.
        </p>

        <p className="font-light">
          My father, once a <strong>proud industrialist</strong>, sank into{" "}
          <strong className="font-bold">depression</strong>. But in that
          darkness,{" "}
          <strong className="font-bold">my mother became our light</strong> — a
          symbol of <strong className="font-bold">grace, strength</strong>, and{" "}
          <strong className="font-bold">unbreakable love</strong>.
        </p>

        <p className="font-light">
          I grew up with <strong className="font-bold">responsibilities</strong>
          , not toys.
        </p>

        <p className="font-light">
          In <strong className="font-bold">2011</strong>, my{" "}
          <strong className="font-bold">grandmother passed away</strong>, and my
          mother made the bold decision to{" "}
          <strong className="font-bold">leave our family home</strong> —
          starting over from scratch.
        </p>

        <p className="font-light">
          I ran errands. I stood by her. I learned{" "}
          <strong className="font-bold">resilience, empathy</strong>, and the{" "}
          <strong className="font-bold">
            fire to build something of my own
          </strong>
          .
        </p>
      </div>
    </div>
  );
};

export default PainfulBeginning;
