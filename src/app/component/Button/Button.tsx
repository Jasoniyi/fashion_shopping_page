import React, { ReactElement } from "react";
import Link from "next/link";

type BtnPropsShape = {
  title: string;
  icon?: ReactElement;
  style?: string;
  link?: string;
};

const Button = ({ title, icon, style, link }: BtnPropsShape) => {
  return (
    <Link href={link ? link : "#"}>
      <button className={`${icon ? "space-x-2" : ""} bg-btnColor ${style}`}>
        <span className="">{title}</span>
        {icon ?? ""}
      </button>
    </Link>
  );
};

export default Button;
