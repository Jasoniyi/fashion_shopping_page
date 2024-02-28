"use client";
import React from "react";
import { productImages } from "../../../../constants/imagePaths";
import Image from "next/image";

import Slider from "react-slick";

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
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-screen overflow-hidden">
        <Slider {...settings}>
          {OfferedProductsArray.map((item, i) => (
            <div className="flex" key={`limitedPdcts-${i}`}>
              <Image
                src={item.image}
                alt={item.alt}
                width={250}
                height={250}
                // key={`limitedPdcts-${i}`}
              />
            </div>
          ))}
        </Slider>
        {/* <div className="flex items-end space-x-4">
          {OfferedProductsArray.map((item, i) => (
            <Image
              src={item.image}
              alt={item.alt}
              width={250}
              height={250}
              key={`limitedPdcts-${i}`}
            />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default OfferedProducts;
