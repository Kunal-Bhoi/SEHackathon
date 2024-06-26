import React from "react";
import { Product } from "./product";
import { Navbar } from "./Navbar";
import Catalog from "./catalog";


const Farmerhome = () => {
  return (
    <div className="flex min-h-screen w-full flex-col" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/farm.png')`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>

      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Product />
        <Catalog/>
        </div>
      </main>
    </div>
  );
};

export default Farmerhome;
