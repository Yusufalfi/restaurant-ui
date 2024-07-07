'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// menu link 
const link = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 1, title: "Contact", url: "/"},
    
]


const HeaderMobile = () => {

    const [open, setOpen] = useState(false)

// login temporary
const user = false

  return (
    <div className=''>
    {
        !open ? (
            <Image 
            src="/open.png"
            alt="menu"
            width={20}
            height={20}
            onClick={() => setOpen(true)} /> 
        ) : (
            <Image 
            src="/close.png"
            alt="menu"
            width={20}
            height={20}
            onClick={() => setOpen(false)} />
        )
    }

     {open && (
            <div className=' bg-second mt-1 text-white absolute left-0 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-2xl z-10'>
             {link.map((item, index) => {
                 return (
                     <Link href={item.url} key={item.id} onClick={()=> setOpen(false)}>{item.title}</Link>
                 )
             })}
             {!user ?(
                 <Link href="/login" onClick={()=> setOpen(false)}>Login</Link>
             ) : (
                 <Link href="/orders" onClick={()=> setOpen(false)}>Order</Link>
             )}
             <Link href="/cart" onClick={()=> setOpen(false)}>
                 {/* <CartIcon /> */}
             </Link>
         </div>
        )}
      
    </div>
  )
}

export default HeaderMobile
