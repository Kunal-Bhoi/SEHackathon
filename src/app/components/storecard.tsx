"use client";
// import * as React from "react"
import React, { useEffect, useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import axios from "axios";

interface Product {
  trans: {
    farmer: string;
    name: string;
    availableQuantity: number;
    price: number;
    description: string;
    _id: string;
  };
}

// Define the interface for the Transaction object
// interface trans {
//     farmer: string;
//     name: string;
//     availableQuantity: number;
//     price: number;
//     description: string;

// }

export function Storecard({ trans }: Product) {
  const [id, setid] = useState("ID");
  const [quantity, setquantity] = useState<number>(0);

  const updateProduct = async () => {
    try {
      const props = { id, quantity };
      const res = await axios.post("/api/users/update", props);
      toast.success("Product purchased successfully");
    } catch (error: any) {
      console.error("Error updating product:", error);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    setid(trans._id);
  }, []);

  // const res = await axios.post("/api/users/editproduct", updatedProduct);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{trans.name}</CardTitle>
        <CardDescription>{trans.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="farmer">farmer</Label>
              <Input id="farmer" defaultValue={trans.farmer} disabled />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Price</Label>
              <Input
                id="name"
                defaultValue={trans.price}
                placeholder="Name of your project"
                disabled
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Quantity</Label>
              <Input
                id="quantity"
                onChange={(e: any) => setquantity(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={updateProduct}>Buy</Button>
      </CardFooter>
    </Card>
  );
}
