import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Navbar({
  user,
  logout,
  addToCart,
  removeFromCart,
  clearCart,
  cart,
  totalAmount,
}) {
  const [toggelProfile, setToggelProfile] = useState(false)
  const dropDownProfile=()=>{
    setToggelProfile(!toggelProfile)
  }
  const ref = useRef();
  const toggelViewCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <nav className="sticky">
      <div className=" sticky flex flex-col md:flex-row justify-between top-0 shadow-lg items-center ">
        <div className="logo">
          <Image src="/logo.png" alt="" width={200} height={40} />
        </div>
        <div className="flex flex-wrap">
          <Link href={"/"} className="mx-1 md:mx-5 text-2xl">
            Home
          </Link>
          <Link href={"/contact"} className="mx-1 md:mx-5 text-2xl">
            contact
          </Link>
          <Link href={"/hoodie"} className="mx-1 md:mx-5 text-2xl">
            Hoodie
          </Link>
          <Link href={"/tshirts"} className="mx-1 md:mx-5 text-2xl">
            tshirt
          </Link>
          <Link href={"/mug"} className="mx-1 md:mx-5 text-2xl">
            Mug
          </Link>
        </div>

        <div  className="text-3xl  mx-3 flex cursor-pointer">
          {user.value && <CgProfile onMouseOver={()=>{setToggelProfile(true)}} onMouseLeave={()=>{setToggelProfile(false)}}  />}
          {!user.value && <Link href={"/login"}>Login </Link>}

          <FaShoppingCart onClick={toggelViewCart} className="text-pink-700" />
        </div>
      </div>
      {toggelProfile && <div onMouseOver={()=>{setToggelProfile(true)}} onMouseLeave={()=>{setToggelProfile(false)}} className="absolute top-10 right-10 w-36 p-3 rounded-md bg-pink-400">
        <ol>
          <Link href={"/myaccount"}><li className="hover:text-red-800 hover:cursor-pointer py-1 font-semibold ">My Account</li></Link>
          <Link href={"/order"}><li className="hover:text-red-800 hover:cursor-pointer py-1 font-semibold ">Order</li></Link>
          <li onClick={logout} className="hover:text-red-800 hover:cursor-pointer py-1 font-semibold ">Logout</li>
        </ol>
      </div>}
      <div
        ref={ref}
        className="absolute right-0 top-0 transition-transform transform translate-x-full"
      >
        <div className="w-[30vw] h-[100vh] bg-pink-300 z-[100] p-5  ">
          <IoMdCloseCircle
            onClick={toggelViewCart}
            className="absolute right-0 top-0 text-4xl m-2  cursor-pointer"
          />
          <div className="text-center text-3xl  border-b-orange-950 border-b-2">
            {" "}
            Your! Cart
            <span>
              <FaShoppingCart className="inline-block text-2xl mx-2" />
            </span>
          </div>
          {Object.keys(cart).map((k) => {
            return (
              <div key={k} className="">
                <div className="flex mt-4 p-2 justify-between  text-2xl text-gray-950">
                  <div className="w-[2/3vw]">
                    {cart[k].name} ( {cart[k].size} / {cart[k].variant} )
                  </div>
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
            );
          })}
          <div className=" mx-2 font-bold">Subtotal: {totalAmount}</div>
          <div className="flex justify-center space-x-6 mt-4">
            <div>
              <Link href={"/checkout"}>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Checkout
                </button>
              </Link>
            </div>
            <div>
              <button
                onClick={clearCart}
                className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
