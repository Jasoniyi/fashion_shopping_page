export interface NavbarShape {
  title: String;
  path: string;
  option?: boolean;
}

export const NavbarLinks: NavbarShape[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "New In",
    path: "",
  },
  {
    title: "All Products",
    path: "/products",
  },

  {
    title: "Wishlist",
    path: "/wishlist",
    option: true,
  },
  {
    title: "Cart",
    path: "/shopping_cart",
    option: true,
  },
];
