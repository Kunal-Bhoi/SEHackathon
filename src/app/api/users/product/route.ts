import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { farmer, name, description, price, availableQuantity } = reqBody;

    // console.log(reqBody);

    const newProduct = new Product({
      farmer,
      name,
      description,
      image: "",
      price,
      availableQuantity,
    });
    console.log(newProduct);
    const savedProduct = await newProduct.save();
    console.log(savedProduct);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedProduct,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
