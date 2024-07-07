

import React, { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import { menuBurger } from '../../data'
import { menuChicken } from '../../data'
import { menuPizza } from '../../data'

function ListMenu({title}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  // console.log(selectedData)


  const handleOpenModal = (item) => {
    setSelectedData(item);
    setModalVisible(true);
  };


  return (
    <div>
             {/* pizza  */}
      <div className="pizza">
        <p className='text-black text-2xl xl:text-4xl font-bold text-center md:mb-20 xl:mb-20'>Pizza</p>
        <div className="grid gap-2 grid-cols-2 mt-10 md:grid-cols-3 xl:grid-cols-4 md:pt-20 md:pb-10 lg:pt-20 lg:pb-15 " >
            {menuPizza.map((item) => {
            return(
                <div className="p-6 px-auto mb-10 bg-[#FFFFFF] rounded-xl hover:shadow-3xl" key={item.id} >
                {/* <img src={menus.image} alt='pizza' className='mx-auto mt-[-50%] rounded-full py-3'  /> */}
                <Image src={item.image} alt='burger' className='mx-auto mt-[-40%] rounded-full py-3' />
                  <div className="md:flex xl:flex justify-between mt-2 ">
                      <p className='text-sm text-center md:text-md xl:text-xl mt-2 mb-3'>{item.name}</p>
                      <div className="flex justify-center">
                        <button onClick={() => handleOpenModal(item)} 
                          className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-primary hover:border-none hover:text-white">
                          Detail
                        </button>
                      </div>
                  </div>   
                </div>
            )})}
            <div className="modal">
            <Modal visible={modalVisible} onClose={() => setModalVisible(false)} data={selectedData} />
            </div>
        </div>
      </div>
     
      <div className="burger">
        <p className='text-black text-2xl xl:text-4xl font-bold text-center md:mb-20 xl:mb-20'>{title}</p>
        <div className="grid gap-2 grid-cols-2 mt-10 md:grid-cols-3 xl:grid-cols-4 md:pt-20 md:pb-10 lg:pt-20 lg:pb-15 " >
            {menuBurger.map((item) => {
            return(
              <div className="p-6 px-auto mb-10 bg-[#FFFFFF] rounded-xl hover:shadow-3xl" key={item.id} >
                <Image src={item.image} alt='burger' className='mx-auto mt-[-40%] rounded-full py-3' />
                <div className="md:flex xl:flex justify-between mt-2">
                    <p className='text-sm text-center md:text-md xl:text-xl mt-2 mb-3'>{item.name}</p>
                    <div className="flex justify-center mt-3">
                        <button onClick={() => handleOpenModal(item)} 
                          className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-primary hover:border-none hover:text-white">
                          Detail
                        </button>
                      </div>
                </div>   
              </div>
            )})}
            <div className="modal">
            <Modal visible={modalVisible} onClose={() => setModalVisible(false)} data={selectedData} />
            </div>
        </div>
      </div>
       

       <div className="chicken">
        <p className='text-black text-2xl xl:text-4xl font-bold text-center md:mb-20 xl:mb-20'>Chicken</p>
        <div className="grid gap-2 grid-cols-2 mt-10 md:grid-cols-3 xl:grid-cols-4 md:pt-20 md:pb-10 lg:pt-20 lg:pb-15" >
            {menuChicken.map((item) => {
            return(
                <div className="p-6 px-auto mb-10 bg-[#FFFFFF] rounded-xl hover:shadow-3xl" key={item.id} >
                <Image src={item.image} alt='burger' className='mx-auto mt-[-40%] rounded-full py-3' />
                <div className="md:flex xl:flex justify-between mt-2">
                    <p className='text-sm text-center md:text-md xl:text-xl mt-2 mb-3'>{item.name}</p>
                    <div className="flex justify-center mt-3">
                        <button onClick={() => handleOpenModal(item)} 
                          className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-primary hover:border-none hover:text-white">
                          Detail
                        </button>
                      </div>
                </div>   
              </div>
            )})}
            <div className="modal">
            <Modal visible={modalVisible} onClose={() => setModalVisible(false)} data={selectedData} />
            </div>
        </div>
      </div>

     


    </div>
  )
}

export default ListMenu
