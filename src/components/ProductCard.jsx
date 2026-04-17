import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import { ToastContainer, useToast } from './Toast'

function ProductCard({ 
  products, 
  showWishlist = false, 
  showCart = false, 
  showView = true,
  wishlist = [],
  onToggleWishlist,
  onAddToCart,
  layout = 'grid' // 'grid' or 'horizontal'
}) {
  const { toasts, addToast, removeToast } = useToast()

  const renderStars = (rate) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (rate >= i) {
        stars.push(
          <svg key={i} className="w-[15px] h-[15px] fill-[#facc15]" viewBox="0 0 14 13">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        )
      } else if (rate >= i - 0.5) {
        stars.push(
          <svg key={i} className="w-[15px] h-[15px]" viewBox="0 0 14 13">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="50%" stopColor="#CED5D8" />
              </linearGradient>
            </defs>
            <path fill={`url(#half-${i})`} d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        )
      } else {
        stars.push(
          <svg key={i} className="w-[15px] h-[15px] fill-[#CED5D8]" viewBox="0 0 14 13">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        )
      }
    }
    return stars
  }

  // Grid layout (default)
  if (layout === 'grid') {
    return (
      <>
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        <div className='grid grid-cols-2 px-9 gap-2.5 md:grid-cols-4'>
          {products.map(pro => (
            <div key={pro.id}>
              <div className="bg-gray-100 px-0.5 py-[1.5px] rounded-lg group overflow-hidden relative z-50 lg:hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <a href="javascript:void(0)">
                  <div className="w-full aspect-[1/1] sm:aspect-[3/3] bg-white overflow-hidden rounded-[6.9px]">
                    <img src={pro.image} alt="product1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="relative z-50 lg:absolute mx-auto lg:left-0 lg:right-0 lg:-bottom-80 lg:group-hover:bottom-2 bg-white lg:w-11/12 w-full py-4 px-3 rounded-lg transition-all duration-300">
                    <div className="flex justify-center space-x-1">
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-1">
                          {renderStars(pro.rating?.rate || 0)}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {pro.rating?.rate || 0} ({pro.rating?.count || 0} reviews)
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      {showWishlist && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist?.(pro);
                            const isInWishlist = wishlist.find(item => item.id === pro.id);
                            addToast(
                              isInWishlist ? `${pro.name} removed from wishlist!` : `${pro.name} added to wishlist! ❤️`,
                              'success'
                            );
                          }}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:text-red-400"
                          title="Add to wishlist"
                        >
                          {wishlist.find(item => item.id === pro.id)
                            ? <FaHeart className="text-red-500" />
                            : <FaRegHeart />
                          }
                        </button>
                      )}
                      {showCart && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart?.(pro);
                            addToast(`${pro.name} added to cart! 🛒`, 'success');
                          }}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:text-green-400"
                          title="Add to cart"
                        >
                          <FaShoppingCart />
                        </button>
                      )}
                      {showView && (
                        <Link
                          to={`/product/${pro.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:text-blue-400"
                          title="View details"
                        >
                          <FaEye />
                        </Link>
                      )}
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-2.5">
                <h3 className="text-sm lg:text-[15px] font-semibold text-slate-900">{pro.name}</h3>
                <h4 className="text-sm lg:text-base text-gray-500 font-semibold mt-2">${pro.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  // Horizontal layout (for shoes carousel)
  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <div className="w-full px-9 overflow-x-auto no-scrollbar pb-9">
        <div className="flex gap-2.5">
          {products.map(pro => (
            <div key={pro.id} className="flex-shrink-0 w-[calc(50%-20px)] md:w-[calc(25%-12px)]">
              <div className="bg-gray-100 px-0.5 py-[1.5px] rounded-lg group overflow-hidden relative z-50 lg:hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <a href="javascript:void(0)">
                  <div className="w-full aspect-[1/1] sm:aspect-[3/3] bg-white overflow-hidden rounded-[6.9px]">
                    <img src={pro.image} alt="product1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="relative z-50 lg:absolute mx-auto lg:left-0 lg:right-0 lg:-bottom-80 lg:group-hover:bottom-2 bg-white lg:w-11/12 w-full py-4 px-3 rounded-lg transition-all duration-300">
                    <div className="flex justify-center space-x-1">
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-1">
                          {renderStars(pro.rating?.rate || 0)}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {pro.rating?.rate || 0} ({pro.rating?.count || 0} reviews)
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      {showWishlist && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist?.(pro);
                            const isInWishlist = wishlist.find(item => item.id === pro.id);
                            addToast(
                              isInWishlist ? `${pro.name} removed from wishlist!` : `${pro.name} added to wishlist! ❤️`,
                              'success'
                            );
                          }}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:text-red-400"
                          title="Add to wishlist"
                        >
                          {wishlist.find(item => item.id === pro.id)
                            ? <FaHeart className="text-red-500" />
                            : <FaRegHeart />
                          }
                        </button>
                      )}
                      {showCart && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart?.(pro);
                            addToast(`${pro.name} added to cart! 🛒`, 'success');
                          }}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:text-green-400"
                          title="Add to cart"
                        >
                          <FaShoppingCart />
                        </button>
                      )}
                      {showView && (
                        <Link
                          to={`/product/${pro.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:text-blue-400"
                          title="View details"
                        >
                          <FaEye />
                        </Link>
                      )}
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-2.5">
                <h3 className="text-sm lg:text-[15px] font-semibold text-slate-900">{pro.name}</h3>
                <h4 className="text-sm lg:text-base text-gray-500 font-semibold mt-2">${pro.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductCard