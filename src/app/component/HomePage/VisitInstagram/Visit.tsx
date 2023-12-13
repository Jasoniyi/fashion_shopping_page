import React, { useState } from "react";
import TextHeader from "../../TextHeader/TextHeader";
import { OfferedProductsShape } from "../LimitedOffer/OfferedProducts";
import { productImages } from "../../../../constants/imagePaths";
import Image from "next/image";
import ImageLoader from "../../ImageLoading/ImageLoader/ImageLoader";
import { LazyImage } from "../../ImageLoading/LazyLoader/LazyLoader";

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
  const [loadImage, setLoadImage] = useState<boolean>(false);
  const colors = ["#E9E8E4", "#C55500", "#A9B9F5"];
  return (
    <div className="w-screen overflow-hidden px-4 md:px-[9.7rem]">
      <div className="flex justify-between items-center ">
        <TextHeader title="Visit our Instagrame" />
        <span className="text-descText">@akg_fashion</span>
      </div>
      <div className="py-12 flex space-x-10">
        {visitArray.map((item, i) => (
          <div className="z-50">
            {loadImage ? null : (
              <ImageLoader
                isFullImage={true}
                bgColor={colors[i]}
                className="borderRadius60 section1 md:h-[28em] h-[8em] md:w-[21em] w-[6em]"
              />
            )}
            <LazyImage
              src={item.image}
              alt={item.alt}
              key={`insta-${i}`}
              objectFit="cover"
              errorHeight=""
              height=""
              width=""
              className={`${loadImage ? "visible w-full" : "invisible h-0"}`}
              dataImage="#cf5628"
              onLoad={setLoadImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visit;
