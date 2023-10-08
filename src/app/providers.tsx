"use client";

import { ShopProvider, ChildrenType } from "../app/context/ShopContext";

export const Providers = ({ children }: ChildrenType) => {
  return <ShopProvider>{children}</ShopProvider>;
};
