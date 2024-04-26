"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import CartApi from "../-Utils/CartApi";
import Cart from "./Cart";

function Header() {
  const [loggedin, setloggedin] = useState(false);
  const [opencart, setopencart] = useState(false);
  const { cart, setcart } = useContext(CartContext);
  useEffect(() => {
    setloggedin(window.location.href.toString().includes("sign-in"));
    // const intid = setInterval(() => {
    //   console.log("omer have sum fun");
    //   window.location.reload();
    // }, 20000);
    // return () => {
    //   clearInterval(intid);
    // };
  }, []);
  const { user } = useUser();
  useEffect(() => {
    user && getcartItems();
  }, [user]);
  const getcartItems = () => {
    CartApi.getusergetCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log("response from cart", res?.data?.data);
        res?.data?.data.forEach((citem) => {
          setcart((oldcart) => [
            ...oldcart,
            {
              id: citem.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };
  return (
    !loggedin && (
      <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
          <Image src="/logo.svg" width={80} height={80} />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Explore
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-500 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-primary dark:hover:text-white/75"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-5 ">
                  <h2 className="flex gap-1 cursor-pointer">
                    <ShoppingCart onClick={() => setopencart(!opencart)} />(
                    {cart?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />
                  {opencart && <Cart />}
                </div>
              )}

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
