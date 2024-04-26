"use client";
import Lottie from "lottie-react";
import React from "react";
import eid3 from "../../../../public/Animation - 1713904335896.json";

function Skeletoninfo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[190px] h-[20px] bg-gray-600 rounded-lg animate-pulse"></div>
      <div className="w-[750px] h-[20px] bg-gray-600 rounded-lg animate-pulse"></div>
      <Lottie animationData={eid3} style={{ height: "400px" }} />{" "}
    </div>
  );
}

export default Skeletoninfo;
