import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
const generateRandomBetween = (min, max, exclude) => {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ number, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, number);
  const [guess, setGuess] = useState(initialGuess);

  useEffect(() => {
    if (guess === number) {
      gameOverHandler();
    }
  }, [guess, number, gameOverHandler]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guess < number) ||
      (direction === "higher" && guess > number)
    ) {
      Alert.alert("Lie", "Don't try to fool me!!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }
    const newRandom = generateRandomBetween(minBoundary, maxBoundary, guess);
    setGuess(newRandom);
  };

  return (
    <View style={styles.gameContainer}>
      <Title>Guess Now!</Title>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <CardTitle style={styles.guesserText}>Higher or Lower?</CardTitle>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
              +
            </CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </CustomButton>
          </View>
        </View>
      </Card>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button:{
    flex:1
  },
  guesserText:{
    marginBottom:16
  }
});
