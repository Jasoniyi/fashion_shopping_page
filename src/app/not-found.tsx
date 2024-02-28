"use client";
import Navbar from "../app/component/Navbar/Navbar";
import { Jarkarta } from "../app/Fonts/Fonts";
import Button from "./component/Button/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { productImages } from "../constants/imagePaths";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={`${Jarkarta.className}`}>
      <div className="bg-other_banner">
        <div className="py-32 px-16">
          <Navbar />
        </div>
      </div>
      <div className="py-8 flex flex-col space-y-4 items-center">
        <div className="">
          <Image
            src={productImages.notFound}
            alt="404"
            width={450}
            height={600}
          />
        </div>
        <div className="font-medium">404, Page not found</div>
        <span className="text-xs px-4 md:w-[35em]">
          Something went wrong. It’s look that your requested could not be
          found. It’s look like the link is broken or the page is removed.
        </span>
        <div className="flex space-x-3">
          <Button
            title="Go back"
            iconLeft={<KeyboardBackspaceIcon fontSize="small" />}
            style="bg-btnColor py-2 px-4 uppercase text-sm flex item-center text-white"
          />
          <Button
            link="/"
            title="Go To Home"
            iconLeft={<HomeOutlinedIcon fontSize="small" />}
            style="border-btnColor border-[1px] py-2 px-4 uppercase text-sm flex item-center text-black"
          />
        </div>
      </div>
    </div>
  );
}
