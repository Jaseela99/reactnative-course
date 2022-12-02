import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import {useState} from "react"
import LoadingOverlay from '../components/UI/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const signUpHandler=async({email,password})=>{
    setIsAuthenticating(true)
    await createUser(email,password)
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <LoadingOverlay message="creating user.."/>
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;