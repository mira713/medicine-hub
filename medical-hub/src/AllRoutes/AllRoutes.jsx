import React from "react";
import { Routes, Route } from "react-router-dom";

import Covid19 from "../Pages/Covid19";
import Home from './../Pages/Home';
import LoginCommon from './../Components/Login/LoginCommon';


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/covid" element={<Covid19 />} />
        <Route path="/login" element={<LoginCommon/>}> </Route>
      
      </Routes>
    </>
  );
};

export default AllRoutes;
