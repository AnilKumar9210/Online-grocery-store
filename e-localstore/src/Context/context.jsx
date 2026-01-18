import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [userDetails,setUserDetails]=useState();

    const [isLogin,setIsLogin]=useState(!!localStorage.getItem("token"));


  return (
  <AppContext.Provider 
  value={{
        userDetails,
        setUserDetails,
        isLogin,
        setIsLogin
        }}>
    {children}
    </AppContext.Provider>
    );
};

export default AppProvider;
