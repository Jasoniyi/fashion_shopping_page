import React from "react";
import TextHeader from "../../TextHeader/TextHeader";
import { OfferedProductsShape } from "../LimitedOffer/OfferedProducts";
import { productImages } from "../../../../constants/imagePaths";
import Image from "next/image";

const visitArray: OfferedProductsShape[] = [
  {
    image: `${productImages.instaOne}`,
    alt: "",
  },
  {
    image: `${productImages.instaTwo}`,
    alt: "",
  },
  {
    image: `${productImages.instaFour}`,
    alt: "",
  },
];

const Visit = () => {
  return (
    <div className="w-screen overflow-hidden px-4 md:px-[9.7rem]">
      <div className="flex justify-between items-center ">
        <TextHeader title="Visit our Instagrame" />
        <span className="text-descText">@akg_fashion</span>
      </div>
      <div className="py-12 flex space-x-10">
        {visitArray.map((item, i) => (
          <Image
            src={item.image}
            alt={item.alt}
            width={350}
            height={120}
            key={`insta-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Visit;
