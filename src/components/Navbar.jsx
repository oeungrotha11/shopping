import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-2xs fixed ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-semibold text-black">
          AVATO
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-black font-medium items-center">

          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>

          {/* Mega Dropdown */}
          <div className="relative group">
  <button className="hover:text-gray-600 py-2">
    Pages
  </button>

  <div className="
    absolute left-0 top-full w-[500px] bg-white shadow-lg rounded-md p-6 z-50

    opacity-0 invisible translate-y-2
    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0

    transition-all duration-300 ease-out
  ">
    
    <div className="grid grid-cols-2 gap-10">

      {/* Column 1 */}
      <div>
        <h3 className="text-gray-500 text-sm mb-4">Pages</h3>

        <div className="flex flex-col space-y-3">
          <Link to="/shop" className="bg-black text-white px-4 py-2">
            Shop
          </Link>
          <Link to="/checkout" className="hover:text-gray-600">Checkout</Link>
          <Link to="/cart" className="hover:text-gray-600">Cart</Link>
          <Link to="/pricing" className="hover:text-gray-600">Pricing</Link>
          <Link to="/confirmation" className="hover:text-gray-600">Confirmation</Link>
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-gray-500 text-sm mb-4">Layout</h3>

        <div className="flex flex-col space-y-3">
          <Link to="/product-details" className="hover:text-gray-600">
            Product Details
          </Link>
          <Link to="/shop-sidebar" className="hover:text-gray-600">
            Shop With Sidebar
          </Link>
        </div>
      </div>

    </div>
  </div>
</div>

          <Link to="/blog" className="hover:text-gray-600">
            Blog
          </Link>

          <Link to="/elements" className="hover:text-gray-600">
            Elements
          </Link>

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