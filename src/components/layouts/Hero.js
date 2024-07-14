"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArrowRight from '../icons/ArrowRight'
// import HeroImg from '../../../public/hero.png'
// import HeroImg from '../../../public/banner-1.jpg'
import HeroImg from '../../../public/banners.png'


import {data} from '../../data'

const Hero = () => {

   const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      // console.log(prev),
      4000
    );
    return () => clearInterval(interval);
  }, []);

 return (
   <section className="section-hero">
    <div className="outline-none border-none">
    <div className="container mx-auto">
    {/* absolute top-[17%] md:top-[20%] -traslate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffff] bg-opacity-50 p-4 sm:p-0 rounded-lg sm:rounded-none */}
     <div className="absolute  max-w-[250px] lg:max-w-[50%]  lg:bg-transparent top-[17%] md:top-[25%] -traslate-y-[50%] bg-opacity-50 space-y-2 lg:space-y-4 bg-[#ededed] sm:p-0 rounded-lg sm:rounded-none p-4 ">
      
      {/* <h3 className="text-cyan-300 text-2xl lg:text-5xl">ini title</h3> */}
      <h2 className="text-[26px] md:text-[20px] lg:text-[50px] font-bold leading-[1.2]">{data[currentSlide].title}</h2>
      
      <div className="bg-primary text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black">
         Shop Now
      </div>
    </div>
    </div>
      
      <Image
            src={HeroImg}
            className="w-[100%] h-[300px] md:h-[750px] object-cover object-right md:object-left-bottom "
            alt="image-hero"
            width={2000}
            height={2000}
            // sizes="(max-width: 768px) 80vw, (min-width: 768px) 27vw"
            // layout="responsive"    
      />
    
    {/* <div className="container mx-auto">
      <div className="flex justify-between">
        <div className=" m-5 mt-7 font-bold text-white">
          <h1 className=" flex items-center justify-center text-xl  uppercase mt-5 md:mt-10 lg:text-5xl lg:mt-20 mb-5">
          {data[currentSlide].title}
          </h1>
          <button className="bg-red-500 text-white text-sm py-2 px-3 md:py-3 rounded-md">Order Now</button>
        </div>

        <div className="mt-5 mb-3">
          <Image
            src={data[currentSlide].image}
            
            alt="image-hero"
            width={200}
            height={200}
            sizes="(max-width: 768px) 80vw, (min-width: 768px) 27vw"
            layout="responsive"    
          />
        </div>
      </div>
    </div> */}
  </div>
  </section>
  );
}

export default Hero

