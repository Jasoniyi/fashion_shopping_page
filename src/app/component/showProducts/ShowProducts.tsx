"use client";
import React, { useState } from "react";
import Card from "../Card/Card";
import { productsArray } from "../../../data/db";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useShop } from "../../context/ShopContext";

const ShowProducts = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const productsPerPage = 15;

  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = productsArray.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );

  const { currentPage, currentProducts, setCurrentPage, productsPerPage } =
    useShop();

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(productsArray.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 justify-items-center">
        {currentProducts !== undefined
          ? currentProducts.map((pdct, i) => (
              <Card
                image={`${pdct.image}`}
                title={pdct.title}
                price={pdct.price}
                key={`showProducts-${i}`}
              />
            ))
          : null}
      </div>
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
          {currentPage === Math.ceil(productsArray.length / productsPerPage) ? (
            <KeyboardArrowRightIcon color="disabled" />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
