import React from "react";
import Image from "next/image";
import { ShoppingCart, FavoriteBorder } from "@mui/icons-material";
import { ProductsArrayShape } from "../HomePage/NewArrivals/NewArrrivals";
import { Jarkarta } from "../../Fonts/Fonts";

const Card = ({ image, name, price }: ProductsArrayShape) => {
  return (
    <div className="flex flex-col space-y-4 relative">
      <div className="">
        <Image alt={name} src={image} width={285} height={350} />
      </div>
      <div className="absolute right-24 bottom-20 w-8 h-8 bg-btnColor rounded-full flex justify-center items-center text-white">
        <FavoriteBorder sx={{ fontSize: 17 }} />
      </div>
      <div className="flex space-x-4 w-[18rem]">
        <div className="flex-grow">
          <div className="flex flex-col text-sm font-medium">
            <span className={Jarkarta.className}>{name}</span>
            <span className={Jarkarta.className}>$ {price}.00</span>
          </div>
        </div>
        <div className="bg-shoppingCartBck rounded-full w-12 h-12 flex justify-center items-center">
          <ShoppingCart sx={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
