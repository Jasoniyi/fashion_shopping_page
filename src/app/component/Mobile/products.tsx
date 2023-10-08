import React from "react";
import { Belle } from "../../Fonts/Fonts";

type CategoryShape = {
  title: string;
};

const categories: CategoryShape[] = [
  {
    title: "All",
  },
  {
    title: "Men",
  },
  {
    title: "Women",
  },
  {
    title: "Shoes",
  },
  {
    title: "Bags",
  },
  {
    title: "Jeweleries",
  },
];

const products = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category, i) => (
            <div
              className={`p-1 ${Belle.className} text-center border-gray-200 border-[1px] rounded-md`}
            >
              {category.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default products;
