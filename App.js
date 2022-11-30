import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpense from "./screens/ManageExpense";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI components/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ViewExpenses = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: GlobalStyles.colors.selected100,
        tabBarInactiveTintColor: GlobalStyles.colors.white,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary350,
        },
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary350,
        },
        headerTintColor: GlobalStyles.colors.white,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              icon="add"
              size={30}
              color={tintColor}
              onPress={() => {
                navigation.navigate("Manage Expense");
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
          tabBarLabel: "All",
        }}
      />
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
          tabBarLabel: "Recent",
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="View Expenses"
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary350,
              },
              headerTintColor: GlobalStyles.colors.white,
            }}
          >
            <Stack.Screen
              name="View Expenses"
              component={ViewExpenses}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Manage Expense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
