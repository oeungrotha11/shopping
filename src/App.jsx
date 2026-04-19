import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Men_product from './pages/men/Men_product'
import Women_product from './pages/men/Women_product'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import ProductCard from './components/ProductCard'



function WithNav() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
function WithOutNav() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<WithNav />}>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/men_product' element={<Men_product/>}/>
          <Route path='/women_product' element={<Women_product/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path='/scrolltotop' element={<ScrollToTop/>}/>

        </Route>
      </Routes>
      <Routes>
        <Route element={<WithOutNav />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App