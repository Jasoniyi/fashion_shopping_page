import { InitialStateType } from "./ShopContext";

export type ActionType = {
  type: string;
  payload: any;
};

export const shopReducer = (state: InitialStateType, action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_PRICE":
      return {
        ...state,
        total: payload.total,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        productsInCart: payload.productsInCart,
      };

    case "ADD_TO_WISHLIST":
      console.log("wishlist");
      return {
        ...state,
        productsInWishlist: payload.productsInWishlist,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        productsInCart: payload.productsInCart,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        productsInWishlist: payload.productsInWishlist,
      };

    case "SELECT_GENDER":
      return {
        ...state,
        selectGender: payload.selectGender,
      };

    case "UPDATE_CURRENT_PRODUCTS":
      return {
        ...state,
        currentProducts: payload.currentProducts,
      };

    case "SELECT_CATEGORY":
      return {
        ...state,
        selectCategory: payload.selectCategory,
      };

    case "SELECT_ALL":
      return {
        ...state,
        selectAll: payload.selectAll,
      };

    default:
      throw new Error(`case of ${type} is not in shopReducer`);
  }
};
