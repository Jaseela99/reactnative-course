import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import { Ionicons } from "@expo/vector-icons";
import GuessLog from "../components/GuessLog";

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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (guess === number) {
      gameOverHandler(guessRounds.length);
    }
  }, [guess, number, gameOverHandler]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guess < number) ||
      (direction === "higher" && guess > number)
    ) {
      Alert.alert("gotchaa!!", "Don't try to fool me!!", [
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
    setGuessRounds((prev) => [newRandom, ...prev]);
  };
  const guessRoundsListLength = guessRounds.length;
  const padding = height < 380 ? 16 : 24;
  let content = (<>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <CardTitle style={styles.guesserText}>Higher or Lower?</CardTitle>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color={"white"} />
            </CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </CustomButton>
          </View>
        </View>
      </Card>
    </>
  );

  if(width>500){
    content = <>
        <View style={styles.landscapeContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color={"white"} />
            </CustomButton>
          </View>
        <NumberContainer>{guess}</NumberContainer>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </CustomButton>
          </View>
        </View>
        </View>
    </>
    
  }
  return (
    <View style={[styles.gameContainer, { padding: padding }]}>
      <Title>Give me some clues!</Title>
      {content}
      <View style={styles.flatlist}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLog
              round={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
    fontFamily: "open-sans",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems:"center"
  },
  button: {
    flex: 1,
  },
  guesserText: {
    marginBottom: 16,
  },
  flatlist: {
    flex: 1,
    padding: 16,
  },
  landscapeContainer:{
    flexDirection:"row",
    alignItems:"center",
  }
});
