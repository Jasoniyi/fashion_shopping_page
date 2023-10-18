"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  FavoriteBorder,
  Delete,
  Favorite,
} from "@mui/icons-material";
import { ProductsArrayShape } from "../HomePage/NewArrivals/NewArrrivals";
import { Jarkarta } from "../../Fonts/Fonts";
import { useShop } from "../../context/ShopContext";

const Card = ({ image, title, price }: ProductsArrayShape) => {
  const [isInCart, setIsInCart] = useState(false);
  const [wishList, setWishList] = useState(false);

  const { addToCart, productsInCart, removeFromCart } = useShop();

  const checkIfProductIsInCart = useCallback(() => {
    const productIsInCart = productsInCart?.find(
      (product) => product.title === title
    );

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [productsInCart, title]);

  useEffect(() => {
    checkIfProductIsInCart();
  }, [checkIfProductIsInCart]);

  const handleAddAndRemoveProduct = () => {
    const product = { title, price, image };

    setIsInCart(!isInCart);

    if (isInCart) {
      removeFromCart(product);
      console.log(productsInCart, "products2");
      console.log("removed");
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

      {/* <div
        className="absolute right-4 bottom-20 w-8 h-8 bg-btnColor rounded-full flex justify-center items-center text-white cursor-pointer"
        // onClick={}
      >
        {wishList ? (
          <Favorite sx={{ fontSize: 17 }} />
        ) : (
          <FavoriteBorder sx={{ fontSize: 17 }} />
        )}
      </div> */}

      <div className="flex space-x-4 w-[18rem]">
        <div className="flex-grow">
          <div className="flex flex-col text-sm font-medium">
            <span className={Jarkarta.className}>{title}</span>
            <span className={Jarkarta.className}>₦ {price}.00</span>
          </div>
        </div>
        <div
          className="bg-shoppingCartBck rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
          onClick={handleAddAndRemoveProduct}
        >
          {isInCart ? (
            <Delete sx={{ fontSize: 20 }} />
          ) : (
            <ShoppingCart sx={{ fontSize: 20 }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
