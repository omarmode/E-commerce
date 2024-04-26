import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductItem({ product }) {
  return (
    <Link
      href={`/Product-details/${product?.id}`}
      style={{ background: "#111821" }}
      className="hover:border-teal-400 hover:border hover:rounded-lg hover:shadow-md hover:cursor-pointer"
    >
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt="banner"
        width={400}
        height={350}
        className="rounded-t-lg h-[170px] object-cover"
      />
      <div>
        <div className="p-3">
          <h2 className="font-medium line-clamp-1">
            {product?.attributes?.title}
          </h2>
          <List className="w-4 h-4" />{" "}
          {/* <h2>{product?.attributes?.category}</h2> */}
        </div>
      </div>
      <h2 style={{ direction: "rtl" }}>{product?.attributes?.price}$</h2>
    </Link>
  );
}

export default ProductItem;
