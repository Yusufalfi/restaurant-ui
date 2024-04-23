import Image from 'next/image'
import React from 'react'
import Banner from './Banner'
import Service from './Service'
import Offer from './Offer'
import Footer from './Footer'

const HomeMenu = () => {
  return (
    <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">


  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>

  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>

    {/* <section className='bg-[#f8f4e9] ' >
      <div className='max-w-6xl mx-auto 2xl:max-w-screen-2xl'>
          <div className=" mx-auto ">
            <p className='text-black text-5xl font-bold text-center py-10 mb-24'> Our Menu</p>
             <div className="grid grid-cols-4 gap-4 content-center">
              <div className='bg-[#FFF] p-4 rounded-lg justify-center text-center'>
                <img src="/p2.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                <h4 className='font-semibold my-3 text-xl'>Burger</h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                <p className='font-bold text-2xl'>$23</p>
                <button className='bg-primary mt-4 text-white rounded-full px-3'>a</button>
              </div>

              <div className='bg-[#FFF] p-4 rounded-lg justify-center text-center'>
                <img src="/p1.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                <h4 className='font-semibold my-3 text-xl'>Pizza</h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                <p className='font-bold text-2xl'>$23</p>
                <button className='bg-primary mt-4 text-white rounded-full px-3'>a</button>
              </div>


              <div className='bg-[#FFF] p-4 rounded-lg justify-center text-center'>
                <img src="/kebab.jpg" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                <h4 className='font-semibold my-3 text-xl'>Sandwich</h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                <p className='font-semibold text-2xl'>$23</p>
                <button className='bg-primary mt-4 text-white rounded-full px-3'>a</button>
              </div>

              <div className='bg-[#FFF] p-4 rounded-lg justify-center text-center'>
                <img src="/p10.png" alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  />
                <h4 className='font-semibold my-3 text-xl'>Pizza</h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                <p className='font-bold text-2xl'>$23</p>
                <button className='bg-primary mt-4 text-white rounded-full px-3'>a</button>
              </div>


            </div>
          </div>

          <Banner />
          <Service />
          <Offer />
         
          
      </div>
    </section> */}

</section>

 


  )
}

export default HomeMenu
