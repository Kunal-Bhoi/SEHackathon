import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {name} = reqBody;

        // Find the product with the given parameters
        const products = await Product.find({name: name });

        // If product not found, return error
        if (!products) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }


        return NextResponse.json({
            products,
            success: true,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
