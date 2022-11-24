import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#d8bfd8","#ffb6c1"]}>
     <ImageBackground source={require("./assets/images/background.jpg")} resizeMode="cover" 
     style={styles.container} imageStyle={styles.background}>
      <StartGameScreen/>
     </ImageBackground>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background:{
  opacity:0.15
  }
});
