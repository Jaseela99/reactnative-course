import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated:false,
  authenticate: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const authenticate = (token) => {
    setAuth(token);
  };
  const logout = () => {
    setAuth(null);
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
