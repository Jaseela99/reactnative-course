import { StyleSheet, Text, View,Alert } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";
const generateRandomBetween= (min, max, exclude)=>{
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ number }) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, number);
  const [guess, setGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if((direction==="lower" && guess<number) || (direction==="higher" && guess>number)){
       Alert.alert("Lie","Don't try to fool me!!",[{text:"Sorry",style:"cancel"}])
      return
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
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
            +
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </CustomButton>
        </View>
      </View>
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
});
