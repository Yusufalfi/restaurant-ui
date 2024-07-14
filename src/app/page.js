// import Image from "next/image";
import Hero from "@/components/layouts/Hero";
import OurMenu from "@/components/layouts/OurMenu";
import Banner from '@/components/layouts/Banner'
import Service from '@/components/layouts/Service'
import Offer from '@/components/layouts/Offer'




export default function Page() {
  return (
    <>
      <Hero />
       <div className='bg-[#f8f4e9]' >
        <div className="container mx-auto px-2">
          <OurMenu />
          <Banner />
          <Service />
          <Offer /> 
        </div>
      </div>
    </>
  );
}
