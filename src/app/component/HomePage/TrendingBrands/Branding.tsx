import React from "react";
import { OfferedProductsShape } from "../LimitedOffer/OfferedProducts";
import { productImages } from "../../../../constants/imagePaths";
import Image from "next/image";

import Slider from "react-slick";

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
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
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
    <div className="">
      <Slider {...settings}>
        {brandArray.map((item, i) => (
          <div className="flex space-x-4" key={`branding-${i}`}>
            <Image
              src={item.image}
              alt={item.alt}
              width={250}
              height={250}
              key={`brands-${i}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Branding;
