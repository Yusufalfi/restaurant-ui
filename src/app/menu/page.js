
'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import ListMenu from '../../components/layouts/ListMenu'


const page = () => {

  return (
    <section className='menu '>
      <div className="banner-section bg-[#faf0d9] h-auto">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-2  py-6">
            <div className="flex-1 flex flex-col gap-2 text-black font-bold">
              <h1 className="text-3xl uppercase p-4 md:p-10  xl:text-4xl mt-5">
                  Enjoy The Best <br />Choice Menu 
              </h1>
            </div>

            <div className="mt-2 mb-3">
              <Image
                src='/offerProduct.png'
                alt=""
                width={550} height={500}
                className=""
              />
            </div>
          </div>
        </div>
      </div>


      <div className="menu-section bg-white mt-10 ">
        <div className="container mx-auto px5">
            {/* list menu */}
            <ListMenu title='Burger' />
            {/* <ListMenu title='Chicken' /> */}
        </div>
      </div>
    </section>
  )
}

export default page
