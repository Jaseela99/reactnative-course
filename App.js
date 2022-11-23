import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import Goals from "./components/Goals";
import Input from "./components/Input";
export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (inputText) => {
    setGoals((prev) => [
      ...prev,
      { text: inputText, id: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <Input addGoalHandler={addGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <Goals itemData={itemData} />;
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 14,
  },

  listContainer: {
    flex: 6,
    marginTop: 20,
  },
});
