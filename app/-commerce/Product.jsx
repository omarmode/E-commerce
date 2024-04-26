"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApi from "../-Utils/ProductApi";

function Product() {
  const [productlist, setproductlist] = useState([]);
  useEffect(() => {
    getlatestproducts_();
  }, []);
  const getlatestproducts_ = () => {
    ProductApi.getlatestproducts().then((res) => {
      console.log(res.data.data);
      setproductlist(res.data.data);
    });
  };
  return (
    <div className="px-10 md:px-20" style={{ background: "#111827" }}>
      <h2 className="my-4 text-xl">Our Latest Products</h2>
      <ProductList productlist={productlist} />
    </div>
  );
}

export default Product;
