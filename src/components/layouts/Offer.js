import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (

    <div className="h-screen flex flex-col md:flex-row md:justify-between  md:h-[80vh] 2xl:h-[60vh] rounded-lg mb-5 ">

     {/* <div className="flex-1 w-full relative  bg-[#feeecc] py-5 px-5 offer mb-4">
        <Image src="/p9.png" alt="" fill className="object-contain" />
      </div> */}

        <div className="bg-[#feeecc] py-5 px-4 offer mb-4 2xl:h-[48vh]">
           <img src="/p9.png" alt='pizza' className='mt-3' width={400}  />
        </div>

      <div className="flex-1 flex flex-col  gap-2 justify-center items-center text-center mb-5">
        <h1 className="text-black text-4xl font-bold xl:text-5xl">
        Our  
        <span className='text-second ml-3'>
          Special Offer
        </span>
        </h1>
        <p className="text-black text-3xl xl:text-4xl font-bold">
          Going on this month.
        </p>
        <p className=' text-black text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Debitis quo excepturi officia repellat eaque illum dicta .</p>
        {/* <CountDown/> */}
       <div className="flex">
         <button className="bg-red-500 text-white rounded-md py-3 px-6 text-md ">Order Now</button>
        <p className='font-bold text-2xl text-black ml-4 mt-2'>$12.99</p>
       </div>
      </div>
    </div>
  )
}

export default Offer

