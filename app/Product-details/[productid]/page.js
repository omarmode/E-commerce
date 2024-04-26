"use client";
import ProductApi from "../../-Utils/ProductApi";
import Bread from "../../-commerce/Bread";
import React, { useEffect, useState } from "react";
import ProductBanner from "./-components/ProductBanner";
import Productinfo from "./-components/Productinfo";
import { usePathname } from "next/navigation";

function ProductDetails({ params }) {
  const path = usePathname();
  const [ProductDetails, setProductDetails] = useState({});
  useEffect(() => {
    getprouctid_();
  }, [params?.productid]);
  const getprouctid_ = () => {
    ProductApi.getprouctid(params?.productid).then((res) => {
      console.log("productitem", res.data.data);
      setProductDetails(res.data.data);
    });
  };
  return (
    <div className="px-10 md:px-28 py-8" style={{ background: "#111827" }}>
      <Bread path={path} />
      <div className="mt-10 gap-5 grid grid-cols-1 sm:grid-clos-2  sm:gap-0 justify-around">
        <ProductBanner Product={ProductDetails} />
        <Productinfo Product={ProductDetails} />
      </div>
    </div>
  );
}

export default ProductDetails;
