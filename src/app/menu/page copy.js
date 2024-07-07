
'use client'

import Hero from '@/components/layouts/Hero'
import Image from 'next/image'
import React, { useState } from 'react'
// import gambar from ''

import Modal from '../../components/layouts/Modal'
// import Banner from './Banner'

import { menu } from '../../data.js'



const page = () => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedData(item);
    setModalVisible(true);
  };

  return (
    <section className='menu '>
      <div className="banner-section bg-[#FEF9EC] h-auto">
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

         <div className="break-fast">
            <p className='text-black text-2xl  xl:text-4xl font-bold text-center py-10 mb-1'>Break fast</p>
            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4 pt-20 pb-10 lg:pt-20 lg:pb-15 " >
              {menu.map((menus) => {
                return(
                  <div className="p-6 bg-[#FFFFFF] rounded-xl hover:shadow-xl" key={menus.id}>
                    {/* <img src={menus.image} alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  /> */}
                    <Image src={menus.image} alt='burger' className='mx-auto mt-[-50%] rounded-full py-3' />
                  <div className="flex justify-between mt-2">
                    <p className='text-md mt-1'>{menus.name}</p>
                    <button onClick={()=>setShowModal(true)} className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-primary hover:border-none hover:text-white"> Detail</button>
                  </div>  
                  <div className="modal">
                    {showModal && 
                      <Modal data={menus} onClose={() => setShowModal(false)} />
                    }
                  </div>
              </div>
                )})}
            </div>
         </div>


         {/* <div className="break-fast">
            <p className='text-black text-2xl  xl:text-4xl font-bold text-center py-10 mb-1'>Chicken</p>
            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4 pt-20 pb-10 lg:pt-20 lg:pb-15" >
              <div className="p-6 bg-[#FFFFFF] rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src="/p2.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                  <h4 className='font-semibold my-3 text-xl'>Burger</h4>
                  <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                  <div className="flex justify-between mt-2">
                    <p className='font-bold text-xl'>$7</p>
                    <button className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                      add to cart
                    </button>
                  </div>  
              </div>

              <div className="p-6 bg-[#FFFFFF] rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src="/p2.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                  <h4 className='font-semibold my-3 text-xl'>Burger</h4>
                  <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                  <div className="flex justify-between mt-2">
                    <p className='font-bold text-xl'>$7</p>
                    <button className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                      add to cart
                    </button>
                  </div>  
              </div>

              <div className="p-6 bg-[#FFFFFF] rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src="/p2.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                  <h4 className='font-semibold my-3 text-xl'>Burger</h4>
                  <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                  <div className="flex justify-between mt-2">
                    <p className='font-bold text-xl'>$7</p>
                    <button className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                      add to cart
                    </button>
                  </div>  
              </div>

              <div className="p-6 bg-[#FFFFFF] rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src="/p2.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                  <h4 className='font-semibold my-3 text-xl'>Burger</h4>
                  <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                  <div className="flex justify-between mt-2">
                    <p className='font-bold text-xl'>$7</p>
                    <button className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                      add to cart
                    </button>
                  </div>  
              </div>

            </div>
         </div> */}
     
        </div>
      </div>
    </section>
  )
}

export default page
