import { useState,useEffect } from 'react'
import './App.css'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Route,Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate=useNavigate();
  


  return (
    <>
      {/* <Login/> */}
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
