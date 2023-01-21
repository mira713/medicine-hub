import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/login'
import Signup from './../Pages/Signup';
import Doctor from '../component/doctor/consult'
import Medicine from '../component/medicine/Category';
import Searched from "../component/medicine/searched";

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path="/Doctor" element={<Doctor/>}/>
        <Route path="/medicine" element={<Medicine/>}/>
        <Route path="/searched" element={<Searched/>}/>
    </Routes>
  )
}

export default AllRoute