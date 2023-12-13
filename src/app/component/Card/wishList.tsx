import React, { useCallback, useEffect, useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { ProductsArrayShape } from "../HomePage/NewArrivals/NewArrrivals";
import { useShop } from "../../context/ShopContext";

const WishList = ({ title, image, price }: ProductsArrayShape) => {
  const { productsInWishlist, addToWishlist, removeFromWishlist } = useShop();
  const [wishList, setWishList] = useState(false);

  const checkIfProductIsInWishList = useCallback(() => {
    const productIsInCart = productsInWishlist?.find(
      (product) => product.title === title
    );

    if (productIsInCart) {
      setWishList(true);
    } else {
      setWishList(false);
    }
  }, [productsInWishlist, title]);

  useEffect(() => {
    checkIfProductIsInWishList();
    console.log(productsInWishlist, "Wishlist");
  }, [checkIfProductIsInWishList]);

  const handleWishList = () => {
    const product = { title, image, price };

    if (wishList) {
      removeFromWishlist(product);

      console.log("wishlist removed");
    } else {
      console.log("add");
      addToWishlist(product);
    }
  };

  return (
    <>
      <div
        className="absolute right-4 top-1 w-8 h-8 bg-btnColor rounded-full flex justify-center items-center text-white cursor-pointer"
        onClick={handleWishList}
      >
        {wishList ? (
          <Favorite sx={{ fontSize: 17 }} />
        ) : (
          <FavoriteBorder sx={{ fontSize: 17 }} />
        )}
      </div>
    </>
  );
};

export default WishList;
