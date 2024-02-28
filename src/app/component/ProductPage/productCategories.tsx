"use client";
import React, { useState, ChangeEvent } from "react";
import { Belle } from "../../Fonts/Fonts";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { UseShop } from "../../context/ShopContext";

const ProductCategories = ({ onCategoryChange }: any) => {
  const { selectGender, selectCategory, selectAll } = UseShop();

  const [value, setValue] = useState("");

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

    if (selectedCategory === "jewelery") {
    } else {
      selectCategory(selectedCategory);
    }

    // Pass selected category to parent component
    onCategoryChange(selectedCategory);
  };

  const handleAll = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedAll = (event.target as HTMLInputElement).name;
    setValue(selectedAll);

    selectAll(selectedAll);
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
                  name="Men Clothing"
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
                  name="Women Clothing"
                />
                <FormControlLabel
                  value="bag"
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
      </div>
    </>
  );
};

export default ProductCategories;
