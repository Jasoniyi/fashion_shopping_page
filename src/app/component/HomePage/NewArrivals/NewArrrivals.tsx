import React from "react";
import TextHeader from "../../TextHeader/TextHeader";
import Card from "../../Card/Card";
import CardSkeleton from "../../Card/CardSkeleton";
import { productImages } from "../../../../constants/imagePaths";

export interface ProductsArrayShape {
  title: string;
  price: number | string;
  image: string;
}

const productArray: ProductsArrayShape[] = [
  {
    title: "Athletic Shoe",
    price: 39.0,
    image: `${productImages.newPdctOne}`,
  },
  {
    title: "Maroon Wedget",
    price: 39.0,
    image: `${productImages.newPdctTwo}`,
  },
  {
    title: "Green Leather Shoe",
    price: 39.0,
    image: `${productImages.newPdctThree}`,
  },
];

const NewArrrivals = () => {
  return (
    <div className="py-8 md:pt-16">
      <TextHeader
        title="2022 New Arrivals"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc elit in porttitor tortor nulla."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        {productArray.map((pdct, i) => (
          <Card
            image={pdct.image}
            title={pdct.title}
            price={pdct.price}
            key={`newArrivals-${i}`}
          />
          //   <CardSkeleton />
        ))}
      </div>
      <div className="flex bg-gray-200 mr-16">
        <div className="border-[1px] border-borderColor w-3/12" />
        <div className="border-[1px]" />
      </div>
    </div>
  );
};

export default NewArrrivals;
