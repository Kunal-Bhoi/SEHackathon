"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Storecard } from "../components/storecard";
import { Navbar } from "../components/Navbar";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();

  const productName = searchParams.get("product");

  const [naam, setnaam] = useState<string>();
  const [products, setproducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [batchSize, setBatchSize] = useState<number>(5);
  const [displayedproducts, setDisplayedproducts] = useState<number>(10);
  const [id, setid] = useState<String>("ID");

  const fetchproducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/users/storeSelection?name=${productName}`
      );
      console.log("response got");
      setproducts(response.data.products);
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
      toast.error("Error fetching products");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (productName) {
        fetchproducts();
    }
  }, [productName]);  

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/farm.png')`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      <Navbar />
      {products.slice(0, displayedproducts).map((product, index) => (
        <div key={index} className="flex flex-wrap justify-center gap-4 mb-8">
          <Storecard trans={product} />
        </div>
      ))}
    </div>
  );
}
