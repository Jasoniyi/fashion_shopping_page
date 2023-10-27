"use client";
import React, { useState, useRef, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../component/Navbar/Navbar";
import { Jarkarta } from "../Fonts/Fonts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useShop } from "../context/ShopContext";
import Button from "../component/Button/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ProductsArrayShape } from "../component/HomePage/NewArrivals/NewArrrivals";
import CardTotals from "./cardTotals";

const page = () => {
  const { productsInCart, removeFromCart } = useShop();

  const [quantities, setQuantities] = useState(productsInCart.map(() => 1));

  const increaseQuantity = (index: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index]++;
    setQuantities(updatedQuantities);
  };

  const decreaseQuantity = (index: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = Math.max(1, updatedQuantities[index] - 1);
    setQuantities(updatedQuantities);
  };

  const removeProduct = (product: ProductsArrayShape) => {
    removeFromCart(product);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    productsInCart.forEach((product, index) => {
      total += product.price * quantities[index];
    });
    return total;
  };

  const total = calculateTotalPrice();

  const memoizedComponent = useMemo(
    () => (
      <div className={Jarkarta.className}>
        <div className="bg-other_banner">
          <div className="py-32 px-16">
            <Navbar />
          </div>
        </div>
        <div className="my-28 px-8 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
            <div className="col-span-2 border-[1px] border-gray-100 h-fit">
              <div className="flex flex-col">
                <h3 className="px-4 text-sm py-6">Shopping Card</h3>
                <TableContainer sx={{ width: "100%" }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#F2F4F5" }}>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell sx={{ maxWidth: "15em" }}>Product</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="left">Sub-total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {productsInCart.map((product, index) => (
                        <TableRow
                          key={product.title}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <div
                              className=""
                              onClick={() => removeProduct(product)}
                            >
                              <HighlightOffIcon sx={{ color: "#EE5858" }} />
                            </div>
                          </TableCell>
                          <TableCell align="left">
                            <div className="flex flex-row items-center space-x-2">
                              <Image
                                src={product.image}
                                alt={product.title}
                                width={20}
                                height={20}
                              />
                              <span className="">{product.title}</span>
                            </div>
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ backgroundColor: "#fffff" }}
                          >
                            {product.price.toLocaleString()}
                          </TableCell>
                          <TableCell align="center">
                            <div className="border border-gray-100 flex justify-center items-center space-x-6 p-2">
                              <span
                                className=""
                                onClick={() => decreaseQuantity(index)}
                              >
                                <RemoveIcon fontSize="small" />
                              </span>
                              <span className="">{quantities[index]}</span>
                              <span
                                className=""
                                onClick={() => increaseQuantity(index)}
                              >
                                <AddIcon fontSize="small" />
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            N{" "}
                            {(
                              product.price * quantities[index]
                            ).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="py-8 flex justify-between px-6 w-full font-semibold space-x-8 md:space-x-0">
                  <div className="">
                    <Button
                      title="Return to Shop"
                      link="/products"
                      iconLeft={<ArrowBackIcon fontSize="small" />}
                      style="border-btnColor border-2 py-2 px-4 uppercase text-sm flex item-center"
                    />
                  </div>
                  <div className="">
                    <Button
                      title="update cart"
                      style="uppercase text-sm border-btnColor border-2 py-2 px-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <CardTotals subTotal={total} />
          </div>
        </div>
      </div>
    ),
    [productsInCart, quantities]
  );

  return memoizedComponent;
};

export default page;
