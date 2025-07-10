import React, { useState } from "react";
import triangleImg from "../assets/whitesvg.png";

const ServicesPage = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "EXECUTIVE MENTORING",
      description:
        "REFINE STRATEGIC THINKING, EXECUTIVE PRESENCE, DECISION-MAKING, AND LEADERSHIP COMMUNICATION. DESIGNED FOR CEOS, FOUNDERS, AND EMERGING LEADERS LOOKING TO SCALE WITH CLARITY AND CONFIDENCE.",
    },
    {
      title: "EFFECTIVE COMMUNICATION",
      description:
        "DEVELOP CLEAR, CONFIDENT, AND PERSUASIVE COMMUNICATION SKILLS ACROSS PLATFORMS. FROM BOARDROOMS TO PUBLIC STAGES, ENHANCE YOUR ABILITY TO INFLUENCE AND CONNECT.",
    },
    {
      title: "BUSINESS EXPANSION INTO ASIA",
      description:
        "ADVISORY SUPPORT FOR ENTERING HIGH-GROWTH ASIAN MARKETS. INCLUDES STRATEGIC RESEARCH, REGIONAL ALIGNMENT, AND ON-GROUND EXECUTION PLANNING TO ENSURE A SMOOTH AND SUCCESSFUL EXPANSION.",
    },
    {
      title: "SALES ENABLEMENT",
      description:
        "EQUIP YOUR SALES TEAM WITH EFFECTIVE MESSAGING, ENGAGEMENT STRATEGIES, AND CLOSING TECHNIQUES. CONVERT CONVERSATIONS INTO CONSISTENT CONVERSIONS WITH A STRUCTURED, PROVEN FRAMEWORK.",
    },
    {
      title: "HOW TO OWN ANY STAGE LIKE A PRO",
      description:
        "BUILD A COMMANDING PRESENCE ON ANY STAGE. LEARN VOCAL MASTERY, BODY LANGUAGE, AND ENERGY CONTROL TO LEAVE A MEMORABLE IMPRESSION EVERY TIME YOU SPEAK.",
    },
    {
      title: "PROFESSIONAL DEVELOPMENT",
      description:
        "ACCELERATE YOUR CAREER WITH MINDSET MASTERY, LEADERSHIP SKILLS, AND EXECUTIVE CONFIDENCE. STAY FUTURE-READY WITH TOOLS THAT POSITION YOU AHEAD IN COMPETITIVE MARKETS.",
    },
    {
      title: "THE ULTIMATE POWER DRESSING WORKSHOP",
      description:
        "TRANSFORM YOUR APPEARANCE INTO A STRATEGIC ASSET. DISCOVER THE PRINCIPLES OF DRESSING FOR CONFIDENCE, CREDIBILITY, AND LASTING IMPRESSIONS.",
    },
    {
      title: "EXECUTIVE PRESENCE FOR ADVANCING CAREER",
      description:
        "ELEVATE YOUR LEADERSHIP IMAGE. LEARN THE BEHAVIORS, BODY LANGUAGE, AND MINDSET NEEDED TO GAIN AUTHORITY AND ACCELERATE CAREER GROWTH.",
    },
    {
      title: "MASTERING POWERFUL PRESENTATIONS - SCI/TECH",
      description:
        "TRANSLATE COMPLEX SCIENTIFIC OR TECHNICAL CONCEPTS INTO SIMPLE PRESENTATIONS. LEARN TO SIMPLIFY, VISUALIZE, AND DELIVER DATA WITH CLARITY AND PERSUASION.",
    },
    {
      title: "MASTERING SOFTWARE DEMOS (2-DAY WORKSHOP)",
      description:
        "MOVE BEYOND TECHNICAL WALKTHROUGHS TO PERSUASIVE SOLUTION-SELLING. LEARN HOW TO PRESENT SOFTWARE DEMOS THAT ENGAGE, QUALIFY, AND CONVERT DECISION-MAKERS.",
    },
    {
      title: "ACING A TEDX PRESENTATION",
      description:
        "DESIGN AND DELIVER A TEDX-LEVEL TALK THAT MOVES PEOPLE. LEARN HOW TO SIMPLIFY YOUR MESSAGE, CONNECT WITH THE AUDIENCE, AND INSPIRE IDEAS WORTH SPREADING.",
    },
    {
      title: "CREATING YOUR UNFORGETTABLE NEW BRAND",
      description:
        "BUILD A PERSONAL BRAND THAT POSITIONS YOU AS AN EXPERT. FROM NARRATIVE AND POSITIONING TO VISUALS AND VOICE, CRAFT A BRAND IDENTITY THAT GETS NOTICED AND REWARDED.",
    },
    {
      title: "MASTERING BUSINESS PRESENTATIONS",
      description:
        "DEVELOP PROFESSIONAL, COMPELLING BUSINESS PRESENTATIONS THAT DELIVER RESULTS. STRUCTURE YOUR MESSAGE, ENGAGE YOUR AUDIENCE, AND CLOSE YOUR PITCH EFFECTIVELY.",
    },
    {
      title: "STORYTELLING WORKSHOP",
      description:
        "MASTER THE ART OF STORYTELLING TO INFLUENCE, INSPIRE, AND CONNECT. LEARN FRAMEWORKS THAT HELP YOU DRIVE EMOTION AND ACTION IN ANY PERSONAL OR PROFESSIONAL SETTING.",
    },
    {
      title: "SALES ENABLEMENT WORKSHOP (3-DAY PROGRAM)",
      description:
        "A DEEP-DIVE PROGRAM TO TRANSFORM YOUR SOFTWARE SALES TEAM. FOCUS ON TRUST-BUILDING, OBJECTION HANDLING, AND STRUCTURED CLOSING TO SCALE RESULTS EFFICIENTLY.",
    },
    {
      title: "BECOMING A SUPER SALESPERSON",
      description:
        "TAKE YOUR SALES SKILLS TO THE NEXT LEVEL. MASTER THE PSYCHOLOGY OF SELLING, RELATIONSHIP-BUILDING, AND MARKET POSITIONING TO COLLECT REVENUE LIKE A PRO.",
    },
    {
      title: "BUSINESS CONSULTING SERVICES",
      description:
        "A TAILORED ADVISORY PROGRAM FOCUSED ON MARKET POSITIONING, GROWTH STRATEGY, BRAND CLARITY, AND OPERATIONAL EFFICIENCY TO UNLOCK YOUR NEXT BUSINESS MILESTONE.",
    },
  ];

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="absolute w-full">
        <img
          src={triangleImg}
          alt="Triangle Divider"
          className="mx-auto -mt-16 w-full h-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto mt-18">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#D0A151] mb-4 tracking-wider">
            <span className="inline-block border-b-8 border-[#D0A151] pb-2">
              SERVICES
            </span>
          </h1>
          <p className="text-gray-300 text-lg font-thin">
            We offer various impactful programs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="border-2 border-white p-6 bg-black hover:bg-gray-900 transition-colors duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#D0A151] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 font-bold text-sm leading-relaxed tracking-wide text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#D0A151] text-black cursor-pointer rounded-2xl px-8 py-3 font-bold text-lg hover:bg-[#D0A151] transition-colors duration-300 transform hover:scale-105"
            >
              READ MORE
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(false)}
              className="bg-[#D0A151] text-white px-8 py-3 font-bold text-lg cursor-pointer rounded-2xl transition-colors duration-300 transform hover:scale-105"
            >
              SHOW LESS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
