import {
  createContext,
  useReducer,
  ReactElement,
  useContext,
  ReactNode,
  useState,
} from "react";
import { ProductsShape, productsArray } from "../../data/db";
import { shopReducer } from "./shopReducer";

export type InitialStateType = {
  dbProducts: ProductsShape[];
  productsInCart: ProductsShape[];
  total: number;
  addToCart?: any;
  removeFromCart?: any;
  currentPage?: any;
  setCurrentPage?: any;
  currentProducts?: ProductsShape[];
  productsPerPage?: any;
};

export type ChildrenType = {
  children: ReactElement | ReactElement[] | undefined | ReactNode | ReactNode[];
};

const initialState: InitialStateType = {
  dbProducts: productsArray,
  productsInCart: [],
  total: 0,
};

const ShopContext = createContext(initialState);

const ShopProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsArray.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // pagination

  const updatePrice = (products: ProductsShape[]) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const addToCart = (product: ProductsShape) => {
    const updatedCart = state.productsInCart.concat(product);
    updatePrice(updatedCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        productsInCart: updatedCart,
      },
    });
  };

  const value = {
    productsInCart: state.productsInCart,
    total: state.total,
    addToCart,
    currentPage,
    setCurrentPage,
    currentProducts,
    productsPerPage,
    dbProducts: productsArray,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);
  // console.log(context.productsInCart, "useShop");
  // console.log(context.total, "total");
  console.log(context.dbProducts, "initial Ps");

  if (context === undefined) {
    throw new Error(`useShop must be in ShopContext`);
  }

  return context;
};

export { ShopProvider, useShop };
