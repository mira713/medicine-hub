import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Signup from "./../Pages/Signup";
import Doctor from "../component/doctor/consult";
import Medicine from "../component/medicine/Category";
import Cart from "../Pages/Cart";
import Success from "./../Pages/Success";
import Payment from './../Pages/Payment';

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/Doctor" element={<Doctor />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/checkout/payment-information" element={<Payment />} />
      <Route path="/success" element={<Success></Success>} />
    </Routes>
  );
};

export default AllRoute;
