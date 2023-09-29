import React from "react";
import { OfferedProductsShape } from "../LimitedOffer/OfferedProducts";
import { productImages } from "../../../../constants/imagePaths";
import Image from "next/image";

const brandArray: OfferedProductsShape[] = [
  {
    image: `${productImages.nike}`,
    alt: "Nike",
  },
  {
    image: `${productImages.puma}`,
    alt: "Puma",
  },
  {
    image: `${productImages.adidas}`,
    alt: "Adidas",
  },
  {
    image: `${productImages.reebok}`,
    alt: "Reebok",
  },
  {
    image: `${productImages.newBalance}`,
    alt: "New Balance",
  },
];

const Branding = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="flex items-end space-x-4">
        {brandArray.map((item, i) => (
          <Image
            src={item.image}
            alt={item.alt}
            width={250}
            height={250}
            key={`brands-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Branding;
