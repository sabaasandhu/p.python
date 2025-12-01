import apis from "../../config/apis";
import {
  setLoading,
  setProducts,
  setProduct,
  setError,
} from "../slices/productSlice";

import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(apis[0]);
    dispatch(setProducts(data));

  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const singleProduct = (id) => async (dispatch) => {
       try {
         dispatch(setLoading())
          const {data} = await axios.get(`${apis[1]}/${id}`)
          dispatch(setProduct(data));
         
       } catch(err){
            dispatch(setError(err.message))
       }
}

