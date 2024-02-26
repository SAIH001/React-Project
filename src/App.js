import React from 'react'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Home from './Pages/Home'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AboutScreen from './Pages/AboutScreen'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutScreen/>}/>

    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App