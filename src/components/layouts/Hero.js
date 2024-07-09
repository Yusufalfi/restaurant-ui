"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArrowRight from '../icons/ArrowRight'


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
  <section className="bg-second  xl:h-[60vh]">
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className=" m-5 mt-8 font-bold text-white">
          <h1 className=" flex items-center justify-center text-xl  uppercase mt-5 md:mt-10 lg:text-5xl lg:mt-20 mb-5">
          {data[currentSlide].title}
          </h1>
          <button className="bg-red-500 text-white text-sm py-2 px-3 md:py-3 rounded-md">Order Now</button>
        </div>

        <div className="mt-3 mb-3">
          <Image
            src={data[currentSlide].image}
            alt="image-hero"
            width={200}
            height={100}
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 27vw"
            layout="responsive"    
          />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero

