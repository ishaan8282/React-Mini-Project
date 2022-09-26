import { createContext, useState } from "react";

export const AppContext = createContext()


function AppContextProvider({ children }) {
    const [state, setState] = useState({
      isAuth: false,
      token: null
    });
  
    const loginUser = (token) => {
      setState({
        ...state,
        isAuth: true,
        token: token
      });
    };
  
    const logoutUser = () => {
      setState({
        ...state,
        isAuth: false,
        token: null
      });
    };
  
    return (
      <AppContext.Provider value={{state,loginUser, logoutUser }}>
        {children}
      </AppContext.Provider>
    );
  }

export default AppContextProvider;