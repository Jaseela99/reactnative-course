import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { loginUser } from "../util/auth";
function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    await loginUser(email, password);
    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in.." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
