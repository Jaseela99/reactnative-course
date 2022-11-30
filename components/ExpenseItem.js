import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import { getFormattedDate } from "../util/date";
import {useNavigation} from "@react-navigation/native"
const ExpenseItem = ({id,description,amount,date}) => {
    const navigation=useNavigation()
    const expensePressHandler=()=>{
     navigation.navigate("Manage Expense",{expenseId:id})
    }
  return (
    <Pressable onPress={expensePressHandler} style={({pressed})=>pressed && styles.pressed} android_ripple={{color:GlobalStyles.colors.prmiary350}}>
      <View style={styles.itemContainer}>
        <View style={styles.desContainer}>
          <Text style={[styles.description,styles.itemText]}>{description}</Text>
          <Text style={styles.itemText}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding:12,
    marginVertical:8,
    backgroundColor:GlobalStyles.colors.primary150,
    flexDirection:"row",
    justifyContent:"space-between",
    borderRadius:6,
    elevatiion:2
  },
  itemText: {
    color:GlobalStyles.colors.primary450
  },
  description:{
    fontSize:16,
    fontWeight:"bold",
  },
  amountContainer:{
    backgroundColor:GlobalStyles.colors.white,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:4,
    paddingVertical:12,
    minWidth:80,
    borderRadius:6
  },
  amount:{
    fontSize:16,
    fontWeight:"bold",
    color:GlobalStyles.colors.gray100
  },
  pressed:{
    opacity:0.75
  }
});
