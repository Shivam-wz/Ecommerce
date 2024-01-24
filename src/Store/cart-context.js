import React from "react";

const CartContext=React.createContext({
    items:[],
    isShow:false,
    toggleCart:()=>{},
    removeItem:(id)=>{},
    addItem:()=>{},
    purchase:()=>{}
})

export default CartContext;