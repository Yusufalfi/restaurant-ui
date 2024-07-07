'use client';


import Banner from './Banner'

import Service from './Service'
import Offer from './Offer'
;
import OurMenu from './OurMenu'



const HomeMenu = () => {
// cek width screen
  
    
  return (
    <section className='bg-[#f8f4e9] ' >
      <div className="container mx-auto px-5">
         <OurMenu />
         <Banner />
         <Service />
         <Offer /> 
      </div>
    </section>
  
  )
}

export default HomeMenu
