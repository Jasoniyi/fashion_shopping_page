import React from "react";
import { productImages } from "../../../../constants/imagePaths";
import LazyImage from "../../LazyLoader/LazyLoader";
import TextHeader from "../../TextHeader/TextHeader";

type CollectionsShape = {
  image: string;
  title: string;
};

const Collections = () => {
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
            <LazyImage src={collection.image} alt={collection.title} />
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
