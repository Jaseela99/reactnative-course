import AuthContent from "../components/Auth/AuthContent";
import { Alert } from "react-native";
import { useState,useContext } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { loginUser } from "../util/auth";
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext= useContext(AuthContext)
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
    const token = await loginUser(email, password);
    authContext.authenticate(token)
    } catch (error) {
      Alert.alert("Authentication failed", "check your credentials");
      setIsAuthenticating(false);
    }
  };
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in.." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
