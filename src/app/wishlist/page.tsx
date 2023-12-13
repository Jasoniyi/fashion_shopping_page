"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import { Jarkarta } from "../Fonts/Fonts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useShop } from "../context/ShopContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Image from "next/image";
import Button from "../component/Button/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const page = () => {
  const [isInCart, setIsInCart] = useState(false);

  const { productsInWishlist, removeFromWishlist, addToCart, productsInCart } =
    useShop();

  useEffect(() => {
    const checkIfProductIsInCart = (product: any) => {
      const productIsInCart = productsInCart?.find(
        (item) => item.title === product.title
      );

      if (productIsInCart) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    };
  }, [productsInCart]);

  const handleToCart = (product: any) => {
    if (isInCart) {
      console.log("in cart");
    } else {
      addToCart(product);
      removeFromWishlist(product);
    }
  };

  useEffect(() => {
    console.log("MyComponent rendered in wishlist");
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div className={Jarkarta.className}>
      <div className="hidden md:block bg-other_banner">
        <div className="py-32 px-16">
          <Navbar />
        </div>
      </div>

      <div className="px-24 py-20">
        <div className="border-[1px] border-gray-200 h-fit flex flex-col">
          <h3 className="text-sm py-6 font-semibold px-4">Wishlist</h3>
          {productsInWishlist.length < 1 ? (
            <div className="px-4 py-6">No products in Wishlist</div>
          ) : (
            <TableContainer sx={{ width: "100%" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#F2F4F5" }}>
                  <TableRow>
                    <TableCell align="center">Product</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsInWishlist.map((product, index) => (
                    <TableRow
                      key={product.title}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">
                        <div className="flex flex-row justify-center items-center space-x-2">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={20}
                            height={20}
                          />
                          <span className="">{product.title}</span>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        {product.price.toLocaleString()}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        <div className="flex space-x-2 items-center justify-center">
                          <div
                            className=""
                            onClick={() => handleToCart(product)}
                          >
                            <Button
                              title="add to cart"
                              style="uppercase bg-[#FA8232] py-2 px-4 text-white"
                              icon={<ShoppingCartOutlinedIcon />}
                            />
                          </div>{" "}
                          <div
                            className=""
                            onClick={() => removeFromWishlist(product)}
                          >
                            <HighlightOffIcon sx={{ color: "#504C48" }} />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
