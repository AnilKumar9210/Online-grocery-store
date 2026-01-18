import React, { useState } from "react";
import logo from "../assets/logo.png";
import password from "../assets/padlock.png";
import mail from "../assets/mail.png";
import show from "../assets/eye.png";
import hide from "../assets/hidden.png";
import "./Login.css";
import Button from "../Utils/Button";
import { motion } from "framer-motion";

const Login = () => {
  const [toggleHide, setToggleHide] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [login, setLogin] = useState(false);
  const [forget, setForget] = useState(true);
  const [sent, setSent] = useState(true);

  const [authDetails,setAuthDetails] = useState ({
    password:"",
    email:""
  });

  const handleAuthChange = (e)=> {
    setAuthDetails ({...authDetails,[e.target.name]:e.target.value})
    console.log(e.target.value)
  }



  const handleLog = () => {
    setSent(false);
    console.log(authDetails);
  };
  const handleLogs = () => {
    console.log(authDetails);
  };
  return (
    <motion.div className="auth-main" animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
      <motion.div
        className="auth"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-logo">
          <img src={logo} alt="" />
          <span className="heading">Welcome Back</span>
          <span className="subheading">
            Login to manage your orders and profile
          </span>
        </div>

        {forget ? (
          <div className="login">
            <div className="auth-input">
              <label className="auth-lable">Enter your email</label>
              <div id="input-data">
                <img id="input-logo" src={mail} alt="" />
                <input type="email" name="email" value={authDetails.email} onChange={handleAuthChange} required autoFocus />
              </div>
            </div>
            <div className="auth-input">
              <label className="auth-lable">Enter your password</label>
              <div id="input-data">
                <img id="input-logo" src={password} alt="" />
                <input type={toggleHide ? "text" : "password"} onChange={handleAuthChange} name="password" required />
                <img
                  src={toggleHide ? hide : show}
                  alt=""
                  id="input-logo"
                  onClick={() => setToggleHide((prev) => !prev)}
                />
              </div>
            </div>
            {signIn && (
              <motion.div
                className="auth-input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <label className="auth-lable">Confirm your password</label>
                <div id="input-data">
                  <img id="input-logo" src={password} alt="" />
                  <input type={toggleHide ? "text" : "password"} onChange={handleAuthChange} name="password" required />
                  <img
                    src={toggleHide ? hide : show}
                    alt=""
                    id="input-logo"
                    onClick={() => setToggleHide((prev) => !prev)}
                  />
                </div>
              </motion.div>
            )}
            {signIn ? (
              <Button text={"Sign in"} handleFun={handleLogs} />
            ) : (
              <Button text={"continue"} handleFun={handleLog} />
            )}
            <div className="line"></div>
            <div className="more">
              <p>
                Forgot password?{" "}
                <span
                  className="link"
                  onClick={() => setForget((prev) => !prev)}
                >
                  click here
                </span>
              </p>
              {login ? (
                <p>
                  Already Have an account.{" "}
                  <span
                    className="link"
                    onClick={() => {
                      setLogin((prev) => !prev);
                      setSignIn(false);
                    }}
                  >
                    Login here.
                  </span>
                </p>
              ) : (
                <p>
                  Need Fresh Groceries.
                  <span
                    onClick={() => {
                      setSignIn(true);
                      setLogin(true);
                    }}
                    className="link"
                  >
                    Create Account
                  </span>
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="login">
            <motion.div
              className="auth-input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <label className="auth-lable">Enter your email</label>
              <div id="input-data">
                <img id="input-logo" src={mail} alt="" />
                <input type="email" onChange={handleAuthChange} name="email" required autoFocus />
              </div>
            </motion.div>
            <motion.div
              className="auth-input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <label className="auth-lable">Enter your OTP</label>
              <div id="input-data">
                {/* <img id="input-logo" src={password} alt="" /> */}
                <input type={toggleHide ? "text" : "password"} onChange={handleAuthChange} name="password" required />
              </div>
            </motion.div>
            <motion.div
              className="auth-input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <label className="auth-lable">Confirm your password</label>
              <div id="input-data">
                <img id="input-logo" src={password} alt="" />
                <input type={toggleHide ? "text" : "password"} onChange={handleAuthChange} name="password" required />
                <img
                  src={toggleHide ? hide : show}
                  alt=""
                  id="input-logo"
                  onClick={() => setToggleHide((prev) => !prev)}
                />
              </div>
            </motion.div>
            {sent ?<motion.button whileHover={{
                    scale:1.01,
                    backgroundColor: "#cf4e1a"
                }} 
                whileTap={{scale:0.95}} 
                onClick={handleLog}
                transition={{
                        type:"tween", 
                        stiffness:300
                        }
                    } className='button'>
                    send OTP
                </motion.button> :<motion.button whileHover={{
                        scale:1.01,
                        backgroundColor: "#cf4e1a"
                    }} 
                    
                    whileTap={{scale:0.95}} 
                    transition={{
                            type:"tween", 
                            stiffness:300
                            }
                        } className='button'>
                        Update password
                    </motion.button>}
          </div>
        )}
        <div className="line"></div>
        <div className="timer"></div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
