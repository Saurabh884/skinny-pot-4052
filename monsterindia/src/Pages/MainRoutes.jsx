import React from "react";
import { Route, Routes } from "react-router-dom";
import {Login} from "./Login";
import Premium_Services from './Premium_Services';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/premium" element = {<Premium_Services/>} />
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
};

export default MainRoutes;
