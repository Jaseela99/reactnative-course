import AuthContent from "../components/Auth/AuthContent";
import { Alert } from "react-native";
import { useState } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { loginUser } from "../util/auth";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await loginUser(email, password);
    } catch (error) {
      Alert.alert("Authentication failed", "check your credentials");
    }
    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in.." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
