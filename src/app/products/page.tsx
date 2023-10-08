"use client";
import React from "react";
import Navbar from "../component/Navbar/Navbar";
import { Jarkarta, Belle } from "../Fonts/Fonts";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import MobileCategory from "../component/Mobile/products";
import ShowProducts from "../component/showProducts/ShowProducts";
import { useShop } from "../context/ShopContext";
import { productsArray } from "@/data/db";

const page = () => {
  const [value, setValue] = React.useState("female");

  const { currentPage, productsPerPage, currentProducts } = useShop();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      <div className="bg-other_banner">
        <div className="py-32 px-16">
          <Navbar />
        </div>
      </div>
      <div className="my-8">
        <div className="lg:grid md:grid-cols-5 space-y-6 lg:space-y-0">
          <div className="">
            {/* Mobile view */}
            <div className="lg:hidden">
              <MobileCategory />
            </div>
            {/* desktop view */}
            <div className="hidden lg:block px-6">
              <div className="">
                <span className={`${Jarkarta.className} text-xs text-descText`}>
                  Showing {currentPage} - {productsPerPage} out of{" "}
                  {productsArray?.length} products
                </span>
                <div className="flex flex-col py-12 text-2xl">
                  <div className="">
                    Filters
                    <div className={`${Belle.className} py-4`}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="MEN"
                            control={<Radio />}
                            label="Men"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="WOMEN"
                            control={<Radio />}
                            label="Women"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="flex w-[15em]">
                      <div className="border-[1px] w-[2em] border-gray-600" />
                      <div className="border-[1px] w-[7em]" />
                    </div>
                  </div>
                  <div className="mt-8">
                    category
                    <div className={`${Belle.className} py-4`}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="All"
                            control={<Radio />}
                            label="all"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="shoes"
                            control={<Radio />}
                            label="shoes"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="MEN CLOTHING"
                            control={<Radio />}
                            label="men clothing"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="WOMEN CLOTHING"
                            control={<Radio />}
                            label="Women clothing"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="BAGS"
                            control={<Radio />}
                            label="bags"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="JEWELERY"
                            control={<Radio />}
                            label="jeweley"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="flex w-[15em]">
                      <div className="border-[1px] w-[2em] border-gray-600" />
                      <div className="border-[1px] w-[7em]" />
                    </div>
                  </div>
                  <div className="mt-8">
                    price
                    <div className={`${Belle.className} py-4`}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="all"
                            control={<Radio />}
                            label="all"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="₦0"
                            control={<Radio />}
                            label="₦0 - ₦100,000"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="100"
                            control={<Radio />}
                            label="₦100,000 - ₦500,000"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="500"
                            control={<Radio />}
                            label="₦500,000 - ₦1,000,000"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="1000"
                            control={<Radio />}
                            label="₦1,000,000 - ₦2,000,000"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                          <FormControlLabel
                            value="2000"
                            control={<Radio />}
                            label="₦2,000,000 and above"
                            disableTypography={true}
                            sx={{
                              fontSize: "0.6em",
                              textTransform: "uppercase",
                            }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <ShowProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
