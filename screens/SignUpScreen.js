import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import {useState} from "react"
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const signUpHandler=async({email,password})=>{
    setIsAuthenticating(true)
    try {
      await createUser(email,password)
      
    } catch (error) {
      Alert.alert("Authentication failed", "could not create user!!");
    }
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <LoadingOverlay message="creating user.."/>
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;