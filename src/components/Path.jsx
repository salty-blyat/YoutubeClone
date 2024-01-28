import React from "react";
import Home from "../pages/Home.jsx";
import Short from "../pages/Short.jsx";
import Subscription from "../pages/Subscription.jsx";
import You from "../pages/You.jsx";
import Watch from "../pages/Watch.jsx";
import { Route, Routes } from "react-router-dom"; 


const Path = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Short" element={<Short />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/You" element={<You />} />
        <Route path="/watch/:vidId" element={<Watch />} />
      </Routes>
  );
};

export default Path;
