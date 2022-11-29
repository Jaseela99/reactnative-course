import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
// import FavouritesContextProvider from "./store/context/favourites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8b008b",
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "#fff0f5",
        },
        drawerContentStyle: {
          backgroundColor: "#dda0dd",
        },

        drawerActiveTintColor: "#ff69b4",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#f0f8ff",
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color }) => (
            <Ionicons name="cart" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="favourites"
        component={FavouriteScreen}
        options={{
          title: "Favourite Meals",
          drawerIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <FavouritesContextProvider> */}
        <Provider store={store}>
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
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
              options={{
                title: "About the meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavouritesContextProvider> */}
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
