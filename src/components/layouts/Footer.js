import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (


<section className=" bg-black border -mt-6">
    <div className="px-5 py-12 mx-auto container">
        <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div className="col-span-3">
                <Link href="#_" className="text-md text-white font-semibold ">FOOD IN AJA</Link>
                <p className="my-4 text-sm leading-normal text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-md font-semibold tracking-wider text-gray-400 uppercase">Product</p>
                <Link href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition  md:mb-2 hover:text-second">Features</Link>
            
            </nav>
           
            <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-md font-semibold tracking-wider text-gray-400 uppercase">Contact</p>
                <Link href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition  md:mb-2 hover:text-second">Advertising</Link>
   
            </nav>
            <div className="col-span-3 lg:col-span-4">
                <p className="mb-3 text-md font-semibold tracking-wider text-gray-400 uppercase">SUBSCRIBE TO OUR NEWSLETTER</p>
                
                    <div className="flex items-center ">
                        <input className="w-full px-3 py-3 bg-white appearance-none focus:outline-none" type="email" placeholder="Enter your email"/>
                        <button className="px-2 py-3  text-md font-medium text-center text-white bg-second" type="submit">Subscribe</button>
                    </div>
               
                <p className="text-sm leading-normal text-gray-500 mt-2">Get the latest updates and news about our product.</p>
            </div>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
            <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">© Copyright 2023 | All Rights Reserved | Bekasi Indonesia</p>
          
        </div>
    </div>
</section>

  
 
  )
}

export default Footer

 
  
