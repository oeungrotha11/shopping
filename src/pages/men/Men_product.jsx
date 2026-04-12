import React, { useEffect, useState } from 'react'
import HeroCarousel from '../../components/HeroCarousel'
import FilterBar from '../../components/FilterBar'
import { Men_Product } from '../../data/men_product'
import { Link, useLocation } from 'react-router-dom';
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';

function Men_product() {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryFromURL = query.get("category") || "all";

  const [category, setCategory] = useState(categoryFromURL);


  useEffect(() => {
    setCategory(categoryFromURL);
  }, [categoryFromURL]);

  const categories = ["all", ...new Set(Men_Product.map(p => p.category))];

  // const [category, setCategory] = useState("all");

  const filteredProducts =
    category === "all"
      ? Men_Product
      : Men_Product.filter(p => p.category === category);





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


  return (
    <div>

      <div className=''>
        <FilterBar categories={categories} setCategory={setCategory} category={category} />
      </div>

      <div className='mt-[138px] px-0 md:px-10' >
        <HeroCarousel />
      </div>

      <div className="py-[50px] px-6 md:px-10" id='trendy'>
        <div className="text-sm text-gray-500 flex items-center gap-2">

          <Link to="/" className="hover:text-black transition" >
            Home
          </Link>

          <span>/</span>

          <Link to="/Men_product" className="hover:text-black transition">
            Men
          </Link>

          {/* show category only if exists */}
          {category && (
            <>
              <span>/</span>
              <span className="text-black font-medium">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </>
          )}

        </div>
      </div>



      {/* men product */}
      <div className='grid grid-cols-2 px-9 gap-2.5 md:grid-cols-4'>
        {
          filteredProducts.map(pro => (
            <div key={pro.id} >
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
    </div>
  )
}

export default Men_product