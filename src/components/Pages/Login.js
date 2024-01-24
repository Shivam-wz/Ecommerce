import { useState, useRef, useContext } from "react";

import classes from "./Login.module.css";
import axios from "axios";
import AuthContext from "../../Store/auth-context";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submithandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    let url;
    const obj = {
      password: passwordRef.current.value,
      email: emailRef.current.value,
      returnSecureToken: true,
    };
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxu324ZjtUtZVu_vfKSLRfZHtGouSdclo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxu324ZjtUtZVu_vfKSLRfZHtGouSdclo";
    }
    const response = await axios.post(url, obj);
    console.log(response);
    setIsSubmit(false);
    passwordRef.current.value = "";
    emailRef.current.value = "";
    authCtx.login(response.data.idToken,response.data.email);
  };

  return (
    <>
      {!authCtx.isLogin && (
        <section className={classes.auth}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={submithandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input ref={emailRef} type="email" id="email" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input ref={passwordRef} type="password" id="password" required />
            </div>
            <div className={classes.actions}>
              {isSubmit ? (
                <button className={classes.toggle}>requesting sending</button>
              ) : (
                <button type="submit">
                  {isLogin ? "Login" : "Create account"}
                </button>
              )}
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
