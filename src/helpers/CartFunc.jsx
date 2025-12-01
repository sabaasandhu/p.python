const calculateSubTotal = (cartData) => {
  let subTotal = 0;
  cartData && cartData.map((item) => (subTotal += item.price));
  return subTotal;
};

const updateLocalStorage = (cartData) => {
  localStorage.setItem("cartItems", JSON.stringify(cartData));
  localStorage.setItem("subTotal", calculateSubTotal(JSON.stringify(cartData)));
};

export { calculateSubTotal, updateLocalStorage };
