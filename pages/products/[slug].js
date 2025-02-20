import React, { useState } from 'react'
import {useRouter }from 'next/router'
import Product from '@/model/products';
import mongoose from 'mongoose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Slug({addToCart,product,varient,buyNow}) {

  


  console.log(varient)
    const router=useRouter();
    const {slug} =router.query;
    const [pin, setpin] = useState()
    const [isdiliver, setisdiliver]=useState()


    const  checkpincode = async()=>{
        let pincode =await fetch("http://localhost:3000/api/pincode")
        let pinjson = await pincode.json();
        if(pinjson.includes(parseInt(pin))){
            setisdiliver(true)
            toast.success('The pincode is serviceable', {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
        }
        else{
            setisdiliver(false)
            toast.error('Sorry, the pincode is not serviceable', {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
        }
    }

    const onchnage=(e)=>{
        setpin(e.target.value);
    }

    const [color, setColor] = useState(product.color)
    const [size, setSize] = useState(product.size)
    console.log(color)

    const refershVarient =(newcolor,newsize)=>{
      let url=`http://localhost:3000/products/${varient[newcolor][newsize]['slug']}`
      window.location=url;
    }

  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer />
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.img}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Codes wear</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} ( {product.size} / {product.color} )</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            {Object.keys(varient).includes("Blue") && Object.keys(varient["Blue"]).includes(size) &&  <button onClick={()=>{refershVarient("Blue",size)}} className={`border-2 bg-blue-500  rounded-full w-6 h-6 focus:outline-none ${color==="Blue" ? "border-black" :"border-gray-300"}`}></button>}
            {Object.keys(varient).includes("Green") && Object.keys(varient["Green"]).includes(size) &&  <button onClick={()=>{refershVarient("Green",size)}} className={`border-2 bg-green-500  rounded-full w-6 h-6 focus:outline-none ${color==="Green" ? "border-black" :"border-gray-300"}`}></button>}
            {Object.keys(varient).includes("Red") && Object.keys(varient["Red"]).includes(size) &&  <button onClick={()=>{refershVarient("Red",size)}} className={`border-2 bg-red-500  rounded-full w-6 h-6 focus:outline-none ${color==="Red" ? "border-black" :"border-gray-300"}`}></button>}
            {Object.keys(varient).includes("Black") && Object.keys(varient["Black"]).includes(size) &&  <button onClick={()=>{refershVarient("Black",size)}} className={`border-2 bg-black rounded-full w-6 h-6 focus:outline-none ${color==="Black" ? "border-black" :"border-gray-300"}`}></button>}
            {Object.keys(varient).includes("Yellow") && Object.keys(varient["Yellow"]).includes(size) &&  <button onClick={()=>{refershVarient("Yellow",size)}} className={`border-2 bg-yellow-500  rounded-full w-6 h-6 focus:outline-none ${color==="Yellow" ? "border-black" :"border-gray-300"}`}></button>}
            {Object.keys(varient).includes("Purple") && Object.keys(varient["Purple"]).includes(size) &&  <button onClick={()=>{refershVarient("Purple",size)}} className={`border-2 bg-purple-500  rounded-full w-6 h-6 focus:outline-none ${color==="Purple" ? "border-black" :"border-gray-300"}`}></button>}
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select value={size} onChange={(e)=>{refershVarient(color,e.target.value)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                {Object.keys(varient[color]).includes("S") && <option value={"S"}>S</option>}
                {Object.keys(varient[color]).includes("M") && <option value={"M"}>M</option>}
                {Object.keys(varient[color]).includes("L") && <option value={"L"}>L</option>}
                {Object.keys(varient[color]).includes("XL") && <option value={"XL"}>XL</option>}
                {Object.keys(varient[color]).includes("XXL") && <option value={"XXL"}>XXL</option>}
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
          <button onClick={()=>{buyNow(product.slug,1, product.price, product.title, product.size, product.color)}} className="flex  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Buy now</button>
          <button onClick={()=>{addToCart(product.slug,1, product.price, product.title, product.size, product.color)}} className="flex  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Add to cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <div className='mt-5'>
            <input type="text" onChange={onchnage} className="border-2 border-gray-500" />
            <button onClick={checkpincode} className='ml-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>check</button>
            {isdiliver && isdiliver!=null && <div className='mt-1 text-green-500'>
                we deliver to this pincode
            </div>}
            {!isdiliver && isdiliver!=null && <div className='mt-1 text-red-500'>
                we do not deliver to this pincode
            </div>}
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne({slug :context.query.slug});
  
  let varient = await Product.find({title :product.title});
  let colourSizeSlug ={}
  for(let item of varient){
    if(Object.keys(colourSizeSlug).includes(item.color)){
      colourSizeSlug[item.color][item.size]={slug:item.slug}
    }
    else{
      colourSizeSlug[item.color]={}
      colourSizeSlug[item.color][item.size]={slug:item.slug}
    }
  }

  
  return {
    props: { product: JSON.parse(JSON.stringify(product)),varient: JSON.parse(JSON.stringify(colourSizeSlug))},
  };
}
