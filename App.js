import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import {Ionicons} from "@expo/vector-icons"
import { GlobalStyles } from './constants/styles';
const Stack= createNativeStackNavigator()
const Tab= createBottomTabNavigator()

const ViewExpenses=()=>{
  return(<Tab.Navigator screenOptions={{
tabBarActiveTintColor:GlobalStyles.colors.selected100,
tabBarInactiveTintColor:GlobalStyles.colors.white,
tabBarLabelStyle:{
  fontSize:12
},
tabBarStyle:{
  backgroundColor:GlobalStyles.colors.primary450
},
headerStyle:{
  backgroundColor:GlobalStyles.colors.primary450,
},
headerTintColor:GlobalStyles.colors.white
  }}>
    <Tab.Screen name="All Expenses" component={AllExpenses} options={{
      tabBarIcon:({color,size})=><Ionicons name="calendar" size={size} color={color}/>,
      tabBarLabel:"All"
    }}/>
    <Tab.Screen name="Recent Expenses" component={RecentExpenses}
    options={{
      tabBarIcon:({color,size})=><Ionicons name="hourglass" size={size} color={color}/>,
      tabBarLabel:"Recent"
    }}/>
   </Tab.Navigator>)
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
         <Stack.Navigator initialRouteName="View Expenses">
          <Stack.Screen name="View Expenses" component={ViewExpenses} options={{
          headerShown:false
          }}/>
          <Stack.Screen name="Manage Expense" component={ManageExpense}/>
         </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
