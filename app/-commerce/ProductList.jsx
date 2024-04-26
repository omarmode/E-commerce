import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productlist }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {productlist.map((item) => (
        <div>
          <ProductItem product={item} key={item.id} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
