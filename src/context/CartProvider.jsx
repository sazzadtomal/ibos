import React, { createContext, useReducer, useEffect} from "react";
import { cartReducer,initializer } from "./CartReducer";

export const CartContext = createContext();

const initialState = {
  item: [],
  totalAmount: 0,
  totalItem: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState,initializer);

  const addItem = (id) => {
    return dispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  };

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };


  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(state));
  }, [state]);



  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);





  return (
    <CartContext.Provider
      value={{ ...state,addItem, removeItem, clearCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;