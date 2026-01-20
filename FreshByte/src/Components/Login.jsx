import React, { useState } from "react";
import "./Login.css";
import Button from "../Utils/Button";
import { motion } from "framer-motion";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const [check, setCheck] = useState(false);

  return (
    <div className="login">
      <header>
        <div className="logo-title">
          <img src="/src/assets/logo.png" alt="" className="logo" />
          <h3 className="title">FreshByte</h3>
        </div>
        <span>need help?</span>
      </header>
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="login-box"
      >
        <div className="login-container">
          <h3>Welcome Back</h3>
          <span>Enter your details to sign in to your account.</span>
          <div className="authenticate">
            <span onClick={() => setToggle((prev) => !prev)}>
              Login{" "}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: toggle ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`${toggle ? "active" : ""}`}
              ></motion.span>
            </span>
            <span onClick={() => setToggle((prev) => !prev)}>
              Signin{" "}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: !toggle ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`${!toggle ? "active" : ""}`}
              ></motion.span>
            </span>
          </div>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="enter your email" name="" id="" />
          </div>
          <div className="continue">
            <div className={`${toggle ? "remember" : "hide"}`}>
              <input type="checkbox" checked={check} name="" id="" />
              <span
                onClick={() => {
                  setCheck((prev) => !prev);
                }}
                style={{ cursor: "pointer" }}
              >
                Remember me
              </span>
            </div>
          </div>
          <Button text={"continue"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
