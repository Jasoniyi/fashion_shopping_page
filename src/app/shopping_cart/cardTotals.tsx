import React, { useEffect, useState } from "react";
import Button from "../component/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { type } from "os";

type CardTotalShape = {
  subTotal: number;
};

const CardTotals = ({ subTotal }: CardTotalShape) => {
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
      <div className="flex flex-col space-y-8">
        <div className="border-[1px] border-gray-100">
          <div className="px-4 flex flex-col">
            <h3 className=" text-sm py-6">Card Totals</h3>
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
            <Button
              title="Proceed to checkout"
              icon={<ArrowForwardIcon fontSize="small" />}
              style="bg-btnColor py-2 px-6 w-full text-white uppercase my-6 text-sm"
            />
          </div>
        </div>

        <div className="border-[1px] border-gray-100 py-4">
          <div className="flex flex-col">
            <h3 className="px-4 text-sm py-4">Coupon Code</h3>
            <div className="border border-gray-100" />
            <div className="px-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-200 my-4 w-full p-2"
              />
            </div>
            <Button
              title="apply coupon"
              style="mx-4 bg-[#FFF0E3] p-4 uppercase text-xs font-semibold"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTotals;
