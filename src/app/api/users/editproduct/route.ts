import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { farmer, name, newprice, newquantity } = reqBody;

        // Find the product with the given parameters
        const product = await Product.findOne({ farmer: farmer, name: name });

        // If product not found, return error
        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        // Update the product with new price and quantity
        if (newprice) {
            product.price = newprice;
        }
        if (newquantity) {
            product.availableQuantity = newquantity;
        }

        // Save the updated product
        await product.save();

        return NextResponse.json({
            message: "Product updated successfully",
            success: true,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
