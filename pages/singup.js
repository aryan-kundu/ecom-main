import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useRouter } from "next/router";

export default function Singup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router=useRouter()

  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])

  const handelChange=(e)=>{
    if(e.target.name=="name"){
      setName(e.target.value)
    }
    else if(e.target.name=="email"){
      setEmail(e.target.value)
    }
    else if(e.target.name=="password"){
      setPassword(e.target.value)
    }
  }

  const  handleSubmit=async(e)=>{
    e.preventDefault();
    const data={name,email,password};
    let res = await fetch("http://localhost:3000/api/singup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })

    let responce = await res.json();
    console.log(responce)
    setName("")
    setEmail("")
    setPassword("")
    toast.success('Singup, Successfull', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }

  return (
    <>
    <form className=''>
      <div className="lg:w-2/6 md:w-2/3 bg-gray-100 rounded-lg p-8 flex mx-auto my-20 flex-col  w-full  ">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className="relative mb-4">
        <label  htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input value={name} onChange={handelChange} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input value={email} onChange={handelChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  htmlFor="password" className="leading-7 text-sm text-gray-600">Passward</label>
        <input value={password} onChange={handelChange} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className='flex justify-center gap-10'>
      <Link href={"/singup"}><button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Singup</button></Link>
      <Link href={"/login"}><button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button></Link>
      </div>
  
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
    
    </form>
    <ToastContainer/>
    </>
  )
}
