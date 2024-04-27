"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

// import router from "next/router";
import React, { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom"; // Import useHistory hook for redirection

export default function main() {
    const router = useRouter();

    const [role, setRole] = useState(""); // State to store selected role
    //  const history = useHistory(); // Initialize useHistory hook

    // Redirect user based on selected role
    useEffect(() => {
        if (role === "farmer") {
            router.push("/login"); // Redirect to farmer page
        } else if (role === "customer") {
            router.push("/home"); // Redirect to customer page
        }
    }, [role]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <label htmlFor="">Select Your Role</label>
                <br />
                <div className="flex flex-col items-center">
                    <label className="mb-4">
                        <input
                            type="checkbox"
                            value="farmer"
                            checked={role === "farmer"}
                            onChange={(e) => setRole(e.target.checked ? "farmer" : "")}
                        />
                         <span className="ml-2">Farmer</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="customer"
                            checked={role === "customer"}
                            onChange={(e) => setRole(e.target.checked ? "customer" : "")}
                        />
                         <span className="ml-2">Customer</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
