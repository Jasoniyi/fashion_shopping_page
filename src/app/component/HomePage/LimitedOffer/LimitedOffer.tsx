import React from "react";
import { Jarkarta, Bebas } from "../../../Fonts/Fonts";
import Button from "../../Button/Button";
import { ArrowRightAlt } from "@mui/icons-material";

import OfferedProducts from "./OfferedProducts";

const LimitedOffer = () => {
  return (
    <div className="my-16 bg-limited_offer w-screen">
      <div className="flex flex-col md:flex-row py-24 px-4 md:px-[9.7rem] text-white justify-between">
        <div className="">
          <span className={`${Jarkarta.className} text-sm`}>
            1 June - 10 June 2022
          </span>
          <h3 className={`${Bebas.className} text-6xl py-2`}>
            Limited time offer
          </h3>
          <p className={`${Jarkarta.className} text-3xl`}>
            Get 20% off on every products
          </p>
          <p
            className={`${Jarkarta.className} text-base py-2 font-light w-[23rem]`}
          >
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
        </div>
        <div className="py-16">
          <Button
            title="shop now"
            style="text-white py-2 px-6"
            icon={<ArrowRightAlt fontSize="medium" />}
          />
        </div>
      </div>
      <div className="">
        <OfferedProducts />
      </div>
    </div>
  );
};

export default LimitedOffer;
