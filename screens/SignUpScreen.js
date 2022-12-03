import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import {useState,useContext} from "react"
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authContext= useContext(AuthContext)
  const signUpHandler=async({email,password})=>{
    setIsAuthenticating(true)
    try {
     const token = await createUser(email,password)
      authContext.authenticate(token)
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