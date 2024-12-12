import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import { Cursor } from './Components/Cursor'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Services } from './Components/Services'
import { Contact } from './Components/Contact'
import { About } from './Components/About'
import Footer from './Components/Footer'




export default function App() {
  return (
    <>
     <BrowserRouter>
      <Cursor/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*'/> 
      </Routes>
      <Footer/>
     </BrowserRouter>
      
    </>
  )
}






