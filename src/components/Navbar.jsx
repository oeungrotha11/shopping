import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-semibold text-black">
          Shop
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-black font-medium items-center">

          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-gray-600">
              Shop
            </button>

            {open && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">

                <Link to="/shop" className="block px-4 py-2 hover:bg-gray-100">
                  🛍 Shop
                </Link>

                <Link to="/checkout" className="block px-4 py-2 hover:bg-gray-100">
                  💳 Checkout
                </Link>

                <Link to="/cart" className="block px-4 py-2 hover:bg-gray-100">
                  🛒 Cart
                </Link>

                <Link to="/pricing" className="block px-4 py-2 hover:bg-gray-100">
                  💰 Pricing
                </Link>

              </div>
            )}
          </div>

          <Link to="/category" className="hover:text-gray-600">
            Categories
          </Link>

          <Link to="/contact" className="hover:text-gray-600">
            Contact
          </Link>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-black hover:text-gray-600">
            Cart
          </button>
          <Link to={'/login'}><button className="px-4 py-2 border rounded-lg text-black hover:bg-gray-100">
            Login
          </button></Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar