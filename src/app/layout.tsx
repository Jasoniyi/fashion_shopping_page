"use client";
import "./globals.css";
import { useState } from "react";
import { Bebas } from "./Fonts/Fonts";
import Footer from "./component/Footer/Footer";
import { Providers } from "../app/providers";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MobileMenu from "./component/MobileMenu/mobileMenu";

// export const metadata: Metadata = {
//   title: "vv Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    console.log("open");
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <html lang="en">
      <body className={Bebas.className}>
        <div className="lg:hidden flex justify-end p-4 bg-[#FFF0E3]">
          <div className="" onClick={handleToggle}>
            {open ? (
              <MenuOpenIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
        </div>
        {open ? (
          <MobileMenu isOpen={open} handleLinkClick={handleLinkClick} />
        ) : (
          <Providers>
            {children}
            <Footer />
          </Providers>
        )}
      </body>
    </html>
  );
}
