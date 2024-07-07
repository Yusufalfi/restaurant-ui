"use client"


import Link from 'next/link';
import { ourMenu } from '@/data'
import React, {useRef, useState, useEffect} from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ScreenWindow = () => {


    
    const Ref = useRef()
    const handleNext = () => {
      Ref.current.swiper.slideNext();
    }

    const handlePrev = () => {
      Ref.current.swiper.slidePrev();
    }

     // cek width screen
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined'); 
    useEffect(() => {
      const handleResize = () => {
          setIsMobile(typeof window.innerWidth <= 768);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div>
         <div className='ourMenu'>
        <p className='text-black text-3xl  xl:text-5xl font-bold text-center py-10 mb-1'>Our Menu</p>
        {isMobile ? (
            <Swiper navigation={false} className='mySwiper '
             ref={Ref} slidesPerView={1.1}
             spaceBetween={15}
             pagination={true} modules={[Pagination]}
          >
            {ourMenu.map((item, index) => {
              return (
                <SwiperSlide key={index} >
                  <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4 pt-20 pb-10 lg:pt-20 lg:pb-15 mt-5" >   
                    <div className="p-6 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                      <Image src={item.image} alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3 w-[40vh] md:w-full lg:w-full'  />
                        <h4 className='font-semibold my-3 text-xl'>{item.name}</h4>
                        <div className="flex justify-between mt-2">
                          <p className='font-bold text-xl'>{item.price}</p>
                          <button className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                            add to cart
                          </button>
                        </div>   
                    </div>
                  </div>
                </SwiperSlide>
              )})}
          </Swiper>
        ) : (
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4 pt-20 pb-10 lg:pt-20 lg:pb-15" >   
            {ourMenu.map((item, index) => {
              return (
              <div className="p-6 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={index}>
                <Image src={item.image} alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3 w-[40vh] md:w-full lg:w-full'  />
                  <h4 className='font-semibold my-3 text-xl'>{item.name}</h4>
                  <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                  <div className="flex justify-between mt-2">
                    <p className='font-bold text-xl'>$ {item.price}</p>
                    <button className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full">
                      add to cart
                    </button>
                  </div>          
              </div>
              )}
            )}
          </div>
        )}
     </div>
     <div className="viw text-center mb-5">
        <Link href={'/menu'}>
            <button className="bg-primary text-white font-bold py-2 px-6 rounded-md text-md">
            View All Menu
            </button>
        </Link>
      </div>
    </div>
  )
}

export default ScreenWindow
