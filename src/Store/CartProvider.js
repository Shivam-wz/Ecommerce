import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartValues = {
  items: [],
  isShow: false,
};
const cartReducer = (state, action) => {
  if (action.type === "TOGGLE_CART") {
    return { ...state, isShow: !state.isShow };
  }
  if (action.type === "PURCHASE") {
    return { ...state, items:[] };
  }
  if (action.type === "REMOVE") {
    const updateItem=state.items.filter((item)=>item.id!==action.id)
    return { items: updateItem, isShow: state.isShow };
  }
  if (action.type === "ADD") {
    let updateItem=[];
    if (state.items.length === 0) updateItem = updateItem.concat(action.item);
    else updateItem = state.items.concat(action.item);
    return { items: updateItem, isShow: state.isShow };
  }
  return defaultCartValues;
};

const CartProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultCartValues);
  const toggleCartHandler = () => {
    cartAction({ type: "TOGGLE_CART" });
  };
  const removeItemHandler = (id) => {
    cartAction({ type: "REMOVE", id: id });
  };
  const addItemHandler = (item) => {
    cartAction({ type: "ADD", item: item });
  };
  const purchaseHandler = () => {
    cartAction({ type: "PURCHASE" });
  };
  return (
    <CartContext.Provider
      value={{
        items: cartState.items || [],
        isShow: cartState.isShow,
        toggleCart: toggleCartHandler,
        removeItem: removeItemHandler,
        addItem: addItemHandler,
        purchase:purchaseHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
