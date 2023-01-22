import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Signup from "./../Pages/Signup";
import Doctor from "../component/doctor/consult";
import Medicine from "../component/medicine/Category";
import Cart from "../Pages/Cart";
import Success from "./../Pages/Success";
import Payment from "./../Pages/Payment";
import ProListing from "./../samAdmin/ProListing";
import ProCreate from "./../samAdmin/ProCreate";
import ProDetail from "./../samAdmin/ProDetail";
import ProEdit from "./../samAdmin/ProEdit";
import AdminLogin from "../samAdmin/AdminLogin";

import Searched from "../component/medicine/searched";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/Doctor" element={<Doctor />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/checkout/payment-information" element={<Payment />} />
      <Route path="/success" element={<Success></Success>} />

      <Route path="/prolisting" element={<ProListing />}></Route>
      <Route path="/product/create" element={<ProCreate />}></Route>
      <Route path="/product/detail/:proid" element={<ProDetail />}></Route>
      <Route path="/product/edit/:proid" element={<ProEdit />}></Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/Doctor" element={<Doctor />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/Searched" element={<Searched />} />
    </Routes>
  );
};

export default AllRoute;
