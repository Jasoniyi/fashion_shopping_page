import { InitialStateType } from "./ShopContext";

export type ActionType = {
  type: string;
  payload: any;
};

export const shopReducer = (state: InitialStateType, action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_PRICE":
      console.log("update price");
      return {
        ...state,
        total: payload.total,
      };

    case "ADD_TO_CART":
      console.log("addToCart");
      return {
        ...state,
        productsInCart: payload.productsInCart,
      };

    default:
      throw new Error(`case of ${type} is not in shopReducer`);
  }
};
