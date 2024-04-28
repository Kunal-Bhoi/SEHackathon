import React from "react";
import { Navbar } from "./Navbar";
import DivForCards from "./DivForCards";

const Customerhome = () => {
  return (
    <div className="flex min-h-screen w-full flex-col " style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/farm.png')`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      <Navbar />
      {/* <h1>CustomerPage</h1> */}
      <div className="pt-8"> {/* Adding padding to the top */}
        <DivForCards />
      </div>
    </div>
  );
};

export default Customerhome;
