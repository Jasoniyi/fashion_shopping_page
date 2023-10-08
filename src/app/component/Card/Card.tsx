"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, FavoriteBorder } from "@mui/icons-material";
import { ProductsArrayShape } from "../HomePage/NewArrivals/NewArrrivals";
import { Jarkarta } from "../../Fonts/Fonts";
import { useShop } from "../../context/ShopContext";

const Card = ({ image, title, price }: ProductsArrayShape) => {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, productsInCart } = useShop();

  const checkIfProductIsInCart = useCallback(() => {
    console.log(productsInCart, "products");

    const productIsInCart = productsInCart.find(
      (product) => product.title === title
    );

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [productsInCart, title]);

  // Use the callback function within a useEffect
  useEffect(() => {
    checkIfProductIsInCart();
  }, [checkIfProductIsInCart]);

  const handleClick = () => {
    const product = { name, price, image };

    setIsInCart(!isInCart);

    if (isInCart) {
      // removeFromCart(product);
      console.log("remove");
    } else {
      console.log("add");
      addToCart(product);
    }
  };
  return (
    <div className="flex flex-col space-y-4 relative">
      <div className="">
        <Image alt={title} src={image} width={300} height={400} />
      </div>
      <div className="absolute right-4 bottom-20 w-8 h-8 bg-btnColor rounded-full flex justify-center items-center text-white cursor-pointer">
        <FavoriteBorder sx={{ fontSize: 17 }} />
      </div>
      <div className="flex space-x-4 w-[18rem]">
        <div className="flex-grow">
          <div className="flex flex-col text-sm font-medium">
            <span className={Jarkarta.className}>{title}</span>
            <span className={Jarkarta.className}>₦ {price}.00</span>
          </div>
        </div>
        <div
          className="bg-shoppingCartBck rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <ShoppingCart sx={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
