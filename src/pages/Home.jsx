import React from 'react'
import { Product } from '../data/product'

function Home() {

  return (
<<<<<<< HEAD
   <div >
    <div className="text-center mb-10 pt-12">
  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
    Top Categories
  </h1>
  <p className="text-slate-500 mt-2 text-sm sm:text-base">
    Discover our most popular styles
  </p>

  <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
</div>

    <div className='grid grid-cols-4 px-9'>
       {
      Product.map(pro=>(
       
      
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
   <div class="bg-white p-4 pt-7">
        <div class="mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
          <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6 sm:mb-8">Premium Sneakers</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="https://i.pinimg.com/webp/1200x/5c/50/9a/5c509a3cc8ef433ed6575bf51338480b.webp" alt="Product 1"
                    class="w-full h-full object-contain" />
                </div>

                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">Sole Elegance</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$10.00</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>

            <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="https://i.pinimg.com/1200x/71/09/68/710968389609e90b94acbd974953b0b4.jpg" alt="Product 2"
                    class="w-full h-full object-contain" />
                </div>

                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">Urban Sneakers</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$12.00</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>

            <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="https://i.pinimg.com/webp/736x/cd/e9/6f/cde96fdf21ee9174db233d6fc81a47f0.webp" alt="Product 3"
                    class="w-full h-full object-contain" />
                </div>

                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">Velvet Boots</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$14.00</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>

            <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="https://i.pinimg.com/1200x/f1/6f/2b/f16f2b5698f0e07da62a75ccbd97ac1e.jpg" alt="Product 3"
                    class="w-full h-full object-contain" />
                </div>

                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">Summit Hiking</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$12.00</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>

            <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="https://i.pinimg.com/1200x/dd/61/0b/dd610bafcc55fe883290b51596c84edf.jpg" alt="Product 3"
                    class="w-full h-full object-contain" />
                </div>

                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">Zenith Glow</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$15.00</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>

            <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="https://readymadeui.com/images/product14.webp" alt="Product 3"
                    class="w-full h-full object-contain" />
                </div>

                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">Echo Elegance</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$16.00</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>

            <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="https://i.pinimg.com/736x/01/35/05/0135051e1d642b59b6347597ea1435fe.jpg" alt="Product 3"
                    class="w-full h-full object-contain" />
                </div>

                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">Pumps</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$12.00</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>

            <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
              <a href="javascript:void(0)" class="block">
                <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                  <img src="https://i.pinimg.com/736x/30/a0/3f/30a03fae7ae31a5b2ef0da16da3f7335.jpg" alt="Product 3"
                    class="w-full h-full object-contain" />
                </div>

                <div class="flex gap-2 mt-4">
                  <h5 class="text-base font-semibold text-slate-900">Blaze Burst</h5>
                  <h6 class="text-base text-slate-900 font-bold ml-auto">$11.00</h6>
                </div>
                <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
              <div class="flex items-center gap-2 mt-6">
                <div
                  class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Home
