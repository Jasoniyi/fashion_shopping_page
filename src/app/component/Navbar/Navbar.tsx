import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/Logo.svg";
import { Plus_Jakarta_Sans } from "next/font/google";
import { UseShop } from "@/app/context/ShopContext";
import MobileMenu from "../MobileMenu/mobileMenu";

const Jarkarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const navbar = () => {
  const { productsInCart, productsInWishlist } = UseShop();
  return (
    <div className={Jarkarta.className}>
      {/* --- desktop view --- */}
      <div className="hidden md:block bg-white py-4 px-8">
        <div className="flex items-center">
          <div className="flex-none">
            <ul className="flex text-sm font-medium cursor-pointer">
              <li className="">Stories</li>
              <li className="border-[1px] mx-6" />
              <Link href="/">
                <li className="">New In</li>
              </Link>
              <li className="border-[1px] mx-6" />
              <Link href="/products">
                <li className="">All Products</li>
              </Link>
            </ul>
          </div>
          <div className="flex-grow">
            <div className="flex justify-center">
              <Image src={Logo} alt="logo" />
            </div>
          </div>
          <div className="flex-none">
            <ul className="flex text-sm font-medium">
              <li className="">Search</li>
              <li className="border-[1px] mx-6" />
              <Link href="/wishlist">
                <li className="">Wishlist ({productsInWishlist.length})</li>
              </Link>
              <li className="border-[1px] mx-6" />
              <Link href="/shopping_cart">
                <li className="">Cart ({productsInCart.length})</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
