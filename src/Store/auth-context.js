import React from "react";
const AuthContext=React.createContext({
    isLogin:false,
    userEmail:'',
    token:'',
    login:(token,email)=>{},
    logout:()=>{}
})



export default AuthContext;
