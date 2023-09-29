import React from "react";
import TextHeader from "../../TextHeader/TextHeader";
import {
  KeyboardBackspace,
  ArrowLeft,
  ArrowRightAlt,
} from "@mui/icons-material";

import Branding from "./Branding";

const TrendingBrands = () => {
  return (
    <div className="py-16 w-screen overflow-hidden">
      <div className="px-4 md:px-[9.7rem] flex items-center justify-between">
        <TextHeader
          title="Our Trending brands"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc elit in porttitor tortor nulla."
        />
        <div className="flex text-black">
          <KeyboardBackspace fontSize="medium" />
          <ArrowRightAlt fontSize="large" />
        </div>
      </div>
      <div className="py-16 px-4 md:px-[9.7rem]">
        <Branding />
      </div>
    </div>
  );
};

export default TrendingBrands;
