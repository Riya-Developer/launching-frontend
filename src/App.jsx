import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn'
import Homepage from './components/Hompage'
import Login from './components/Login'
import Navbar from './components/Navbar';
import './App.css'

const App = () => {
    return (
    <>    
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App