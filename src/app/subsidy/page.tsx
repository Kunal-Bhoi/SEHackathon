"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DivForsubsidy from "../components/Divforsubsidy";
import { Navbar } from "../components/Navbar";

export default function trial() {
   
 
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/farm.png')`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
            <Navbar/>
            <DivForsubsidy/>
        </div>
    );
}