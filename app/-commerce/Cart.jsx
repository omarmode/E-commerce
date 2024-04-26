"use client";
import Lottie from "lottie-react";
// import React, { useContext } from "react";
import eid6 from "../../public/Animation - 1713904335896.json";
// import { CartContext } from "../_context/CartContext";

// function Cart() {
//   const { cart, setcart } = useContext(CartContext);
//   return (
//     <div className="h-[300px] w-[250px] bg-slate-500 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 overflow-auto">
//       <div className="mt-4 space-y-6">
//         <ul className="space-y-4">
//           {/* {cart?.map((items) => (
//             <li key={items?.id} className="flex items-center gap-4">
//               <img
//                 src={items?.product?.attributes?.banner?.data?.attributes?.url}
//                 alt="img"
//                 className="size-16 rounded object-cover"
//               />

//               <div>
//                 <h3 className="text-sm text-gray-900">
//                   {items?.attributes?.title}
//                 </h3>

//                 <dl className="mt-0.5 space-y-px text-[10px] text-white">
//                   <div>
//                     <dt className="inline">Size:</dt>
//                     <dd className="inline">XXS</dd>
//                   </div>

//                   <div>
//                     <dt className="inline">Color:</dt>
//                     <dd className="inline">White</dd>
//                   </div>
//                 </dl>
//               </div>
//             </li>
//           ))} */}
//           {cart?.map((item) => (
//             <li key={item?.id} className="flex items-center gap-4">
//               <img
//                 src={item?.product?.attributes?.banner?.data?.attributes?.url}
//                 alt=""
//                 className="object-cover w-16 h-16 rounded"
//               />

//               <div>
//                 <h3 className="text-sm text-gray-900 line-clamp-1">
//                   {item?.product?.attributes?.title}
//                 </h3>

//                 <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
//                   <div>
//                     <dt className="inline">Category:</dt>
//                     <dd className="inline">
//                       {item?.product?.attributes?.category}
//                     </dd>
//                   </div>

//                   <div>
//                     <dt className="inline">Price:</dt>
//                     <dd className="inline">
//                       {item?.product?.attributes?.price}
//                     </dd>
//                   </div>
//                 </dl>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="space-y-4 text-center mt-5">
//         <a
//           href="#"
//           className="block rounded border border-gray-700 px-5 py-3 text-sm text-white transition hover:ring-1 hover:ring-gray-400"
//         >
//           View my cart ({cart.length})
//         </a>

//         <a
//           href="#"
//           className="inline-block text-sm text-white underline underline-offset-4 transition hover:text-gray-600"
//         >
//           Continue shopping
//         </a>
//       </div>
//       <Lottie animationData={eid6} style={{ height: "150px" }} />{" "}
//     </div>
//   );
// }

// export default Cart;
import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Link from "next/link";
function Cart() {
  const { cart, setcart } = useContext(CartContext);
  return (
    <div
      className="h-[400px] w-[250px]
    bg-gray-100 z-10 rounded-md border shadow-sm
    absolute mx-10 right-10 top-12 p-5 overflow-auto"
    >
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart?.map((item) => (
            <li key={item?.id} className="flex items-center gap-4">
              <img
                src={item?.product?.attributes?.banner?.data?.attributes?.url}
                alt=""
                className="object-cover w-16 h-16 rounded"
              />

              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">
                  {item?.product?.attributes?.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[13px] text-gray-600">
                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">
                      {item?.product?.attributes?.price}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 space-y-4 text-center">
        <Link
          href="/Cart"
          className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
        >
          View my cart ({cart?.length})
        </Link>

        <a
          href="#"
          className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
      <Lottie animationData={eid6} style={{ height: "80px" }} />{" "}
    </div>
  );
}

export default Cart;
