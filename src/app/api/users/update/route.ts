import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
     const { quantity, id } = reqBody;

    
    console.log(reqBody);

    // Find the transaction with the given parameters
    const product = await Product.findOne({ _id: id});

    // If transaction not found, return error
    if (!product) {
      return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
    }

    product.availableQuantity -= quantity;

    await product.save();

    return NextResponse.json({
      message: "Transaction Done successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}