
'use client'


const Modal = ({ visible, onClose, data }) => {
    // console.log("data" + data.price)
  if (!visible) return null;
   
  return (
    <section className='modals'>
        <div className="container mx-auto px-5">
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className="modal-box w-[800px] ">
                    <div className="bg-white p-2 rounded-md ">
                        <div className="modal-header flex justify-between border-b-2 p-4 ">
                            <div className="title">
                                <p className=' text-md mt-2'>Detail</p>
                            </div>

                            <div className="modal-close">
                                <button className='text-black text-2xl' onClick={onClose}>
                                x
                                </button>
                            </div>
                        
                        </div>

                        <div className="modal-body">
                            <div className="p-4 md:p-5 space-y-4">
                                <h1 className=" text-3xl text-black">{data.name}</h1>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    {data.description}
                                </p>
                            </div>
                            
                             <div className=" p-4 flex justify-between">
                                <div className="price">
                                    <p className='font-bold text-xl'>$ {data.price}</p>
                                </div>
                                <div className="toCart">
                                    <button className=" border border-black text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-primary hover:border-none hover:text-white">
                                add to cart
                                </button>
                                </div>

                                
                            </div>   
                        </div>

                    </div>
                    
                </div>
            </div>

        </div>
        
    

    </section>

  )
}

export default Modal
