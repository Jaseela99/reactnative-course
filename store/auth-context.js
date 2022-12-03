import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext({
  token: "",
  isAuthenticated:false,
  authenticate: (token) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  
  
  const authenticate = (token) => {
    setAuth(token);
    AsyncStorage.setItem("token",token)
  };
  const logout = () => {
    setAuth(null);
    AsyncStorage.removeItem("token")
  };
  value = {
    token: auth,
    isAuthenticated:!!auth,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
