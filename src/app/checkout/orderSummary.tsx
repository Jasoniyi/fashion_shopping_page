import React, { useState } from "react";
import { UseShop } from "../context/ShopContext";
import Totals from "../shopping_cart/Totals";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../component/Button/Button";

const OrderSummary = () => {
  const { productsInCart, removeFromCart } = UseShop();

  const [quantities] = useState(productsInCart.map(() => 1));

  const calculateTotalPrice = () => {
    let total = 0;
    productsInCart.forEach((product, index) => {
      total += product.price * quantities[index];
    });
    return total;
  };

  const total = calculateTotalPrice();
  return (
    <div className="px-4 flex flex-col space-y-4">
      <h3 className="pt-4">Order Summary</h3>
      <div className="">
        {productsInCart.length < 1 ? (
          <span className="my-6 text-sm">no products in cart</span>
        ) : (
          productsInCart.map((product, i) => (
            <div
              className="flex flex-row space-x-2 items-center py-2"
              key={`pdctsInCart-${i}`}
            >
              <div className="">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={30}
                  height={40}
                />
              </div>
              <div className="flex flex-col text-xs space-y-1">
                <span className="">{product.title}</span>
                <span className="text-blue-500">{product.price}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="">
        <Totals subTotal={total} />
        <Button
          title="Place Order"
          icon={<ArrowForwardIcon fontSize="small" />}
          style="bg-btnColor py-2 px-6 w-full text-white uppercase my-6 text-sm"
        />
      </div>
    </div>
  );
};

export default OrderSummary;
