import React from "react";
import { Routes, Route } from "react-router-dom";

import Covid19 from "../Pages/Covid19";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/covid" element={<Covid19 />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
