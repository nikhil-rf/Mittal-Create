import React from "react";
import CardGrid, { SuccessCard, ZigZagCards } from "./SuccessCard";
import triangleImg from '../assets/whitesvg.png';

// import { SuccessCardDown } from "./SuccessCard";

const SuccessMatrixPage = () => {
  return (
    <div className="h-full w-full bg-black py-18 px-4 space-y-2">
      <img
              src={triangleImg}
              alt="Triangle Divider"
              className="mx-auto -mt-20 w-full h-12"
            />
      <h1 className="ml-18 text-5xl font-bold text-[#CE9D4B] mb-12 mt-28  underline decoration-[#CE9D4B] decoration-6">
        SUCCESS MATRIX
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-2">
        <div className="flex flex-wrap justify-center gap-0">
          <CardGrid />
        </div>

        <div className="flex flex-wrap justify-center gap-x-3 translate-x-[1px] -mt-6">
          {/* <ZigZagCards /> */}
        </div>
      </div>
    </div>
  );
};

export default SuccessMatrixPage;
