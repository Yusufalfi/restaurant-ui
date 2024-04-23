'use client'

import React from 'react'
import Link from "next/link";
import HeaderMobile from './HeaderMobile';
import { signOut, useSession } from 'next-auth/react';

export default function Headers() {

  // const user = false;
  const session = useSession();
  console.log(session)
  const status = session.status
  const userData = session.data?.user
  let userName = userData?.name  || userData?.email;

  // split username
  if(userName && userName.includes(' ')) {
    userName = userName.split(' ')[0]
  }

  return (

   <section className='bg-second '>
     <div className="container mx-auto">
      <div className="h-12 text-white font-semibold  p-4 flex items-center justify-between uppercase md:h-24 lg:px-5 xl:px-5">

       <div className="text-xl md:font-bold md:text-center">
        <Link href="/">Food In Aja</Link>
      </div>

      {/* LEFT LINKS */}
      {/* <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div> */}
      {/* LOGO */}
   
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <HeaderMobile />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
     
        {status === 'authenticated' && (
          <>
            <Link href='/profile' className='text-md'><span className='underline normal-case'>hello,{userName}</span>  </Link>
            <div className='bg-primary px-4 py-2 rounded'>
              <button onClick={() => signOut()} href="/">Logout</button>
            </div>
          </>
        
        )}
        {status === 'unauthenticated' && (
           <div className="flex justify-center text-center">
             <Link className='mr-2 mt-2' href="/login">Login</Link>
             <div className='bg-primary px-4 py-2 rounded'>
             <Link href="/registers">Register</Link>
             </div>
           </div>
        )}
       
        {/* <CartIcon /> */}
      </div>
    </div>
     </div>
   </section>
  );

}

  // <header className=' bg-second'>
    // <div className="container mx-auto">
    //    <div className='h-12 px-4 items-center flex justify-between text-white  md:h-24 2xl-max-width-60'>
    //      {/* logo */}
    //        {/* <div className='text-xl md:font-bold flex-1 px-16 xl:px-8'></div> */}
    //         <div className='text-xl md:font-bold flex-1 px-16 xl:px-8 items-center'>
    //           <Link href="/">
    //             Food In Aja
    //           </Link>
    //         </div>
      
      
    //         {/* left Link */}
    //         <div className="hidden md:flex gap-5 items-center">
    //           <Link href="/">Home</Link>
    //           <Link href="/menu">Menu</Link>
    //           <Link href="/">Contact</Link>
    //           <div className='bg-primary px-4 py-2 rounded'>
    //             <Link href="/">Login</Link>
    //           </div>
    //         </div>

    //         {/* mobile Menu */}
    //         <div className='md:hidden'>
    //           <HeaderMobile />
    //         </div>

    //         {/* right Links */}
    //         {/* <div className="hidden md:flex gap-3 items-center flex-1 justify-end">
    //           <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
    //             <span>089507061224</span>
    //           </div>
    //           <UserLinks />
    //           <CartIcon />
    //         </div> */}
    //     </div>
    // </div>
      
    // </header>

