import { StyleSheet, View, FlatList, Button } from "react-native";
import React, { useState } from "react";
import Goals from "./components/Goals";
import Input from "./components/Input";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState([]);

  const startAddGoalHandler = () => {
    setShowModal(true);
  };
  const endAddGoalHandler = () => {
    setShowModal(false);
  };
  const addGoalHandler = (inputText) => {
    setGoals((prev) => [
      ...prev,
      { text: inputText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5f9ea0"
        onPress={startAddGoalHandler}
      />
      <Input
        addGoalHandler={addGoalHandler}
        showModal={showModal}
        endAddGoalHandler={endAddGoalHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <Goals
                itemData={itemData}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
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
