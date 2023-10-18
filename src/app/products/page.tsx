"use client";
import React from "react";
import Navbar from "../component/Navbar/Navbar";
import { Jarkarta } from "../Fonts/Fonts";

import MobileCategory from "../component/Mobile/products";
import ShowProducts from "../component/showProducts/ShowProducts";
import ProductCategories from "../component/ProductPage/productCategories";
import { useShop } from "../context/ShopContext";
import { productsArray } from "@/data/db";

const page = () => {
  const { currentPage, productsPerPage } = useShop();

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
                <ProductCategories />
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
