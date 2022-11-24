import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
export default function App() {
  const [number, setNumber] = useState();
  const numberPickedHandler = (pickedNumber) => {
    setNumber(pickedNumber);
  };
  let screen = <StartGameScreen numberPickedHandler={numberPickedHandler} />;
  if (number) {
    screen = <GameScreen />;
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
  },
  background: {
    opacity: 0.15,
  },
});
