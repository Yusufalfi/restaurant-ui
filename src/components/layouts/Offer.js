import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
// flex flex-col md:flex-row md:justify-between  md:h-[50vh] 2xl:h-[60vh] rounded-lg mb-7
    <div className="flex flex-col gap-4 md:flex-row md:justify-between  rounded-lg mb-7 ">
          {/* bg-[#feeecc] py-5 px-4 offer mb-4 2xl:h-[48vh] */}
        <div className="bg-[#feeecc] py-5 px-4 offer mb-4">
           <img src="/p9.png" alt='pizza' className='mt-3' width={400}  />
        </div>
{/* flex-1 flex flex-col  gap-2 justify-center items-center text-center mb-5 border border-gray-900 */}
      <div className="flex-1 flex flex-col  gap-2 justify-center items-center text-center mb-5">
        <h1 className="text-black text-3xl font-bold xl:text-5xl">
        Our  
        <span className='text-second ml-3'>
          Special Offer
        </span>
        </h1>
        <p className="text-black text-2xl xl:text-4xl font-bold">
          Going on this month.
        </p>
        <p className=' text-black text-sm md:text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Debitis quo excepturi officia repellat eaque illum dicta .</p>
       <div className="flex">
         <button className="bg-red-500 text-white rounded-md py-3 px-6 text-sm mb-5 ">Order Now</button>
        <p className='font-bold text-2xl text-black ml-4 mt-2'>$12.99</p>
       </div>
      </div>
    </div>
  )
}

export default Offer

