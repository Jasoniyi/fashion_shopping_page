import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/Logo.svg";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useShop } from "@/app/context/ShopContext";

const Jarkarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const navbar = () => {
  const { productsInCart } = useShop();
  return (
    <div className={Jarkarta.className}>
      {/* --- Mobile view --- */}

      {/* --- desktop view --- */}
      <div className="hidden md:block bg-white py-4 px-8">
        <div className="flex items-center">
          <div className="flex-none">
            <ul className="flex text-sm font-medium cursor-pointer">
              <li className="">Stories</li>
              <li className="border-[1px] mx-6" />
              <li className="">New In</li>
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
              <li className="">Wishlist (0)</li>
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
