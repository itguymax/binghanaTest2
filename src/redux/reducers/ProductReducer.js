import {
  GET_PRODUCTS_BY_CATEGORY, 
} from "../actions/types";

const INITIAL_STATE = {
  products: [],
 
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
