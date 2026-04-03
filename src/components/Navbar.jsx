import React from 'react'

function Navbar() {
  return (
    <div>
     <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-black">
          Shop
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-black font-medium">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">Shop</a>
          <a href="#" className="hover:text-gray-600">Categories</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-black hover:text-gray-600">
            Cart
          </button>
          <button className="px-4 py-2 border rounded-lg text-black hover:bg-gray-100">
            Login
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
