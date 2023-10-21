import React, { ReactElement } from "react";
import Link from "next/link";

type BtnPropsShape = {
  title: string;
  icon?: ReactElement;
  style?: string;
  link?: string;
  iconLeft?: ReactElement;
};

const Button = ({ title, icon, style, link, iconLeft }: BtnPropsShape) => {
  return (
    <Link href={link ? link : "#"}>
      <button
        className={`${icon ? "space-x-2" : ""} ${style} ${
          iconLeft ? "space-x-2" : ""
        }`}
      >
        {iconLeft ?? ""}
        <span className="">{title}</span>
        {icon ?? ""}
      </button>
    </Link>
  );
};

export default Button;
