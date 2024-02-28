"use client";

import Navbar from "./component/Navbar/Navbar";
import Button from "./component/Button/Button";
import { ArrowRightAlt } from "@mui/icons-material";
import { bannerPdctsArray } from "../constants/constants";

import { LazyImage } from "./component/ImageLoading/LazyLoader/LazyLoader";
import Collections from "./component/HomePage/Collections/Collections";
import NewArrrivals from "./component/HomePage/NewArrivals/NewArrrivals";
import LimitedOffer from "./component/HomePage/LimitedOffer/LimitedOffer";
import TrendingBrands from "./component/HomePage/TrendingBrands/TrendingBrands";
import Visit from "./component/HomePage/VisitInstagram/Visit";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import ImageLoader from "./component/ImageLoading/ImageLoader/ImageLoader";

export default function Home() {
  const [loadedImageSectionOne, setLoadedImageSectionOne] =
    useState<boolean>(false);

  const colors = ["#EDBEEA", "#ABD545", "#EECC8C", "#84BFE1"];
  const heights = ["16em", "20em", "16em", "24em"];

  return (
    <>
      <div className="bg-home_banner w-screen">
        <div className="py-4 px-16">
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
                <div className="" key={`bannerPdcts-{i}`}>
                  <div className="z-50">
                    {loadedImageSectionOne ? null : (
                      <ImageLoader
                        isFullImage={true}
                        bgColor={colors[i]}
                        className="borderRadius60 section1 md:h-[16em] h-[5em] md:w-[16em] w-[6em]"
                      />
                    )}
                    <LazyImage
                      src={item.src}
                      alt={item.alt}
                      objectFit="cover"
                      errorHeight=""
                      height=""
                      width=""
                      className={`${
                        loadedImageSectionOne
                          ? "visible w-full"
                          : "invisible h-0"
                      }`}
                      dataImage="#cf5628"
                      onLoad={setLoadedImageSectionOne}
                    />
                  </div>
                </div>
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
