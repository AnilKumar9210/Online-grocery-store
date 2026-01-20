import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import password from "../assets/padlock.png";
import mail from "../assets/mail.png";
import show from "../assets/eye.png";
import hide from "../assets/hidden.png";
import "./Login.css";
import Button from "../Utils/Button";
import { motion } from "framer-motion";
import { AppContext } from "../Context/context";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();
  
  const [toggleHide, setToggleHide] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [login, setLogin] = useState(false);
  const [forget, setForget] = useState(true);
  const [sent, setSent] = useState(true);

  const [authDetails, setAuthDetails] = useState({
    password: "",
    email: "",
    confirmPassword: "",
    otp:""
  });

  const { api,setUserId } = useContext(AppContext);

  const handleAuthChange = (e) => {
    setAuthDetails({ ...authDetails, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleLog = () => {
    setSent(false);
    console.log(authDetails);
  };

  const handleSignIn = async (e) => {
        e?.preventDefault();
    console.log(authDetails);
    if (authDetails.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if (authDetails.password !== authDetails.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(authDetails.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authDetails.email,
          password: authDetails.password,
        })
      });
      const data = await response.json();
      console.log("Registration successful:", data);
      alert("Registration successful! Please log in.");
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  const handleLogin = async (e)=> {
    e?.preventDefault();
    console.log(authDetails);
    try {
      const res = await fetch (`${api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authDetails.email,
          password: authDetails.password,
        }),
      });
      const data = await res.json();
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);
      setUserId (data.userId);
      alert("Login successful!");
      navigate ("/");
    } catch (error) {
      console.log("Error during login:", error);  
    }
  }


  return (
    <motion.div
      className="auth-main"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
                <input
                  type="email"
                  name="email"
                  value={authDetails.email}
                  onChange={handleAuthChange}
                  required
                  autoFocus
                />
              </div>
            </div>
            <div className="auth-input">
              <label className="auth-lable">Enter your password</label>
              <div id="input-data">
                <img id="input-logo" src={password} alt="" />
                <input
                  type={toggleHide ? "text" : "password"}
                  onChange={handleAuthChange}
                  name="password"
                  required
                />
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
                  <input
                    type={toggleHide ? "text" : "password"}
                    onChange={handleAuthChange}
                    name="confirmPassword"
                    required
                  />
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
              <Button text={"Sign in"} handleFun={handleSignIn} />
            ) : (
              <Button text={"continue"} handleFun={handleLogin} />
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
                <input
                  type="email"
                  onChange={handleAuthChange}
                  name="email"
                  required
                  autoFocus
                />
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
                <input
                  type={toggleHide ? "text" : "password"}
                  onChange={handleAuthChange}
                  name="otp"
                  inputMode='numeric'
                  required
                />
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
                <input
                  type={toggleHide ? "text" : "password"}
                  onChange={handleAuthChange}
                  name="password"
                  required
                />
                <img
                  src={toggleHide ? hide : show}
                  alt=""
                  id="input-logo"
                  onClick={() => setToggleHide((prev) => !prev)}
                />
              </div>
            </motion.div>
            {sent ? (
              <motion.button
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "#cf4e1a",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLog}
                transition={{
                  type: "tween",
                  stiffness: 300,
                }}
                className="button"
              >
                send OTP
              </motion.button>
            ) : (
              <motion.button
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "#cf4e1a",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "tween",
                  stiffness: 300,
                }}
                className="button"
              >
                Update password
              </motion.button>
            )}
          </div>
        )}
        <div className="line"></div>
        <div className="timer"></div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
