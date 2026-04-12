import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Men_Product } from '../data/men_product';
import { Women_Product } from '../data/women_product';

function Navbar() {


  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 left-0 z-[9999]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-semibold text-black">
          AVATO
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-black font-medium items-center">

          <Link to="/" className="hover:text-gray-600">
            HOME
          </Link>

          {/* Mega Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-600 py-2">
              PAGES
            </button>

            <div className="
                 absolute left-0 top-full w-[500px] bg-white shadow-lg  p-6 z-50

                 opacity-0 invisible translate-y-2
                 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0

                 transition-all duration-300 ease-out mt-4
               ">

              <div className="grid grid-cols-2 gap-10">

                {/* Column 1 */}
                <div>
                  <h3 className="text-gray-500 text-sm mb-4">Pages</h3>

                  <div className="flex flex-col space-y-3">
                    <Link to="/shop" className="hover:text-white hover:bg-black px-2 py-2">
                      Shop
                    </Link>
                    <Link to="/checkout" className="hover:text-white hover:bg-black px-2 py-2">Checkout</Link>
                    <Link to="/cart" className="hover:text-white hover:bg-black px-2 py-2">Cart</Link>
                    <Link to="/pricing" className="hover:text-white hover:bg-black px-2 py-2">Pricing</Link>
                    <Link to="/confirmation" className="hover:text-white hover:bg-black px-2 py-2">Confirmation</Link>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="text-gray-500 text-sm mb-4">Layout</h3>

                  <div className="flex flex-col space-y-3">
                    <Link to="/product-details" className="hover:text-white hover:bg-black px-2 py-2">
                      Product Details
                    </Link>
                    <Link to="/shop-sidebar" className="hover:text-white hover:bg-black px-2 py-2">
                      Shop With Sidebar
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>


          {/* men */}
          <div className="relative group">
            <button className="hover:text-gray-600 py-2">
              MEN
            </button>

            <div className="
                 absolute left-0 top-full w-[500px] bg-white shadow-lg p-6 z-50
                
                 opacity-0 invisible translate-y-2
                 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                
                 transition-all duration-300 ease-out mt-4
               ">

              <div className="grid grid-cols-2 gap-10">

                {/* Column 1 */}
                <div>
                  <h3 className="text-gray-500 text-sm mb-4">Clothing</h3>

                  <div className="flex flex-col space-y-3">
                    <Link to="/Men_product" className="hover:text-white hover:bg-black px-2 py-2">
                      All
                    </Link>
                    <Link to="/Men_product?category=shirt" className="hover:text-white hover:bg-black px-2 py-2">
                      Shirts
                    </Link>

                    <Link to="/Men_product?category=hoodie" className="hover:text-white hover:bg-black px-2 py-2">
                      Hoodies
                    </Link>

                    <Link to="/Men_product?category=pant" className="hover:text-white hover:bg-black px-2 py-2">
                      Pants
                    </Link>

                    <Link to="/Men_product?category=short" className="hover:text-white hover:bg-black px-2 py-2">
                      Shorts
                    </Link>

                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="text-gray-500 text-sm mb-4">Shoes</h3>

                  <div className="flex flex-col space-y-3">

                    <Link to="/Men_product?category=Sandals" className="hover:text-white hover:bg-black px-2 py-2">
                      Sandals
                    </Link>
                    <Link to="/Men_product?category=Sneakers" className="hover:text-white hover:bg-black px-2 py-2">
                      Sneakers
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* women */}
          <div className="relative group">
            <button className="hover:text-gray-600 py-2">
              WOMEN
            </button>

            <div className="
                 absolute left-0 top-full w-[500px] bg-white shadow-lg p-6 z-50
                
                 opacity-0 invisible translate-y-2
                 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                
                 transition-all duration-300 ease-out mt-4
               ">

              <div className="grid grid-cols-2 gap-10">

                {/* Column 1 */}
                <div>
                  <h3 className="text-gray-500 text-sm mb-4">Clothing</h3>

                  <div className="flex flex-col space-y-3">
                    <Link to="/Women_product" className="hover:text-white hover:bg-black px-2 py-2">
                      All
                    </Link>
                    <Link to="/Women_product?category=dresses" className="hover:text-white hover:bg-black px-2 py-2">Dresses</Link>
                    <Link to="/Women_product?category=hoodies" className="hover:text-white hover:bg-black px-2 py-2">Hoodies</Link>
                    <Link to="/Women_product?category=jeans" className="hover:text-white hover:bg-black px-2 py-2">Jeans</Link>
                    <Link to="/Women_product?category=shorts" className="hover:text-white hover:bg-black px-2 py-2">Shorts</Link>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="text-gray-500 text-sm mb-4">Shoes</h3>

                  <div className="flex flex-col space-y-3">
                
                    <Link to="/Women_product?category=sandals" className="hover:text-white hover:bg-black px-2 py-2">
                      Sandals
                    </Link>
                    <Link to="/Women_product?category=sneakers" className="hover:text-white hover:bg-black px-2 py-2">
                      Sneakers
                    </Link>
                    <Link to="/Women_product?category=heels" className="hover:text-white hover:bg-black px-2 py-2">
                      Heels
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="text-black hover:text-gray-600">
            Cart
          </button>

          <Link to="/login">
            <button className="px-4 py-2 border rounded-lg text-black hover:bg-gray-100">
              Login
            </button>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar