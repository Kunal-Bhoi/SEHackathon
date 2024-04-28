"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Storecard } from "../components/storecard";
import { Navbar } from "../components/Navbar";
import toast from "react-hot-toast";

interface Product {
    farmer: string;
    name: string;
    description: string;
    availableQuantity: number;
    price: number;
    _id: string;

}

// Define the interface for the Transaction object
interface trans {
    farmer: string;
    name: string;
    _id: string;
    description: string;
    availableQuantity: number;
    price: number;

}


export default function storeselection() {
    const [naam, setnaam] = useState<string>("Banana");
    const [products, setproducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [batchSize, setBatchSize] = useState<number>(5);
    const [displayedproducts, setDisplayedproducts] = useState<number>(10);
    const [id, setid] = useState<String>("ID");

    // const getUserDetails = async () => {
    //     try {
    //         const res = await axios.get("/api/users/me");

    //         console.log(res.data);
    //         setid(res.data.data._id);
    //         console.log(id);
    //     } catch (error) {
    //         console.error("Error fetching user details:", error);
    //         toast.error("Error fetching user details. Please try again.");
    //     }
    // };

    const fetchproducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/users/storeselection?name=${naam}`);
            console.log("response got");
            setproducts(response.data.products);
        } catch (error: any) {
            console.error("Error fetching products:", error.message);
            toast.error("Error fetching products");
        } finally {
            setLoading(false);
        }
    };


    // useEffect(() => {
    //     getUserDetails();
    // }, []);

    useEffect(() => {
        fetchproducts();
    }, []);

    return (
        <div >
            <Navbar />
            {products.slice(0, displayedproducts).map((product, index) => (
                <div key={index} className="flex items-center gap-4">
                    <Storecard trans= {product} />
                </div>
            ))}
        </div>
    );
}