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

const struggles = [
  {
    title: "First Privates Limited Company after 17Y",
    desc: "Starting my first Privates Limited company was a real challenge. Every step, from registration to scaling, taught me something new.",
    img: logo1,
  },
  {
    title: "My First USA Based Company",
    desc: "Expanding overseas wasn't easy. In 2022, after years of hard work, I created my first USA-based company.",
    img: logo2,
  },
  {
    title: "My First TEDx talk",
    desc: "I was grateful to deliver my first TEDx talk in 2022, sharing my entrepreneurial journey worldwide.",
    img: moment3,
  },
  {
    title: "35000 LinkedIn Followers + 10 Million",
    desc: "Creating a following of 35,000+ on LinkedIn and reaching 10 million impressions is a milestone I cherish.",
    img: moment4,
  },
  {
    title: "LinkedIn Star",
    desc: "My insights and advice led to LinkedIn Star status, unlocking new opportunities and connections.",
    img: moment5,
  },
  {
    title: "My First 'Luxurious' Watch",
    desc: "After years of effort, I rewarded myself with a special watch—a symbol of my journey and growth.",
    img: moment6,
  },
  {
    title: "The First Offline Session",
    desc: "I took pride in physically meeting students and sharing my experiences in my first offline session.",
    img: moment7,
  },
  {
    title: "The First Presentation",
    desc: "From college days to professional life, my first presentation was a leap in public speaking.",
    img: moment8,
  },
  {
    title: "Founding Coding Community",
    desc: "Founded a coding community to help students learn and grow together, fostering collaboration and innovation.",
    img: moment9,
  },
  {
    title: "The First Talk Show",
    desc: "Organized my first talk show, bringing together industry leaders and students for knowledge sharing.",
    img: moment10,
  },
  {
    title: "Teaching a Microsoft Student Community",
    desc: "Mentored students as part of the Microsoft Student Community, sharing my journey and practical tips.",
    img: moment11,
  },
  {
    title: "Founding Coding Community",
    desc: "Founded a coding community to help students learn and grow together, fostering collaboration and innovation.",
    img: moment12,
  },
];

const Struggle = () => {
  return (
    <div className="min-h-screen bg-black font-montserrat px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-3xl font-bold text-[#FFC94A] text-center tracking-wide mb-2">
          MY STRUGGLES MADE ME HUMBLE & GROUNDED
        </h1>
        <div className="w-32 h-1 bg-[#FFC94A] mx-auto mb-6" />
        <p className="text-white text-center text-lg md:text-xl mb-12">
          Some moments which made my life memorable
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {struggles.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center h-80 w-full max-w-xs mx-auto"
            >
              {/* Card background split */}
              <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg">
                <div className="h-[40%] bg-[#FFC94A] w-full" />
                <div className="h-[60%] bg-white w-full" />
              </div>
              {/* Image at intersection */}
              <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded shadow-lg border-4 border-white"
                />
              </div>
              {/* Text content */}
              <div className="flex flex-col items-center justify-end h-full pt-[60%] pb-6 px-4 z-20 relative">
                <h3 className="text-lg font-bold text-[#FFC94A] text-center mb-2 mt-12">
                  {item.title}
                </h3>
                <p className="text-black text-center text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Struggle;