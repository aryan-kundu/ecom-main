import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";

export default function Checkout({
  addToCart,
  removeFromCart,
  clearCart,
  cart,
  totalAmount}) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
    </Head>
      <div>
        <div className="text-center font-bold text-3xl my-4">Checkout</div>
        <div className="text-xl font-light my-2 ml-20">Coustemer details</div>
        <div className="mx-20 flex">
          <div className=" mb-4 w-1/2 mx-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className=" mb-4 w-1/2 mx-2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className=" mb-4  mx-20">
          <label htmlFor="addresh" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <textarea
            name="addresh"
            id="addresh"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <div className="mx-20 flex">
          <div className=" mb-4 w-1/2 mx-2">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className=" mb-4 w-1/2 mx-2">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="mx-20 flex">
          <div className=" mb-4 w-1/2 mx-2">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="state"
              id="state"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className=" mb-4 w-1/2 mx-2">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div>
          <div className=" ">
            <div className="mx-20 bg-pink-300 z-[100] p-5  ">
              
              <div className="text-center text-3xl  border-b-orange-950 border-b-2">
                {" "}
                Your! Cart
                <span>
                  <FaShoppingCart className="inline-block text-2xl mx-2" />
                </span>
              </div>
              {Object.keys(cart).map((k) => {
                return <div key={k} className="">
                    <div className="flex mt-4 p-2 gap-20  text-2xl text-gray-950">
                      <div className="w-[2/3vw]">{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                      <div className=" flex items-center justify-center text-2xl">
                        {" "}
                        <AiFillMinusCircle
                          onClick={() => {
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                          className="mx-1 cursor-pointer"
                        />
                        {cart[k].qty}
                        <IoAddCircle
                          onClick={() => {
                            addToCart(k, 1, 499, "wear the code", "L", "red");
                          }}
                          className="mx-1 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
               
              })}
              <div className=" mx-2 font-bold">Subtotal: {totalAmount}</div>
            </div>
            <div>
            <div>
                <Link href={"/order"}>
              <button className="flex ml-32 my-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                Pay {totalAmount}
              </button>
              </Link>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
