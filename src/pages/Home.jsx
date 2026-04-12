import React, { useEffect } from 'react'
import { Product } from '../data/product'
import { useState } from 'react'
import { Shoes } from '../data/Shoes'
import HeroCarousel from '../components/HeroCarousel'
import { CategorySection } from '../components/CategorySection'
import '../index.css'
import { Reviews } from '../data/customer'
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa'

function Home() {

  const [data, setdata] = useState([])

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const api = await fetch('https://fakestoreapi.com/products')
  //     const res = await api.json()
  //     setdata(res)
  //   }

  //   fetchApi()
  // }, [])

  const renderStars = (rate) => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
      if (rate >= i) {
        // full star
        stars.push(
          <svg key={i} className="w-[15px] h-[15px] fill-[#facc15]" viewBox="0 0 14 13">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        )
      } else if (rate >= i - 0.5) {
        // half star
        stars.push(
          <svg key={i} className="w-[15px] h-[15px]" viewBox="0 0 14 13">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="50%" stopColor="#CED5D8" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${i})`}
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
            />
          </svg>
        )
      } else {
        // empty star
        stars.push(
          <svg key={i} className="w-[15px] h-[15px] fill-[#CED5D8]" viewBox="0 0 14 13">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        )
      }
    }

    return stars
  }

  // 📅 Convert date to "time ago"
  const timeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past) / 1000);

    const units = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 }
    ];

    for (let unit of units) {
      const value = Math.floor(diff / unit.seconds);
      if (value >= 1) {
        return `${value} ${unit.label}${value > 1 ? "s" : ""} ago`;
      }
    }
    return "just now";
  };

  return (
    <div >
      <div className=' mt-18 px-0 md:px-10'>

        <HeroCarousel />
      </div>
      <div className='px-10'>
        <CategorySection />

      </div>

      <div className="text-center mb-10 pt-12 ">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          TOP CATEGORIES
        </h1>
        <p className="text-slate-500 mt-2 text-sm sm:text-base" id='trendy'>
          Discover our most popular styles
        </p>

        <div className="w-20 h-1 bg-black mx-auto mt-4 rounded-full"></div>
      </div>
      <div className='pt-2 ps-10 pb-7'>
        <h1 className="  font-extralight text-2xl md:text-5xl pb-4 py-7">TRENDY PRODUCTS 🔥</h1>
      </div>

      <div className='grid grid-cols-2 px-9 gap-2.5 md:grid-cols-4'>
        {
          Product.map(pro => (
            <div >
              <div className="bg-gray-100  px-0.5 py-[1.5px]  rounded-lg group overflow-hidden relative z-50 lg:hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all ">
                <a href="javascript:void(0)" >
                  <div className="w-full aspect-[1/1] sm:aspect-[3/3] bg-white overflow-hidden rounded-[6.9px]">
                    <img
                      src={pro.image}
                      alt="product1"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* pop up */}
                  <div className="relative z-50 lg:absolute mx-auto lg:left-0 lg:right-0 lg:-bottom-80 lg:group-hover:bottom-2 bg-white lg:w-11/12 w-full py-4 px-3 rounded-lg transition-all duration-300">

                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-1">
                          {renderStars(pro.rating.rate)}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {pro.rating.rate} ({pro.rating.count} reviews)
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-2 mt-4">

                      {/* Favorite */}
                      <button className="w-9 h-9 flex items-center justify-center rounded-full 
                      bg-gray-100 hover:bg-gray-100 hover:text-red-400
                       transition duration-200 active:bg-gray-300" title='favorite'>
                        <FaHeart />

                      </button>


                      {/* Add to Cart */}
                      <button className="w-9 h-9 flex  items-center justify-center rounded-full 
                      bg-gray-100 hover:bg-gray-100 hover:text-green-400
                       transition duration-200 active:bg-gray-300" title='Add to cart'>
                        <FaShoppingCart />
                      </button>

                      {/* View Detail */}
                      <button className="px-3 h-9 rounded-full 
                      bg-gray-100 hover:bg-gray-100 hover:text-blue-400
                       transition duration-200 active:bg-gray-300" title='View details'>
                        <FaEye />
                      </button>

                    </div>

                  </div>
                </a>
              </div>
              <div class="text-center my-2.5">
                <h3 class="text-sm lg:text-[15px] font-semibold text-slate-900">{pro.name}</h3>
                <h4 class="text-sm lg:text-base text-gray-500 font-semibold mt-2">${pro.price}</h4>
              </div>
            </div>


          ))
        }
      </div>


      <div className="grid grid-cols-1 px-9 gap-2.5">
        <h1 className="font-extralight text-2xl md:text-5xl pb-4 py-7">
          TRENDY SHOES🩴
        </h1>

        <div className="w-full overflow-x-auto no-scrollbar pb-9">
          <div className="flex gap-4">

            {Shoes.map(shoe => (
              <div
                key={shoe.id}
                className="flex-shrink-0 w-[calc(25%-12px)]"
              >
                <div className="bg-gray-100  px-0.5 py-[1.5px]  rounded-lg group overflow-hidden relative z-50 lg:hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all ">
                  <a href="javascript:void(0)" >
                    <div className="w-full aspect-[1/1] sm:aspect-[3/3] bg-white overflow-hidden rounded-[6.9px]">
                      <img
                        src={shoe.image}
                        alt="product1"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    {/* pop up */}
                    <div className="relative z-50 lg:absolute mx-auto lg:left-0 lg:right-0 lg:-bottom-80 lg:group-hover:bottom-2 bg-white lg:w-11/12 w-full py-4 px-3 rounded-lg transition-all duration-300">

                      {/* Rating */}
                      <div className="flex justify-center space-x-1">
                        <div className="flex flex-col items-center">
                          <div className="flex space-x-1">
                            {renderStars(shoe.rating.rate)}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {shoe.rating.rate} ({shoe.rating.count} reviews)
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-center gap-2 mt-4">

                        {/* Favorite */}
                        <button className="w-9 h-9 flex items-center justify-center rounded-full 
                      bg-gray-100 hover:bg-gray-100 hover:text-red-400
                       transition duration-200 active:bg-gray-300" title='favorite'>
                          <FaHeart />

                        </button>


                        {/* Add to Cart */}
                        <button className="w-9 h-9 flex  items-center justify-center rounded-full 
                      bg-gray-100 hover:bg-gray-100 hover:text-green-400
                       transition duration-200 active:bg-gray-300" title='Add to cart'>
                          <FaShoppingCart />
                        </button>

                        {/* View Detail */}
                        <button className="px-3 h-9 rounded-full 
                      bg-gray-100 hover:bg-gray-100 hover:text-blue-400
                       transition duration-200 active:bg-gray-300" title='View details'>
                          <FaEye />
                        </button>

                      </div>

                    </div>
                  </a>
                </div>
                <div class="text-center my-2.5">
                  <h3 class="text-sm lg:text-[15px] font-semibold text-slate-900">{shoe.name}</h3>
                  <h4 class="text-sm lg:text-base text-gray-500 font-semibold mt-2">${shoe.price}</h4>
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
        {Reviews.map((cus) => (
          <div key={cus.id} className="py-6 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start max-md:flex-col gap-4 md:gap-8 py-6 border-b">

                {/* LEFT */}
                <div className="flex items-start gap-4 w-full max-w-56">
                  <img
                    src={cus.avatar}
                    className="object-cover rounded-full w-12 h-12 border-2 border-gray-400"
                    alt={cus.name}
                  />

                  <div>
                    <p className="text-[15px] font-semibold">{cus.name}</p>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                        ✓
                      </span>
                      <p className="text-xs text-slate-600">Verified Buyer</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1">
                  <h6 className="text-base font-semibold">{cus.comment}</h6>

                  {/* ⭐ Dynamic Stars */}
                  <div className="flex items-center mt-2">
                    {renderStars(cus.rating)}
                    <span className="ml-2 text-sm text-slate-600">
                      {timeAgo(cus.date)}
                    </span>
                  </div>

                  {/* Rating number */}
                  <p className="mt-2 text-sm text-slate-500">
                    Rating: {cus.rating}/5
                  </p>
                </div>

              </div>
            </div>

          </div>
        ))}
        <div className="flex justify-center my-6">
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-black transition">

            <input
              type="text"
              placeholder="Write a comment..."
              className="outline-none px-3 py-1 text-sm w-64 bg-transparent"
            />

            <button className="bg-black text-white hover:bg-gray-700 text-sm px-4 py-1.5 rounded-lg ">
              Post
            </button>

          </div>
        </div>

      </div>





    </div>
  );
}

export default Home
