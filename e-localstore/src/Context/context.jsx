import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [userId,setUserId]=useState();

    const [isLogin,setIsLogin]=useState(!!localStorage.getItem("token"));

    const [api,setApi] = useState("http://localhost:5000");


  return (
  <AppContext.Provider 
  value={{
        userId,
        setUserId,
        isLogin,
        setIsLogin,
        api
        }}>
    {children}
    </AppContext.Provider>
    );
};

export default AppProvider;
