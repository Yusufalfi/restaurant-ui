"use client"

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  // const [alert, setAlert] = useState("");
    // for disable form 
  const [creatingUser, setCreatingUser] = useState(false);

  const handleFormSubmit = async (e) => {
    // e.preventDefault();
    // setCreatingUser(true)
    // setError(false);
    // setUserCreated(false)
    
    // const res = await fetch('/api/register', {
    //     method: 'POST',
    //     body: JSON.stringify({email, password}),
    //     headers: {'Content-Type' : 'application/json'},
    // });
    // // const data = await res.json();
    // // console.log(data)
 
    // if(res.ok) {
    //     setUserCreated(true)
    //     // setAlert(data.message)
    // } else {
    //     setError(true);
    // }
    // setCreatingUser(false)
    
  }

  return (
    <div className="p-4 my-5 flex items-center justify-center mb-24">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[80%] md:w-full lg:w-[70%] 2xl:w-1/2 w-full">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 w-full md:h-full md:w-1/2 hidden md:flex" style={{width: '500px', height: '410px', position: 'relative'}} >
          <Image src="/loginBg.png" alt="" layout='fill' className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-5 flex flex-col gap-2  md:w-full border">
          <h1 className="font-bold text-xl xl:text-2xl">Register</h1>
            {userCreated && (
                <div className="my-4 p-2 mb-2 text-sm rounded-lg bg-green-400 ">
                  <span className='text-sm'>{alert}, Now you can <Link className='underline text-primary' href={'/login'}>Login</Link></span>  
                </div>
               
             )}

             {error && (
                <div className="text-center my-4 p-2 mb-2 text-sm rounded-lg bg-primary">
                   <span className='text-sm text-white'>Error ! Please try again</span> 
                </div>
             )}
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="email"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email address
                     </label>
                    <input 
                    type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    disabled={creatingUser}
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
                    value={password}
                    disabled={creatingUser}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••" />
                </div> 
                
                <div className="flex flex-col gap-3">
                    <button type="submit" disabled={creatingUser} className="text-white bg-second hover:bg-[#ffd454] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Register
                    </button>
                      <p className='text-sm'> or login with provider</p>
                    <button className="flex gap-4 p-2 ring-1 ring-orange-100 rounded-md">
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
                      <p className='text-sm'>Existing Account ? <span className='underline font-semibold text-primary'><Link href={'/login'}>Login Here</Link></span></p>  
                    </div>
                    
                </div> 
            </form>

        </div>
      </div>
    </div>
  )
}

export default Register
