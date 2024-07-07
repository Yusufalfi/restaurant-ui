
'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import ListMenu from '../../components/layouts/ListMenu'


const page = () => {

  return (
    <section className='menu '>
      <div className="banner-section bg-[#faf0d9]">
        <div className="container mx-auto px-5">
        {/* flex flex-col md:flex-row justify-between */}
          <div className=" flex justify-between">
    
            <div className=" mt-10 text-black font-bold">
              <h1 className=" flex items-center justify-center text-md uppercase md:mt-10 xl:text-4xl lg:mt-20 mb-5">Enjoy The Best Choice Menu </h1>
              {/* <button className="bg-red-500 text-white py-3 px-9 rounded-md">Order Now</button> */}
            </div>

            <div className="flex-2  mt-10 mb-3">
              <Image
                src='/offerProduct.png'
                alt="image-hero"
                width={300}
                height={150}
                // className='border border-red-500'
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 35vw"
                layout="responsive"
                // objectFit="cover"
              
              />
            </div>
          </div>
        </div>
      </div>


      <div className="menu-section bg-white mt-10 ">
        <div className="container mx-auto px5">
            {/* list menu */}
            <ListMenu title='Burger' />
        </div>
      </div>
    </section>
  )
}

export default page
