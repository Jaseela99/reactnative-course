import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#8b008b",
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#fff0f5",
            },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            //to set title dynamically

            // options={({route,navigation})=>{
            //   const catId= route.params.categoryId
            //   return {
            //    title:catId
            // }}}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: 'center',
    justifyContent: "center",
  },
});
