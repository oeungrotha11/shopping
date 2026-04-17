import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import { CategorySection } from '../components/CategorySection'
import ProductCard from '../components/ProductCard'
import '../index.css'
import { Reviews } from '../data/customer'
import { Men_Product } from '../data/men_product'
import { Women_Product } from '../data/women_product'

function Home() {
  const location = useLocation()
  const allproduct = [...Men_Product, ...Women_Product]

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

  // Handle hash scroll when page loads
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const shuffleArray = (array) => {
    return [...array].sort(() => 0.5 - Math.random());
  };

  const [randomProducts, setRandomProducts] = useState([]);
  const [randomShoes, setRandomShoes] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(allproduct);
    setRandomProducts(shuffled.slice(0, 8));

    const shuffledShoes = shuffleArray(allproduct.filter(p =>
      p.category.toLowerCase().includes("shoe") ||
      p.category.toLowerCase().includes("sneaker") ||
      p.category.toLowerCase().includes("heel") ||
      p.category.toLowerCase().includes("sandal")
    ));

    setRandomShoes(shuffledShoes.slice(0, 8));
  }, []);

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
    <div>
      <div className='mt-18 px-0 md:px-10'>
        <HeroCarousel />
      </div>
      <div className='px-10'>
        <CategorySection />
      </div>

      <div className="text-center mb-10 pt-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          TOP CATEGORIES
        </h1>
        <p className="text-slate-500 mt-2 text-sm sm:text-base" id='trendy'>
          Discover our most popular styles
        </p>
        <div className="w-20 h-1 bg-black mx-auto mt-4 rounded-full"></div>
      </div>

      <div className='pt-2 ps-10 pb-7'>
        <h1 className="font-extralight text-2xl md:text-5xl pb-4 py-7">TRENDY PRODUCTS 🔥</h1>
      </div>
      
      {/* Use ProductCard for grid layout */}
      <ProductCard 
        products={randomProducts}
        showWishlist={true}
        showCart={true}
        showView={true}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
        layout="grid"
      />

      <div className='pt-2 ps-10 pb-7'>
        <h1 className="font-extralight text-2xl md:text-5xl pb-4 py-7" 
        id="trendy-shoe">TRENDY SHOES🩴</h1>
      </div>

      {/* Use ProductCard for horizontal layout */}
      <ProductCard 
        products={randomShoes}
        showWishlist={true}
        showCart={true}
        showView={true}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
        layout="horizontal"
      />

      {/* Customer review */}
      <div>
        <h1 className='text-black flex justify-center text-4xl pt-3'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
            <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.20-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.20.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
          </svg>
          Customer Review
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
            <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.20-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.20.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
          </svg>
        </h1>
        {Reviews.map((cus) => (
          <div key={cus.id} className="py-6 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start max-md:flex-col gap-4 md:gap-8 py-6 border-b">
                <div className="flex items-start gap-4 w-full max-w-56">
                  <img src={cus.avatar} className="object-cover rounded-full w-12 h-12 border-2 border-gray-400" alt={cus.name} />
                  <div>
                    <p className="text-[15px] font-semibold">{cus.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">✓</span>
                      <p className="text-xs text-slate-600">Verified Buyer</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h6 className="text-base font-semibold">{cus.comment}</h6>
                  <div className="flex items-center mt-2">
                    {renderStars(cus.rating)}
                    <span className="ml-2 text-sm text-slate-600">{timeAgo(cus.date)}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">Rating: {cus.rating}/5</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center my-6">
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-black transition">
            <input type="text" placeholder="Write a comment..." className="outline-none px-3 py-1 text-sm w-64 bg-transparent" />
            <button className="bg-black text-white hover:bg-gray-700 text-sm px-4 py-1.5 rounded-lg">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
