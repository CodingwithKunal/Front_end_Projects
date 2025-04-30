import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Porductspage from './Components/Porductspage';
import Cartpage from './Components/Cartpage';

const App = () => {
  return (
   <>
    
    
    <Navbar/>
      <Routes>
        <Route path='/' element={<Porductspage/>}/>
        <Route path='/cartpage' element={<Cartpage/>}/>
      </Routes>
    
   </>
  )
}

export default App
