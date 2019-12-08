import {
  ADD_TO_CART,
  GET_ALL_PRODUCTS_CART,
  DELETE_FROM_CART,
  UPDATE_QUANTITY_PRODUCT_CART
} from "../actions/types";

const INITIAL_STATE = {
  alert: "",
  carts: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        alert: action.payload
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        alert: action.payload
      };
    case GET_ALL_PRODUCTS_CART:
      return {
        ...state,
        alert: "",
        carts: action.payload
      };
    case UPDATE_QUANTITY_PRODUCT_CART:
      return {
        ...state,
        alert: "",
        carts: action.payload
      };
    default:
      return state;
  }
};
