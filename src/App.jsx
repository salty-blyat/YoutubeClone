import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Path from "./components/Path";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="row">
        <Navbar />
      </div>

      <div className="grid d-flex main h-auto">
        <div className="g-col-1">
          <SideBar />
        </div>

        <div className="g-col-11 ">
          <Path />
        </div>



      </div>
    </>
  );
}

export default App;
