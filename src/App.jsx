import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'



function WithNav(){
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
function WithOutNav(){
  return(
    <div>
      <Outlet/>
    </div>
  )
}

function App() {

  return (
   <BrowserRouter>
      <Routes>
          <Route element={<WithNav/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
           <Route path='/category' element={<Categories/>}/>
           <Route path='/contact' element={<Contact/>}/>

          </Route>
      </Routes>
      <Routes>
          <Route element={<WithOutNav/>}>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
          </Route>
      </Routes>
   </BrowserRouter>
    
  )  
}

export default App
