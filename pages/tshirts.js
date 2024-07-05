import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "@/model/products";
export default function tshirts({ products }) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {Object.keys(products).map((items) => {
              return (
                <div key={products[items]._id} className="lg:w-1/4  shadow-lg md:w-1/2 p-4 w-full">
                  <span className="block relative  rounded overflow-hidden">
                    <Link href={`/products/${products[items].slug}`}>
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full block"
                        src={products[items].img}
                      />
                    </Link>
                  </span>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      T-shirt
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[items].title}
                    </h2>
                    <p className="mt-1">₹{products[items].price}</p>
                    <div className="my-2">
                      {products[items].size.includes("S") && <span className=" border-gray-500 border-2 p-1 mx-1">S</span>}
                      {products[items].size.includes("M") && <span className=" border-gray-500 border-2 p-1 mx-1">M</span>}
                      {products[items].size.includes("L") && <span className=" border-gray-500 border-2 p-1 mx-1">L</span>}
                      {products[items].size.includes("XL") && <span className=" border-gray-500 border-2 p-1 mx-1">XL</span>}
                      {products[items].size.includes("XXL") && <span className=" border-gray-500 border-2 p-1 mx-1">XXL</span>}
                    </div>
                    <div>
                    {products[items].color.includes("Red") && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("Blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("Green") && <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("Black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("Purple") && <button className="border-2 border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[items].color.includes("Yellow") && <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({category:"tshirt"});
  let tshirt={};
    for(let item of products){
        if(item.title in tshirt){
            if(!tshirt[item.title].color.includes(item.color) && item.availableQty>0){
                tshirt[item.title].color.push(item.color)
            }
            if(!tshirt[item.title].size.includes(item.size) && item.availableQty>0){
                tshirt[item.title].size.push(item.size)
            }
        }
        else{
            tshirt[item.title]=JSON.parse(JSON.stringify(item));
            if(item.availableQty>0){
                tshirt[item.title].color=[item.color];
                tshirt[item.title].size=[item.size];
            }
        }
      }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirt)) },
  };
}
