"use client";
import Image from "next/image";
import React from "react";
import eid4 from "../../../../public/Animation - 1713904245878.json";
import Lottie from "lottie-react";

function ProductBanner({ Product }) {
  return (
    <div className="flex">
      {Product?.attributes?.banner?.data?.attributes?.url ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "5",
          }}
        >
          <Image
            src={Product?.attributes?.banner?.data?.attributes?.url}
            width={400}
            height={350}
            alt="banner"
            className="rounded-lg  flex"
          />
          <Lottie
            animationData={eid4}
            style={{ height: "200px", display: "flex", direction: "rtl" }}
          />{" "}
        </div>
      ) : (
        <div className="w-[400px] h-[255px] bg-gray-600 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
}

export default ProductBanner;
