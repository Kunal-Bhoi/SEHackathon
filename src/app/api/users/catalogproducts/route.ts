
import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    try {
       
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        console.log(id);

     

        const products = await Product.find({ farmer: id });
            console.log("farmer products found");
            console.log(products);
        return NextResponse.json({
            products,
            success: true
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
