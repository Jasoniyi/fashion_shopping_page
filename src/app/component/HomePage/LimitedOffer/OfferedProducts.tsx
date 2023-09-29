"use client";
import React from "react";
import { productImages } from "../../../../constants/imagePaths";
import Image from "next/image";

export type OfferedProductsShape = {
  image: string;
  alt: string;
};

const OfferedProductsArray: OfferedProductsShape[] = [
  {
    image: `${productImages.limitedOfferOne}`,
    alt: "limited offer One",
  },
  {
    image: `${productImages.limitedOfferTwo}`,
    alt: "limited offer Two",
  },
  {
    image: `${productImages.limitedOfferThree}`,
    alt: "limited offer Three",
  },
  {
    image: `${productImages.limitedOfferFour}`,
    alt: "limited offer Four",
  },
  {
    image: `${productImages.limitedOfferFive}`,
    alt: "limited offer Five",
  },
  {
    image: `${productImages.limitedOfferOne}`,
    alt: "limited offer One",
  },
];

const OfferedProducts = () => {
  return (
    <>
      <div className="w-screen overflow-hidden">
        <div className="flex items-end space-x-4">
          {OfferedProductsArray.map((item, i) => (
            <Image
              src={item.image}
              alt={item.alt}
              width={250}
              height={250}
              key={`limitedPdcts-${i}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OfferedProducts;
