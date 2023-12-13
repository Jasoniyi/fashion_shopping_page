import React, { useState, useEffect } from "react";
import { CardTotalShape } from "./cardTotals";
import Button from "../component/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const Totals = ({ subTotal, showTitle }: CardTotalShape) => {
  const [randomPercentage, setRandomPercentage] = useState<number>(0);

  useEffect(() => {
    const generateRandomPercentage = () => {
      const randomPercentage = Math.floor(Math.random() * 101);
      return randomPercentage;
    };

    const percentage: any = generateRandomPercentage();
    setRandomPercentage(percentage);
  }, []);

  const calculateDiscountedTotal = () => {
    randomPercentage !== null;
    const discountedValue = 100 - randomPercentage;
    const discount = (discountedValue / 100) * subTotal;
    return discount.toLocaleString();
  };

  console.log(typeof randomPercentage, "%");
  console.log(typeof subTotal, "tots");

  return (
    <>
      <div className="">
        <div className="px-4 flex flex-col">
          {showTitle ? <h3 className="text-sm py-6">Card Totals</h3> : null}

          <div className="flex flex-col space-y-4 text-xs">
            <div className="flex justify-between">
              <span className="">Sub-total</span>
              <span className="font-medium">{subTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="">Discount</span>
              <span className="font-medium">{randomPercentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="">Tax</span>
              <span className="font-medium">Free</span>
            </div>
          </div>
          <div className="border border-gray-100 my-4"></div>
          <div className="flex justify-between text-xs">
            <span className="">Total</span>
            <span className="font-medium">{calculateDiscountedTotal()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Totals;
