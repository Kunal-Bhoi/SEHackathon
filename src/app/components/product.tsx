"use client";
import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
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
import { ProductName } from "./productName";

export function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [prod, setProd] = React.useState({
    farmer: "",
    name: "",
    description: "",
    price: "",
    availableQuantity: "",
  });

  const onAdd = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/product", prod);
      console.log("transaction success", response.data);
      toast.success("Product Added");
      setProd({
        ...prod,
        farmer: "",
        name: "",
        description: "",
        price: "",
        availableQuantity: "",
      });
    } catch (error: any) {
      console.log("transaction failed", error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      setProd({ ...prod, farmer: res.data.data._id });
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Error fetching user details. Please try again.");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleProductSelect = async (productName: string) => {
      setProd({ ...prod, name:productName});
  };

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
        <CardDescription>Add a product to your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              {/* <FarmerInput onFarmerSelect={handleFarmerSelect} /> */}
              <ProductName onProductSelect={handleProductSelect}/>
              {/* <FarmerInput/> */}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Enter description"
                type="text"
                name="description"
                value={prod.description}
                onChange={(e) => setProd({ ...prod, description: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                placeholder="Enter price"
                type="number"
                name="price"
                value={prod.price}
                onChange={(e) => setProd({ ...prod, price: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="availableQuantity">Available Quantity</Label>
              <Input
                id="availableQuantity"
                placeholder="Enter available quantity"
                type="number"
                name="availableQuantity"
                value={prod.availableQuantity}
                onChange={(e) => setProd({ ...prod, availableQuantity: e.target.value })}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-row-reverse">
        <Button
          type="submit"
          style={{ minWidth: "120px", minHeight: "40px" }}
          onClick={onAdd}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-t-2 border-b-2  rounded-full animate-spin" />
          ) : "Add Product"}
        </Button>
      </CardFooter>
    </Card>
  );
}
