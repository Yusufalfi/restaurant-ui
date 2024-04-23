import React from 'react'
import Link from "next/link";
import HeaderMobile from './HeaderMobile';

export default function Headers() {
  return (
    <>
        <header className="bg-second ">
          <div className='max-w-6xl mx-auto p-4 flex items-center justify-between text-white'>
              <Link href={''} className="text-white font-bold text-2xl">FastFoods</Link>
            <nav className="flex items-center gap-4 font-semibold">
              <Link href={''}>Home</Link>
              <Link href={''}>Menu</Link>
              <Link href={''}>About</Link>
              <Link href={''}>Contact</Link>
              <Link href={''} className=" text-white rounded">Login</Link>
            </nav>
          </div>

          <div className='md:hidden'>
        <HeaderMobile/>
      </div>
      </header>
  
    </>
  );
}

