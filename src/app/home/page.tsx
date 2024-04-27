"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Farmerhome from "../components/farmerhome";
import Customerhome from "../components/customerhome";

export default function HomePage() {
  const [role, setRole] = useState(null);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setRole(res.data.data.role);
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Error fetching user details. Please try again.");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (role === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
        role === 'farmer' ? <Farmerhome/> : <Customerhome/>
      }
    </div>
  );
}
