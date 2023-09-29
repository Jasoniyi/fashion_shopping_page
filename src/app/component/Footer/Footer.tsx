import React from "react";
import Image from "next/image";
import Logo from "../../../../public/LogoWhite.svg";

const Footer = () => {
  return (
    <div className="bg-footerBck mt-8 md:flex md:justify-center px-4 md:px-0">
      <div className="py-16 flex flex-col items-center text-gray-400 space-y-4">
        <Image src={Logo} alt="logo" />
        <span className="text-sm md:w-[27rem] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A enim ante
          ac porttitor eget diam turpis eget.
        </span>
        <p className="text-xs text-gray-500">Privacy | Terms of Condition</p>
        <div className="flex flex-col md:flex-row justify-between md:items-center text-footerWhite py-4 md:py-8 md:space-x-28">
          <p className="text-sm pt-8 md:pt-0 md:w-[7rem] text-gray-400">
            Feel free to visitng our Store
          </p>
          <span className="text-2xl md:text-4xl md:w-[27rem] py-4 md:py-0">
            1396 St-Catherine Ouest, Montreal, Quebec H3G 1P9
          </span>
        </div>
        <div className="border-[1px] border-gray-600 w-full md:w-[42rem] " />
        <div className="flex flex-col md:flex-row justify-between md:items-center text-footerWhite py-4 md:py-8 md:space-x-28">
          <p className="text-sm pt-8 md:pt-0 md:w-[7rem] text-gray-400">
            Feel free to contact with me if you have any questions.
          </p>
          <span className="text-2xl md:text-4xl md:w-[27rem] py-4 md:py-0 mb-8">
            Local: 514.360.5778 | Toll-free: 1.877.927.5899 (LUXY)
          </span>
        </div>
        <div className="border-[1px] border-gray-600 w-full md:w-screen " />
        <p className="text-xs pt-6">©AKG 2022. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
