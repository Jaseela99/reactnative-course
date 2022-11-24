import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import ResultScreen from "./screens/ResultScreen";
import {useFonts} from "expo-font"
import AppLoading from "expo-app-loading"

export default function App() {

  const [number, setNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [rounds,setRounds]=useState(0)

  const [fontsLoaded]=useFonts({
    'open-sans':require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold':require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  const numberPickedHandler = (pickedNumber) => {
    setNumber(pickedNumber);
    setGameOver(false);
  };
  const gameOverHandler = (numberOfRounds) => {
    setGameOver(true);
    setRounds(numberOfRounds)
  };
  const newGameHandler=()=>{
    setNumber(null)
    setRounds(0)
  }
  let screen = <StartGameScreen numberPickedHandler={numberPickedHandler} />;
  if (number) {
    screen = <GameScreen number={number} gameOverHandler={gameOverHandler} />;
  }
  if (gameOver && number) {
    screen = <ResultScreen number={number} rounds={rounds} newGameHandler={newGameHandler}/>;
  }

  return (
    <LinearGradient style={styles.container} colors={["#d8bfd8", "#ffb6c1"]}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.background}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    opacity: 0.09,
  },
});
