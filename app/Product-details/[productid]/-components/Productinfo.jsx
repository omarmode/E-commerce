"use client";
import { ShoppingBagIcon, ShoppingCart } from "lucide-react";
import React, { useContext, useEffect } from "react";
import Skeletoninfo from "./Skeletoninfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApi from "../../../-Utils/CartApi";
import { CartContext } from "../../../_context/CartContext";
// import { error } from "console";

function Productinfo({ Product }) {
  const { cart, setcart } = useContext(CartContext);
  // const intout = () => {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 10000);
  // };
  // useEffect(() => {
  //   intout();
  // }, []);
  const { user } = useUser();
  const router = useRouter();
  const handelAddtoCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      /*Add to Cart*/
      const date = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [Product?.id],
        },
      };
      console.log(Product?.id, "ths is data");
      console.log(user.fullName);
      CartApi.addtoCart(date)
        .then((res) => {
          console.log("cart successfully", res.data.data);
          setcart((oldcart) => [
            ...oldcart,
            {
              id: res?.data?.data?.id,
              Product,
            },
          ]);
        })
        .catch((error) => {
          console.log("error", error);
        });
      window.location.reload();
    }
  };
  return (
    <div>
      {Product.id ? (
        <div>
          <h2 className="text-[20px]">{Product?.attributes?.title}</h2>
          <h2 className="text-[15px] mt-5 ">
            {Product?.attributes?.description[0]?.children[0].text}
          </h2>
          <h2
            className=" text-primary text-[32px]"
            style={{ direction: "rtl" }}
          >
            ${Product?.attributes?.price}
          </h2>
          <button
            onClick={() => handelAddtoCart()}
            className="flex gap-2 bg-primary hover:bg-teal-600 p-3 rounded-lg"
          >
            <ShoppingCart /> Add to Cart
          </button>
        </div>
      ) : (
        <Skeletoninfo />
      )}
    </div>
  );
}

export default Productinfo;
