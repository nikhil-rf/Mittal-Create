import React from "react";
import {SuccessCard} from "./SuccessCard"; // adjust path if needed
import { SuccessCardDown } from "./SuccessCard";

const SuccessMatrixPage = () => {
  return (

    
    <div className="h-full w-full bg-black py-18 px-4 space-y-2">
        <div className="w-0 h-0 border-x-[80px] border-x-transparent border-t-[40px] border-t-white mx-auto -mt-18"></div>
      <h1 className="ml-18 text-5xl font-bold text-[#CE9D4B] mb-12 mt-28  underline decoration-[#CE9D4B] decoration-6">
        SUCCESS MATRIX
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-2">
        <div className="flex flex-wrap justify-center gap-0">
    <SuccessCard />
    <SuccessCard />
    <SuccessCard />
    <SuccessCard />
  </div>

  <div className="flex flex-wrap justify-center gap-x-3 translate-x-[1px] -mt-6">
    <SuccessCardDown />
    <SuccessCardDown />
    <SuccessCardDown />
    <SuccessCardDown />
    <SuccessCardDown />
  </div>
  
    </div>

    </div>
  );
};

export default SuccessMatrixPage;
