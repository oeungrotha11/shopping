import React from 'react'
import { Product } from '../data/product'
import { Shoes } from '../data/Shoes'
import { GirlShoes } from '../data/Girlshoes'
import { BoyShoes } from '../data/Boyshoes'

function Shop() {
  return (

    <div >
      <div className="text-center mb-10 pt-12 " >
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 ">
          Welcome To Our Shop
        </h1>
        <p className="text-slate-500 mt-2 text-sm sm:text-base">
          There are many type of Prodeuct here.
        </p>

        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className='grid grid-cols-4 px-9'>
        {
          Product.map(pro => (


            <div >

              <div class="bg-gray-100  px-4 py-5 p-3 rounded-lg group overflow-hidden relative z-50 lg:hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all ">
                <a href="javascript:void(0)" >
                  <div class="w-full aspect-square bg-white ">
                    <img src={pro.image} alt="product1"
                      class="h-full w-full object-contain max-lg:p-3" />
                  </div>

                  <div class="relative z-50 lg:absolute mx-auto lg:left-0 lg:right-0 lg:-bottom-80 lg:group-hover:bottom-2 bg-white lg:w-11/12 w-full py-4 px-2 rounded-lg transition-all duration-300">
                    <div class="text-center">
                      <h3 class="text-sm lg:text-[15px] font-semibold text-slate-900">{pro.name}</h3>
                      <h4 class="text-sm lg:text-base text-blue-600 font-bold mt-2">{pro.price}</h4>
                    </div>

                    <div class="flex justify-center space-x-1 mt-4">
                      <svg class="w-[15px] h-[15px] fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg class="w-[15px] h-[15px] fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg class="w-[15px] h-[15px] fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg class="w-[15px] h-[15px] fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg class="w-[15px] h-[15px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    </div >
                    <div className='flex justify-center pt-4'>
                      <button className='bg bg-blue-100 hover:bg-blue-200 rounded-4xl w-25 h-8 '>View</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>


          ))
        }


        {/* shose */}
        <div className="w-screen overflow-x-scroll py-7 ">
          <h1 className='font-bold font-extralight text-5xl pb-8 justify-self-center '>Best Shoes </h1>
          <div className="flex gap-4 w-full  ">

            {Shoes.map((shoe) => (
              <div
                key={shoe.id}
                className="w-100 flex-shrink-0  "
              >
                <div className="bg-white border shadow-md rounded-2xl overflow-hidden">

                  <div className="aspect-[3/2] w-full overflow-hidden">
                    <img
                      src={shoe.image}
                      alt={shoe.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold">{shoe.name}</h3>
                    <p className="text-blue-600 font-bold">${shoe.price}</p>
                  </div>
                  <div className='flex justify-center  pb-3'>
                    <button className='bg bg-blue-300 hover:bg-blue-200 rounded-4xl w-[150px] h-[40px] '>View</button>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div >
      
     <div>
      <h1 className='font-bold font-stretch-ultra-condensed pt-7 text-5xl pb-4 text-amber-300 flex justify-center'>Shoes For Women </h1>
          <div className="flex gap-4 w-full  "></div>
       <div className=' grid grid-cols-4 w-[85%] justify-self-center gap-4'>
        
          
        {/* more shoes for girl */}
        {
          GirlShoes.map(girl => (
            <div class="bg-white p-4 mx-auto w-screen">
              <h2 class="text-black-300 sm:text-2xl mb-6 sm:mb-8">{girl.name}</h2>

              <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ">
                <div class="group overflow-hidden relative">
                  <a href="javascript:void(0)" class="block">
                    <div class="aspect-[3/4] bg-slate-100 w-[90%] overflow-hidden gap-4">
                      <img src={girl.image} alt="Product-1"
                        class="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700" />
                    </div>
                  </a>
                  <div class="p-4 relative">
                    <div class="flex flex-wrap justify-between gap-2 w-[90%] absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                      <button type="button" title="Add to wishlist" class="bg-transparent outline-0 border-0 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-slate-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"></path>
                        </svg>
                      </button>
                      <button type="button" title="Add to cart" class="bg-transparent outline-0 border-0 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-slate-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                          <path
                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                            data-original="#000000"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="z-20 relative bg-white">
                      <h6 class="text-[20px] font-semibold text-slate-900 truncate">{girl.brand}</h6>
                      <h6 class="text-sm text-slate-600 font-medium mt-2">{girl.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
     </div>
     <div>
      <h1 className='font-bold font-stretch-ultra-condensed pt-7 text-5xl pb-4 text-amber-300 flex justify-center'>Shoes For Men </h1>
          <div className="flex gap-4 w-full  "></div>
       <div className=' grid grid-cols-4 w-[85%] justify-self-center gap-4'>
        
          
        {/* more shoes for girl */}
        {
          BoyShoes.map(boy => (
            <div class="bg-white p-4 mx-auto w-screen">
              <h2 class="text-black-300 sm:text-2xl mb-6 sm:mb-8">{boy.name}</h2>

              <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ">
                <div class="group overflow-hidden relative">
                  <a href="javascript:void(0)" class="block">
                    <div class="aspect-[3/4] bg-slate-100 w-[90%] overflow-hidden gap-4">
                      <img src={boy.image} alt="Product-1"
                        class="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700" />
                    </div>
                  </a>
                  <div class="p-4 relative">
                    <div class="flex flex-wrap justify-between gap-2 w-[90%] absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                      <button type="button" title="Add to wishlist" class="bg-transparent outline-0 border-0 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-slate-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"></path>
                        </svg>
                      </button>
                      <button type="button" title="Add to cart" class="bg-transparent outline-0 border-0 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-slate-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                          <path
                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                            data-original="#000000"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="z-20 relative bg-white">
                      <h6 class="text-[20px] font-semibold text-slate-900 truncate">{boy.brand}</h6>
                      <h6 class="text-sm text-slate-600 font-medium mt-2">{boy.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
     </div>
    </div>
  )
}

export default Shop
