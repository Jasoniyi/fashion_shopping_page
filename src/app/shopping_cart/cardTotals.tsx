import React, { useEffect, useState } from "react";
import Button from "../component/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Totals from "./Totals";

export type CardTotalShape = {
  subTotal: number;
  showTitle?: boolean;
};

const CardTotals = ({ subTotal }: CardTotalShape) => {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <div className="border-[1px] border-gray-100">
          <Totals subTotal={subTotal} showTitle={true} />
          <div className="px-4">
            <Button
              link="/checkout"
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
