import React, { useState } from "react";
import { Belle } from "../../Fonts/Fonts";
import { UseShop } from "@/app/context/ShopContext";

type CategoryShape = {
  title: string;
};

const genderCategory: CategoryShape[] = [
  {
    title: "MEN",
  },
  {
    title: "WOMEN",
  },
];

const allCategory: CategoryShape[] = [
  {
    title: "all",
  },
];

const categories: CategoryShape[] = [
  {
    title: "shoes",
  },
  {
    title: "bag",
  },
  {
    title: "jewelery",
  },
];

const renderCategory = (
  categories: CategoryShape[],
  onClickHandler: (title: string) => void
) => {
  return categories.map((category, i) => (
    <div
      className={`p-1 ${Belle.className} text-center border-gray-200 border-[1px] rounded-md capitalize`}
      key={`mobileCategories-${i}`}
      onClick={() => onClickHandler(category.title)}
    >
      {category.title}
    </div>
  ));
};

const Products = () => {
  const { selectCategory, selectGender, selectAll } = UseShop();

  const handleGenderCategory = (title: string) => {
    selectGender(title);
    console.log(title, "setCategory");
  };

  const handleAllCategory = (title: string) => {
    selectAll(title);
  };

  const handleSetCategory = (title: string) => {
    selectCategory(title);
    console.log(title, "setCategory");
  };

  return (
    <div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 gap-4">
          {renderCategory(allCategory, handleAllCategory)}
          {renderCategory(genderCategory, handleGenderCategory)}
          {renderCategory(categories, handleSetCategory)}
        </div>
      </div>
    </div>
  );
};

export default Products;
