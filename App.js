import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet ,View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { colors } from "./constants/colors";
import Map from "./screens/Map";
import { init } from "./util/database";
import * as SplashScreen from "expo-splash-screen";
import PlaceDetails from "./screens/PlaceDetails";
const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);
  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (dbInitialized) {
     
      await SplashScreen.hideAsync();
    }
  }, [dbInitialized]);

  if (!dbInitialized) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary400,
            },
            headerTintColor: colors.primary800,
            contentStyle: {
              backgroundColor: colors.gray700,
            },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={35}
                  onPress={() => navigation.navigate("AddPlace")}
                  color={tintColor}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a New Place",
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: "Map",
            }}
          />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
            options={{
              title: "Loading place...",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
