"use client";
import {
  createContext,
  useReducer,
  ReactElement,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { ProductsShape, productsArray } from "../../data/db";
import { shopReducer } from "./shopReducer";

export type InitialStateType = {
  dbProducts: ProductsShape[];
  productsInCart: ProductsShape[];
  productsInWishlist: ProductsShape[];
  total: number;
  addToCart?: any;
  removeFromCart?: any;
  currentPage?: any;
  currentProducts: ProductsShape[];
  productsPerPage?: any;
  selectGender?: any;
  paginate?: any;
  selectCategory?: any;
  selectAll?: any;
  addToWishlist?: any;
  removeFromWishlist?: any;
};

export type ChildrenType = {
  children: ReactElement | ReactElement[] | undefined | ReactNode | ReactNode[];
};

const initialState: InitialStateType = {
  dbProducts: productsArray,
  productsInCart: [],
  total: 0,
  currentProducts: [],
  selectGender: "",
  selectCategory: "",
  selectAll: "",
  productsInWishlist: [],
};

const ShopContext = createContext(initialState);

const ShopProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsArray.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    dispatch({
      type: "UPDATE_CURRENT_PRODUCTS",
      payload: {
        currentProducts,
      },
    });
  }, [currentPage]);
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

  const addToCart = (product: ProductsShape[]) => {
    const updatedCart = state.productsInCart.concat(product);
    updatePrice(updatedCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        productsInCart: updatedCart,
      },
    });
  };

  const removeFromCart = (product: ProductsShape) => {
    const updatedCart = state.productsInCart.filter(
      (currentProduct: ProductsShape) => currentProduct.title !== product.title
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        productsInCart: updatedCart,
      },
    });
  };

  // select Gender

  const updateCurrentProductsByGender = (
    state: InitialStateType,
    selectedGender: string
  ) => {
    const currentProducts = state.dbProducts.filter(
      (product) => product.sex === selectedGender
    );

    console.log("Updated current products:", currentProducts);

    return {
      ...state,
      currentProducts,
    };
  };

  const selectGender = (selectedGender: string) => {
    dispatch({
      type: "SELECT_GENDER",
      payload: {
        selectedGender,
      },
    });

    const updatedState = updateCurrentProductsByGender(state, selectedGender);
    dispatch({
      type: "UPDATE_CURRENT_PRODUCTS",
      payload: {
        currentProducts: updatedState.currentProducts,
      },
    });
  };

  // select Gender

  // select category

  const updateCurrentProductsByCategory = (
    state: InitialStateType,
    selectedCategory: string
  ) => {
    const currentProducts = state.dbProducts.filter(
      (product) => product.category === selectedCategory
    );

    console.log("Updated current products by category:", currentProducts);

    return {
      ...state,
      currentProducts,
    };
  };

  const selectCategory = (selectedCategory: string) => {
    dispatch({
      type: "SELECT_CATEGORY",
      payload: {
        selectedCategory,
      },
    });

    const updatedCategoryState = updateCurrentProductsByCategory(
      state,
      selectedCategory
    );
    dispatch({
      type: "UPDATE_CURRENT_PRODUCTS",
      payload: {
        currentProducts: updatedCategoryState.currentProducts,
      },
    });
  };

  // select category

  // select All pdcts

  const updateCurrentAllProducts = (
    state: InitialStateType,
    selectedAll: string
  ) => {
    const currentProducts = state.dbProducts.filter(
      (product) => product.selectAll.toLowerCase() === selectedAll.toLowerCase()
    );

    console.log("Updated current all products :", currentProducts);

    return {
      ...state,
      currentProducts,
    };
  };

  const selectAll = (selectedAll: string) => {
    dispatch({
      type: "SELECT_ALL",
      payload: {
        selectedAll,
      },
    });

    const updatedAllProducts = updateCurrentAllProducts(state, selectedAll);
    dispatch({
      type: "UPDATE_CURRENT_PRODUCTS",
      payload: {
        currentProducts: updatedAllProducts.currentProducts,
      },
    });
  };

  // select All pdcts ends

  //  select Jewelery

  // add wishLists here

  const addToWishlist = (product: ProductsShape[]) => {
    const updatedCart = state.productsInWishlist.concat(product);
    updatePrice(updatedCart);

    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: {
        productsInWishlist: updatedCart,
      },
    });
  };

  const removeFromWishlist = (product: ProductsShape) => {
    const updatedCart = state.productsInWishlist.filter(
      (currentProduct: ProductsShape) => currentProduct.title !== product.title
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        productsInWishlist: updatedCart,
      },
    });
  };

  // add wishLists here ends

  // compute products total

  const value = {
    productsInCart: state.productsInCart,
    total: state.total,
    addToCart,
    currentPage,
    currentProducts: state.currentProducts,
    productsPerPage,
    dbProducts: state.dbProducts,
    removeFromCart,
    selectGender,
    paginate,
    selectCategory,
    selectAll,
    productsInWishlist: state.productsInWishlist,
    addToWishlist,
    removeFromWishlist,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const UseShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error(`useShop must be in ShopContext`);
  }

  return context;
};

export { ShopProvider, UseShop };
