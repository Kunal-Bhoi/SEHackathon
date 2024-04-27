import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <div className="shadow-lg border rounded-md overflow-hidden bg-background">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="h-64 w-64 relative pt-8">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="pt-4">
          <Button>Select</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
