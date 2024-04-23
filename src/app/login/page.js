"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
// import {signIn} from "next-auth/react"


const Page = () => {


 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState("");

    const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoginInProgress(true);
  //   //sign using next auth 
  //   await signIn('credentials', {email,password});
  //   // await signIn('credentials')
  
  //   setLoginInProgress(false)
    
  }



  return (
    <div className="p-4 my-5 flex items-center justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[80%] md:w-full lg:w-[70%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 w-full md:h-full md:w-1/2 hidden md:flex" style={{width: '500px', height: '410px', position: 'relative'}} >
          <Image src="/login.jpg" alt="" layout='fill' className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-5 flex flex-col gap-2  md:w-full border">
          <h1 className="font-bold text-xl xl:text-2xl">Login</h1>
           
            <form onSubmit={handleFormSubmit} >
                <div className="mb-4">
                    <label htmlFor="email"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email address
                     </label>
                    <input 
                    name='email'
                    type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="john.doe@company.com" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                     </label>
                    <input 
                    type="password" 
                    name='password'
                    value={password}
                 
                    onChange={(e) => setPassword(e.target.value)}
                    id="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••" />
                </div> 
                
                <div className="flex flex-col gap-3">
                    <button type="submit"  className="text-white bg-second hover:bg-[#ffd454] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Login
                    </button>
                      <p className='text-sm'> or login with provider</p>
                    <button type='button' className="flex gap-4 p-2 ring-1 ring-orange-100 rounded-md">
                        <Image
                        src="/google.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                        />
                        <span className='text-sm text-center font-semibold'>Sign in with Google</span>
                    </button>
                    <div className="existing">
                      <p className='text-sm'>No Have Account ? <span className='underline font-semibold text-primary'><Link href={'/registers'}>Register Here</Link></span></p>  
                    </div>
                    
                </div> 
            </form>

        </div>
      </div>
    </div>
  )
}

export default Page
