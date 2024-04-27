import React from "react";
import { Navbar } from "./Navbar";
import DivForCards from "./DivForCards";

const Customerhome = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      {/* <h1>CustomerPage</h1> */}
      <div className="pt-8"> {/* Adding padding to the top */}
        <DivForCards />
      </div>
    </div>
  );
};

export default Customerhome;
