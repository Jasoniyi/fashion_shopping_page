"use client";
import React, { useState, ChangeEvent } from "react";
import { Belle } from "../../Fonts/Fonts";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useShop } from "../../context/ShopContext";

const ProductCategories = () => {
  const { selectGender, selectCategory, selectAll } = useShop();

  const [value, setValue] = useState("female");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedGender = (event.target as HTMLInputElement).value;
    setValue(selectedGender);

    // Call selectGender function to update currentProducts
    selectGender(selectedGender);
    console.log(selectedGender, "sex");
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = (event.target as HTMLInputElement).name;
    setValue(selectedCategory);

    selectCategory(selectedCategory);
    console.log(selectedCategory, "category");
  };

  const handleAll = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedAll = (event.target as HTMLInputElement).name;
    setValue(selectedAll);

    selectCategory(selectedAll);
    console.log(selectedAll, "all");
  };

  return (
    <>
      <div className="flex flex-col py-12 text-2xl">
        <div className="">
          Filters
          <div className={`${Belle.className} py-4`}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleGenderChange}
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
                  name="sex"
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
                  name="sex"
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
          <div className={`${Belle.className} py-4 uppercase`}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleAll}
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
                  name="all"
                />
              </RadioGroup>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleCategoryChange}
              >
                <FormControlLabel
                  value="shoes"
                  control={<Radio />}
                  label="shoes"
                  disableTypography={true}
                  sx={{
                    fontSize: "0.6em",
                    textTransform: "uppercase",
                  }}
                  name="shoes"
                />
                <FormControlLabel
                  value="Men Clothing"
                  control={<Radio />}
                  label="men clothing"
                  disableTypography={true}
                  sx={{
                    fontSize: "0.6em",
                    textTransform: "uppercase",
                  }}
                  name="men_clothes"
                />
                <FormControlLabel
                  value="Women Clothing"
                  control={<Radio />}
                  label="Women clothing"
                  disableTypography={true}
                  sx={{
                    fontSize: "0.6em",
                    textTransform: "uppercase",
                  }}
                  name="women_clothes"
                />
                <FormControlLabel
                  value="bags"
                  control={<Radio />}
                  label="bags"
                  disableTypography={true}
                  sx={{
                    fontSize: "0.6em",
                    textTransform: "uppercase",
                  }}
                  name="bag"
                />
                <FormControlLabel
                  value="jewelery"
                  control={<Radio />}
                  label="jeweley"
                  disableTypography={true}
                  sx={{
                    fontSize: "0.6em",
                    textTransform: "uppercase",
                  }}
                  name="jewelery"
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
    </>
  );
};

export default ProductCategories;
