"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { EditIcon } from "lucide-react";

interface EditProductProps {
  trans: {   
  farmer:string;
    name: string;
    availableQuantity: number;
  price: number;
  };
}

export function EditProduct({ trans }: EditProductProps) {
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [newprice,setnewprice] = useState("");
  const [newquantity,setnewquantity] = useState("");

  const pay = async () => {
    try {
      setIsLoading(true);
      const updatedProduct = { ...trans, newprice, newquantity };
      const res = await axios.post("/api/users/editproduct", updatedProduct);
      toast.success("product updated successfully");
      dialogCloseRef.current?.click();
    } catch (error: any) {
      console.error("Error updating product:", error);
      toast.error(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <EditIcon/>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogClose ref={dialogCloseRef}/>
          <DialogTitle>Edit product</DialogTitle>
          <DialogDescription>
            Make changes in the product here. 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ID" className="text-right">
              ID
            </Label>
            <Input
              id="ID"
              defaultValue={trans.farmer}
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              name
            </Label>
            <Input
              id="name"
              defaultValue={trans.name}
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              price
            </Label>
            <Input
              id="price"
              defaultValue={trans.price}
              className="col-span-3"
              disabled
              
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="availableQuantity" className="text-right">
            Available
            </Label>
            <Input
              id="availableQuantity"
             defaultValue={trans.availableQuantity}
              className="col-span-3"
              disabled  
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="setnewprice" className="text-right">
            New Price
            </Label>
            <Input
              id="setnewprice"
              value={newprice}
              className="col-span-3"
              onChange={(e:any)=> setnewprice(e.target.value)}  
            />
          </div><div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="availableQuantity" className="text-right">
            availableQuantity
            </Label>
            <Input
              id="availableQuantity"
             value={newquantity}
              className="col-span-3"
              onChange={(e:any)=> setnewquantity(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" style={{ minWidth: "120px", minHeight: "40px" }} onClick={pay}>
            {isLoading ? (
              <div className="w-5 h-5 border-t-2 border-b-2  rounded-full animate-spin" />
            ) : (
              "Change"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
