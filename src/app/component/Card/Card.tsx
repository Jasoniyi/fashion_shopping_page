"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Delete } from "@mui/icons-material";
import { ProductsArrayShape } from "../HomePage/NewArrivals/NewArrrivals";
import { Jarkarta } from "../../Fonts/Fonts";
import { useShop } from "../../context/ShopContext";
import WishList from "./wishList";
import CardSkeleton from "./CardSkeleton";
import { LazyImage } from "../ImageLoading/LazyLoader/LazyLoader";
import ImageLoader from "../ImageLoading/ImageLoader/ImageLoader";

const Card = ({
  image,
  title,
  price,
  showWishlist,
  width,
  height,
}: ProductsArrayShape) => {
  const [isInCart, setIsInCart] = useState(false);
  const [loadImage, setLoadImage] = useState<boolean>(false);

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
        {/* <Image
          alt={title}
          src={image}
          width={width}
          height={height}
          objectFit="cover"
        /> */}
        <div className="z-50">
          {loadImage ? null : (
            <ImageLoader
              isFullImage={true}
              bgColor={"#E9E8E4"}
              className="borderRadius60 section1 md:h-[30em] h-[29em] md:w-[35em] w-[100%]"
            />
          )}
          <LazyImage
            alt={title}
            src={image}
            objectFit="cover"
            errorHeight=""
            height=""
            width=""
            className={`${loadImage ? "visible w-full" : "invisible h-0"}`}
            dataImage="#cf5628"
            onLoad={setLoadImage}
          />
        </div>
      </div>
      {showWishlist ? (
        <WishList title={title} image={image} price={price} />
      ) : null}

      <div className="flex space-x-4 w-[22rem] px-2">
        <div className="flex-grow">
          <div className="flex flex-col text-sm font-medium">
            <span className={Jarkarta.className}>{title}</span>
            <span className={Jarkarta.className}>
              ₦ {price.toLocaleString()}.00
            </span>
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
