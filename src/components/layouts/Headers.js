'use client'

import React from 'react'
import Link from "next/link";
import HeaderMobile from './HeaderMobile';
import { signOut, useSession } from 'next-auth/react';

export default function Headers() {

  // const user = false;


  return (

   <section className='bg-second '>
     <div className="container mx-auto">
      <div className="h-12 text-white font-semibold  p-4 flex items-center justify-between uppercase md:h-24 lg:px-5 xl:px-5">

       <div className="text-xl md:font-bold md:text-center">
        <Link href="/">Food In Aja</Link>
      </div>

   
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <HeaderMobile />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
     
     
           <div className="flex justify-center text-center">
             <Link className='mr-2 mt-2' href="/login">Login</Link>
             <div className='bg-primary px-4 py-2 rounded'>
             <Link href="/registers">Register</Link>
             </div>
           </div>
     
      </div>
    </div>
     </div>
   </section>
  );

}



