import React from 'react'
import { Product } from '../data/product'
import { Link } from 'react-router-dom'
import { Shoes } from '../data/Shoes'
import ProductVeiw from './ProductVeiw'
import { Reviews } from '../data/customer'

function Home() {

  return (

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
      <div className='pt-2 ps-16 pb-7'>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          <i class="fa-solid fa-shirt"></i>Clothes
        </h1></div>

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
                      <button onClick={() => ProductVeiw} className='bg bg-blue-100 hover:bg-blue-200 rounded-4xl w-25 h-8 '>View</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>


          ))
        }


        {/* shose */}

        <div className="w-screen overflow-x-scroll py-7 ">
          <h1 className='font-bold font-extralight text-5xl pb-4'>Best Shoes </h1>
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

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      {/* Customer review */}
      <div>
        <h1 className='text-blue-500 flex justify-center text-4xl pt-3'><svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                    </svg>Customer Review<svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                    </svg></h1>
        {
          Reviews.map(cus=>(
            <div>
        <div class="py-6 px-4">
          <div class="max-w-5xl mx-auto">
            <h3 class="text-2xl font-bold text-slate-900 !leading-tight mb-3"></h3>

            <div>
              <div class="flex items-start max-md:flex-col gap-4 md:gap-8 py-6">
                <div class="flex items-start gap-4 w-full max-w-56">
                  <div class="shrink-0">
                    <img src={cus.avatar} class="object-cover rounded-full w-12 h-12 border-2 border-gray-400" alt="customer-img-1" />
                  </div>
                  <div>
                    <p class="text-[15px] text-slate-900 font-semibold">{cus.name}</p>
                    <div class="flex items-center gap-2 mt-2">
                      <span class="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2 fill-green-700" viewBox="0 0 24 24">
                          <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                        </svg>
                      </span>
                      <p class="text-slate-600 text-xs">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 class="text-slate-900 text-base font-semibold">{cus.comment}</h6>
                  <div class="flex items-center space-x-0.5 text-yellow-400 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                    </svg>
                    <p class="text-slate-600 text-sm !ml-2">2 days ago</p>
                  </div>
                  <div class="mt-4">
                    <p class="text-slate-600 text-[15px] leading-relaxed"> <h1>Rating  {cus.rating} </h1></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
