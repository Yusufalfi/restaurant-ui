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
  <section className="bg-second">
    <div className="container mx-auto px-5">
      <div className=" flex flex-col lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-white font-bold">
        <h1 className="text-4xl  uppercase p-4 md:p-10  xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-3 px-9 rounded-md">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 relative mt-2 mb-3">
        <Image
          src={data[currentSlide].image}
          alt="image-hero"
          layout="responsive"
          objectFit="cover"
          // width={500} height={300}
          // className=""
        />
      </div>
    </div>
    </div>
  </section>
  );
}

export default Hero

