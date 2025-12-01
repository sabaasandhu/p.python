

import axios from "axios";
import {
  setLoading,
  setError,
  addCartItems,
  removeFromCartItem,
  setShipping,
  clearCart,
} from "../slices/cartSlice";
import apis from '../../config/apis'

import salePriceFunc from '../../helpers/Func'
import { calculateSubTotal, updateLocalStorage } from "../../helpers/CartFunc";

export const addCartItem = (id, qty) => async (dispatch, getState) => {
  const {
    cartSlice: { cartItems },
  } = getState();
  dispatch(setLoading());
  try {
    const { data } = await axios.get(`${apis[1]}/${id}`);
    const itemInCart = {
      id: data.id,
      name: data.name,
      price: salePriceFunc(data.price,  data.discount) * qty,
      image: data.images[0].image,
      qty,
    };
    const existItem = cartItems.find((item) => item.id == id);
    let newCart;
    if (!existItem) {
      newCart = {
        cart: [...cartItems, itemInCart],
        subTotal: calculateSubTotal([...cartItems, itemInCart]),
      };
    } else {
      const newArr = cartItems.filter((item) => item.id != existItem.id);
      newArr.unshift({
        ...existItem,
        qty: existItem.qty + qty,
        price:
          existItem.price +
          saleCalc(data.price, data.onSale, data.discount) * qty,
      });
      newCart = {
        cart: newArr,
        subTotal: calculateSubTotal(cartItems),
      };
    }
    dispatch(addCartItems(newCart));
    updateLocalStorage(newCart.cart);
    console.log("i m here " + newCart);
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
        const {
                cartSlice: { cartItems },
        } = getState();
        dispatch(setLoading())
        try {
                const filteredCartItems = cartItems.filter(item => item.id != id)
                const totalPrice = calculateSubTotal(filteredCartItems)
                const object = {
                        cartItems: filteredCartItems,
                        subTotal: totalPrice
                }
                dispatch(removeFromCartItem(object))
                updateLocalStorage(filteredCartItems);
        } catch (error) {
                dispatch(setError(error.message));
        }
}

export const empptyCart = () => async (dispatch) => {
        try {
                dispatch(setLoading())
                dispatch(clearCart())
        } catch (error) {
                dispatch(setError(error.message));
        }
}
// export const setShipping = (value) => async (dispatch) => {
//   dispatch(setShippingCosts(value));
// };
export const resetCart = () => (dispatch) => {
  dispatch(clearCart());
};
