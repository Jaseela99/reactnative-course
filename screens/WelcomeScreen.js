import axios from 'axios';
import { useEffect ,useState,useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fetched,setFetched]=useState("")
  const authContext=useContext(AuthContext)
  const token=authContext.tokens
  useEffect(()=>{
   const getMessage= async()=>{
     const response=await axios.get(`https://react-native-course-bafab-default-rtdb.firebaseio.com/message.json?auth=`+token)
    setFetched(response.data)
    }
    getMessage()
  },[token])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetched}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});