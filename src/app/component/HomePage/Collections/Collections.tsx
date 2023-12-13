import React, { useState } from "react";
import { productImages } from "../../../../constants/imagePaths";
import { LazyImage } from "../../ImageLoading/LazyLoader/LazyLoader";
import TextHeader from "../../TextHeader/TextHeader";
import ImageLoader from "../../ImageLoading/ImageLoader/ImageLoader";
import Image from "next/image";

type CollectionsShape = {
  image: string;
  title: string;
};

const Collections = () => {
  const [loadImage, setLoadImage] = useState<boolean>(false);

  const colors = ["#E9E8E4", "#CBC0AA"];
  const collectionsArray: CollectionsShape[] = [
    {
      image: `${productImages.forMen}`,
      title: "_FOR MEN",
    },
    {
      image: `${productImages.forWomen}`,
      title: "_FOR WOMEN",
    },
  ];
  return (
    <div className="py-8 md:pt-16">
      <TextHeader
        title="Collections"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc
        elit in porttitor tortor nulla."
      />
      <div className="flex flex-col md:flex-row my-8 md:space-x-4 space-y-4 md:space-y-0">
        {collectionsArray.map((collection, i) => (
          <div className="relative" key={`collections-${i}`}>
            <div className="z-50">
              {loadImage ? null : (
                <ImageLoader
                  isFullImage={true}
                  bgColor={colors[i]}
                  className="borderRadius60 section1 md:h-[40em] h-[29em] md:w-[35em] w-[23em]"
                />
              )}
              <LazyImage
                src={collection.image}
                alt={collection.title}
                objectFit="cover"
                errorHeight=""
                height=""
                width=""
                className={`${loadImage ? "visible w-full" : "invisible h-0"}`}
                dataImage="#cf5628"
                onLoad={setLoadImage}
              />
            </div>
            <div className="absolute bottom-14 left-10">
              <span className="text-2xl font-semibold">{collection.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
