import React, { useReducer } from "react";
import AuthContext from "./auth-context";
const stored_token=localStorage.getItem('token');
const stored_email = localStorage.getItem("email");
const defaultValues = {
  isLogin: !!stored_token,
  token: stored_token,
  email: stored_email,
};
const reducerFxn = (state, action) => {
  if (action.type === "LOGIN") {
    localStorage.setItem("token", action.token);
    localStorage.setItem("email", action.email);
    setTimeout(()=>localStorage.clear(),1000*60*10)
    return {isLogin:!!action.token, token: action.token,email:action.email };
  } else if (action.type === "LOGOUT") {
    localStorage.clear()
    return {isLogin:false, token: null,email:null };
  }
  return defaultValues;
};
const AuthProvider = (props) => {
  const [authState, authDispachAction] = useReducer(reducerFxn, defaultValues);
  const loginHandler = (token,email) => {
    authDispachAction({ type: "LOGIN", token,email });
  };
  const logoutHandler = () => {
    authDispachAction({ type: "LOGOUT" });
  };
  return <AuthContext.Provider
    value={{
      isLogin:!!authState.token,
      userEmail:authState.email,
      token: authState.token,
      login: loginHandler,
      logout: logoutHandler,
    }}
    >
    {props.children}
  </AuthContext.Provider>;
};
export default AuthProvider;
