import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    // grid grid-cols-3
    <div className=" h-screen flex flex-col md:flex-row md:justify-between bg-second md:h-[70vh] rounded-lg">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-4xl font-bold xl:text-6xl">Special Offer</h1>
        <p className="text-white text-2xl xl:text-4xl font-bold">
          GOOD FOOD, DRINKS & <br /> GREAT COMPANY
        </p>
        <p className=' text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Debitis quo excepturi officia repellat eaque illum dicta .</p>
        {/* <CountDown/> */}
       <div className="flex">
         <button className="bg-red-500 text-white rounded-md py-3 px-6">Order Now</button>
        <p className='font-bold text-2xl text-white ml-4 mt-2'>$12.99</p>
       </div>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/assets/paket2.png" alt="ooferProduct" fill className="object-contain" />
      </div>
    </div>
    

  )
}

export default Banner

    


