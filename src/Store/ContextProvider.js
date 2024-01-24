import React from "react";
import AuthProvider from "./AuthProvider";
import CartProvider from "./CartProvider";

const ContextProvider = (props) => {
  console.log("hi");
  return (
    <>
      <AuthProvider>
        <CartProvider>{props.children}</CartProvider>
      </AuthProvider>
    </>
  );
};

export default ContextProvider;
