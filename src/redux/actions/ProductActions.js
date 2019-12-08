import axios from 'axios'
import {
  GET_PRODUCTS_BY_CATEGORY
} from "./types";
export const getProductsByCategory = ( {category}) => {
  //console.log(category + gender);
  return dispatch => {
    axios
      .get('../../assets/data.json')
      .then(res => {
        const data = res.filter(m => m.categories === category)
        dispatch({
          type: GET_PRODUCTS_BY_CATEGORY,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_PRODUCTS_BY_CATEGORY,
          payload: []
        });
      });
  };
};