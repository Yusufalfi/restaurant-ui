import Image from 'next/image'
import React from 'react'
import Banner from './Banner'
import Service from './Service'
import Offer from './Offer'

const HomeMenu = () => {
  return (

    <section className='bg-[#f8f4e9] ' >

      <div className="container mx-auto px-5">
        <p className='text-black text-3xl  xl:text-5xl font-bold text-center py-10 mb-1'>Our Menu</p>
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4 pt-20 pb-10 lg:pt-20 lg:pb-15" >   
           
          <div className="p-6 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src="/p2.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
              <h4 className='font-semibold my-3 text-xl'>Burger</h4>
              <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
              <div className="flex justify-between mt-2">
                 <p className='font-bold text-xl'>$7</p>
                 <button class=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                   add to cart
                </button>
              </div>
                     
          </div>

          <div className="p-6 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src="/assets/mieTelor.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                 <h4 className='font-semibold my-3 text-xl'>Noodles</h4>
                 <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                 <div className="flex justify-between mt-2">
                 <p className='font-bold text-xl'>$8</p>
                 <button class=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                   add to cart
                </button>
              </div>           
          </div>

          <div className="p-6 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src="/kebab.jpg" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                 <h4 className='font-semibold my-3 text-xl'>Kebab</h4>
                 <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                <div className="flex justify-between mt-2">
                 <p className='font-bold text-xl'>$8</p>
                 <button class=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                   add to cart
                </button>
              </div>         
          </div>

          <div className="p-6 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src="/p10.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                 <h4 className='font-semibold my-3 text-xl'>Pizza</h4>
                 <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
              <div className="flex justify-between mt-2">
                 <p className='font-bold text-xl'>$13</p>
                 <button class=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                   add to cart
                </button>
              </div>           
          </div>
            
        </div>
        <div className="viw text-center mb-5">
            <button class="bg-primary text-white font-bold py-2 px-6 rounded-md text-md">
              View All Menu
            </button>
        </div>
         <Banner />
         <Service />
         <Offer /> 

      </div>

    </section>

 
  
  )
}

export default HomeMenu
