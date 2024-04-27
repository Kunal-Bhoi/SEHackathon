"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { EditProduct } from "../components/EditProduct";





import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2Icon, EditIcon } from 'lucide-react';

interface Product {
    farmer:string;
    name: string;
    availableQuantity: number;
  price: number;
}

// Define the interface for the product object
interface product {
  farmer:string;
    name: string;
    availableQuantity: number;
  price: number;
}



export default function customerpage() {
 
  const [products, setproducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [batchSize, setBatchSize] = useState<number>(5);
  const [displayedTransactions, setDisplayedTransactions] = useState<number>(10);
  const [id, setid] = useState<String>("ID");


  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");

      console.log(res.data);
      setid(res.data.data._id);
      console.log(id);
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Error fetching user details. Please try again.");
    }
  };

  const fetchproducts = async () => {
    try {
      setLoading(true);
      console.log(id);
      const response = await axios.get(`/api/users/catalogproducts?id=${id}`);
      console.log("response got from fetchproducts");
      setproducts(response.data.products);
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
      toast.error("Error fetching products");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    fetchproducts();
  }, [id]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Catalog products</CardTitle>
        <button onClick={fetchproducts}><Edit2Icon/></button>
      </CardHeader>
      <CardContent className="grid gap-8">
       
      {products.slice(0, displayedTransactions).map((product, index) => (
          <div key={index} className="flex items-center gap-4">
            <EditProduct trans={product}/>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{product.name}</p>
              {/* <p className="text-sm text-muted-foreground">Transaction Date: {transaction.transactionDate}</p> */}
              {/* <p className="text-sm text-muted-foreground">Transaction Date:</p> */}
            </div>
            <div className="ml-auto font-medium">Rs {product.price}</div>
            <div className="ml-auto font-medium"> {product.availableQuantity}</div>

          </div>
        ))}
      </CardContent>
    </Card>
  );
}
