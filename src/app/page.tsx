"use client";
import Image from "next/image";
import Navbar from "./component/Navbar/Navbar";
import Button from "./component/Button/Button";
import { ArrowRightAlt } from "@mui/icons-material";
import { bannerPdctsArray } from "../constants/constants";

import LazyImage from "./component/LazyLoader/LazyLoader";
import Collections from "./component/HomePage/Collections/Collections";
import NewArrrivals from "./component/HomePage/NewArrivals/NewArrrivals";
import LimitedOffer from "./component/HomePage/LimitedOffer/LimitedOffer";
import TrendingBrands from "./component/HomePage/TrendingBrands/TrendingBrands";
import Visit from "./component/HomePage/VisitInstagram/Visit";

export default function Home() {
  return (
    <>
      <div className="bg-home_banner w-screen">
        <div className="py-8 px-16">
          <Navbar />
        </div>
        <div className="uppercase flex justify-center font-normal text-5xl mt-16">
          <span className="w-[16em] text-center font-medium">
            Fashionable, quality, durable and best shoes for everyone
          </span>
        </div>
        <div className="flex justify-center my-16">
          <Button
            title="shop now"
            style="text-white py-2 px-6 bg-btnColor"
            icon={<ArrowRightAlt fontSize="medium" />}
          />
        </div>
        <div className="flex justify-center">
          <div className="mt-8">
            <div className="flex items-end space-x-4">
              {bannerPdctsArray.map((item, i) => (
                <LazyImage src={item.src} alt={item.alt} key={`pdct-${i}`} />
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-[9.7rem]">
        <Collections />
      </div>
      <div className="border-[1px]" />
      <div className="px-4 md:px-[9.7rem]">
        <NewArrrivals />
      </div>
      <LimitedOffer />
      <TrendingBrands />
      <Visit />
    </>
  );
}
