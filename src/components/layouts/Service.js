import React from 'react'

const Service = () => {
  return (
    <div>

    
    <p className='text-second text-3xl xl:text-5xl font-bold text-center py-8 mb-5'>
            Order Delivery 
            <span className='text-black'> In Just <br /> 30 Minute</span>     
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3 pt-3 pb-10 lg:pt-5 lg:pb-20" >   
           
            <div className='bg-[#FFF] p-4 rounded-lg justify-center text-center'>
                <img src="/order.png" alt='pizza' className='mx-auto' width={100}  />
                <h4 className='font-semibold my-3 text-xl'>Order Your Food</h4>
                <p className='text-md'>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className=' bg-second p-4 rounded-lg justify-center text-center'>
                <img src="/cooking.png" alt='pizza' className='mx-auto' width={100}  />
                <h4 className='font-semibold my-3 text-xl'>Delicous Recipe</h4>
                <p className='text-md'>Lorem ipsum dolor sit amet.</p>            
            </div>

         <div className=' bg-[#FFF] p-4 rounded-lg justify-center text-center'>
                <img src="/delivery-man.png" alt='pizza' className='mx-auto' width={100}  />
                <h4 className='font-semibold my-3 text-xl'>Delivery & Pickup</h4>
                <p className='text-md'>Lorem ipsum dolor sit amet.</p>
            </div>
       
        </div>

    </div>

    
  )
}

export default Service

{/* <div className="">
        <p className='text-second text-5xl font-bold text-center py-8 mb-10'>
            Order Delivery 
            <span className='text-black'> In Just <br /> 30 Minute</span>     
        </p>
        <div className="grid grid-cols-3 gap-4 content-center">
            <div className='bg-[#FFF] p-4 rounded-lg justify-center text-center'>
                <img src="/order.png" alt='pizza' className='mx-auto' width={100}  />
                <h4 className='font-semibold my-3 text-xl'>Order Your Food</h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className=' bg-second p-4 rounded-lg justify-center text-center'>
                <img src="/cooking.png" alt='pizza' className='mx-auto' width={100}  />
                <h4 className='font-semibold my-3 text-xl'>Delicous Recipe</h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>            
            </div>


            <div className=' bg-[#FFF] p-4 rounded-lg justify-center text-center'>
                <img src="/delivery-man.png" alt='pizza' className='mx-auto' width={100}  />
                <h4 className='font-semibold my-3 text-xl'>Delivery & Pickup</h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
            </div>

        </div>
    </div> */}
