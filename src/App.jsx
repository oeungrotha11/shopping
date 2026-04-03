import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function WithNav(){
  return(
    <div>
      <Navbar/>
      <Outlet/>
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

          </Route>
      </Routes>
      <Routes>
          <Route element={<WithOutNav/>}>

          </Route>
      </Routes>
   </BrowserRouter>
    
  )  
}

export default App
