"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import { Jarkarta } from "../Fonts/Fonts";

import MobileCategory from "../component/Mobile/products";
import ShowProducts from "../component/showProducts/ShowProducts";
import ProductCategories from "../component/ProductPage/productCategories";
import { useShop } from "../context/ShopContext";
import { productsArray } from "@/data/db";

const page = () => {
  const { currentPage, productsPerPage } = useShop();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    console.log("MyComponent rendered in products page");
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div>
      <div className="hidden md:block bg-other_banner">
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
                <ProductCategories onCategoryChange={handleCategoryChange} />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <ShowProducts selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
