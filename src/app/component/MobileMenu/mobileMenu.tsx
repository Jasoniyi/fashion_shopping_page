import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/Logo.svg";
import { NavbarLinks } from "./typed";
import { usePathname } from "next/navigation";
import { Jarkarta } from "../../Fonts/Fonts";
import { UseShop } from "@/app/context/ShopContext";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const MobileMenu = ({ isOpen, handleLinkClick }: any) => {
  const pathname = usePathname();
  const { productsInCart, productsInWishlist } = UseShop();

  useEffect(() => {
    console.log("MyComponent rendered in products page");
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div
      className={`flex lg:hidden justify-end bg-[#FFF0E3] h-screen ${Jarkarta.className} `}
    >
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="aside"
              initial={{ width: 0 }}
              animate={{
                width: 400,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <div className="mobile-divider" />
              <motion.div
                className="container"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <div className="flex flex-col px-6">
                  <div className="">
                    <Image src={Logo} alt="logo" height={30} />
                  </div>
                  <div className="py-4">
                    {NavbarLinks.map(({ path, title, option }, i) => (
                      <Link href={path} passHref={true} key={`nav-${i}`}>
                        <div
                          className={`py-6 flex space-x-2 ${
                            pathname === path
                              ? `bg-black text-white px-4 rounded-lg`
                              : ""
                          } font-semibold`}
                          onClick={handleLinkClick}
                        >
                          <span className="">{title}</span>
                          {option ? (
                            <span className="">
                              {path === "wishlist" ? (
                                <span className="">
                                  `(${productsInWishlist.length})`
                                </span>
                              ) : (
                                `(${productsInCart.length})`
                              )}
                            </span>
                          ) : null}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
