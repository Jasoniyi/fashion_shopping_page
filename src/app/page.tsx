import Image from "next/image";
import Navbar from "./component/Navbar/Navbar";
import Button from "./component/Button/Button";
import { ArrowRightAlt } from "@mui/icons-material";
import { bannerPdctsArray } from "../constants/constants";

import LazyImage from "./component/LazyLoader/LazyLoader";

export default function Home() {
  return (
    <>
      <div className="bg-home_banner w-screen">
        <div className="py-8 px-16">
          <Navbar />
        </div>
        <div className="uppercase flex justify-center font-normal text-5xl mt-16">
          <span className="w-[15em] text-center">
            Fashionable, quality, durable and best shoes for everyone
          </span>
        </div>
        <div className="flex justify-center my-16">
          <Button
            title="shop now"
            style="text-white py-2 px-6"
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
    </>
  );
}
