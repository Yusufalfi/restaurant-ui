"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";



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
      <div className="container mx-auto ">
      {/* absolute top-[17%] md:top-[20%] -traslate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffff] bg-opacity-50 p-4 sm:p-0 rounded-lg sm:rounded-none */}
      <div className="absolute max-w-[250px]  lg:max-w-[50%]  lg:bg-transparent
       top-[17%] lg:top-[35%] -traslate-y-[50%]
       bg-opacity-50 space-y-2 lg:space-y-4 bg-[#ededed]
       sm:p-0 rounded-lg sm:rounded-none p-4 m-4">
        
        <h2 className="text-[26px] md:text-[20px] lg:text-[50px] font-bold leading-[1.2]">{data[currentSlide].title}</h2>
        
        <div className="bg-primary text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black">
          Order Now
        </div>
      </div>
    </div>
      
      <Image
            src={data[currentSlide].image}
            // w-[100%] h-[300px] md:h-[750px] object-cover object-right md:object-left-bottom
            className="w-[100%] h-[300px] md:h-auto object-cover object-right md:object-left-bottom"
            alt="image-hero"
            width={1000}
            height={1000}
            // sizes="(max-width: 768px) 80vw, (min-width: 768px) 27vw"
            // layout="responsive"    
      />
  </div>
  </section>
  );
}

export default Hero

