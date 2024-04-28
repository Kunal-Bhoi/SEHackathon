import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card2: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="shadow-lg border rounded-md overflow-hidden bg-background">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="h-64 w-64 relative pt-8">
          <p>{description}</p>
        </div>
       
      </div>
    </div>
  );
};

export default Card2;
