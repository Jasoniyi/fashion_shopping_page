"use client";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { ProductsShape, productsArray } from "../../../data/db";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useShop } from "../../context/ShopContext";
import Jewelery from "./jewelery";

export type JewelryDataType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const ShowProducts = ({ selectedCategory }: any) => {
  const { currentPage, currentProducts, productsPerPage, paginate } = useShop();
  const [jewelryData, setJewelryData] = useState<JewelryDataType[]>([]);

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(productsArray.length / productsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  console.log(selectedCategory, "SC");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const data: JewelryDataType[] = await response.json();
        setJewelryData(data);
      } catch (error) {
        console.error("Error fetching jewelry data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      {selectedCategory === "jewelery" ? (
        <Jewelery jewelryData={jewelryData} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 justify-items-center">
          {currentProducts !== undefined
            ? currentProducts.map((pdct, i) => (
                <Card
                  image={`${pdct.image}`}
                  title={pdct.title}
                  price={pdct.price}
                  key={`showProducts-${i}`}
                  showWishlist={true}
                  width={350}
                  height={150}
                />
              ))
            : null}
        </div>
      )}

      {currentProducts?.length < 15 ? null : (
        <div className="flex space-x-2 items-center justify-end my-6 mr-10">
          <div className="cursor-pointer" onClick={prevPage}>
            {currentPage === 1 ? (
              <ChevronLeftIcon color="disabled" />
            ) : (
              <ChevronLeftIcon />
            )}
          </div>

          <div className="pagination flex space-x-4 ">
            {Array.from({
              length: Math.ceil(productsArray.length / productsPerPage),
            }).map((_, i) => (
              <button
                className="py-2 px-4 border-gray-400 border-[1px] rounded-md hover:bg-shoppingCartBck "
                key={i}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="cursor-pointer" onClick={nextPage}>
            {currentPage ===
            Math.ceil(productsArray.length / productsPerPage) ? (
              <KeyboardArrowRightIcon color="disabled" />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProducts;
