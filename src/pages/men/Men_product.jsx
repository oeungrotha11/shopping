import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import FilterBar from '../../components/FilterBar'
import { Men_Product } from '../../data/men_product'
import ProductCard from '../../components/ProductCard'

function Men_product() {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryFromURL = query.get("category") || "all";

  const [category, setCategory] = useState(categoryFromURL);

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const toggleWishlist = (product) => {
    let updated;
    const exists = wishlist.find(item => item.id === product.id);

    if (exists) {
      updated = wishlist.filter(item => item.id !== product.id);
    } else {
      updated = [...wishlist, product];
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    setCategory(categoryFromURL);
  }, [categoryFromURL]);

  const categories = ["all", ...new Set(Men_Product.map(p => p.category))];

  const filteredProducts =
    category === "all"
      ? Men_Product
      : Men_Product.filter(p => p.category === category);

  return (
    <div className='men_product my-32 '>
      <div className=''>
        <FilterBar categories={categories} setCategory={setCategory} category={category} />
      </div>

      <div className="py-[50px] px-6 md:px-10" id='trendy'>
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="hover:text-black transition">Home</a>
          <span>/</span>
          <span className="text-black font-medium">Men</span>
          {category !== "all" && (
            <>
              <span>/</span>
              <span className="text-black font-medium">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Use ProductCard component */}
      <ProductCard 
        products={filteredProducts}
        showWishlist={true}
        showCart={true}
        showView={true}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
        layout="grid"
        
      />
    </div>
  )
}

export default Men_product