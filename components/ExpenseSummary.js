import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpenseSummary = ({periodName,expenses}) => {
    const totalExpenses=expenses.reduce((sum,expense)=>{
        return sum+expense.amount
    },0)

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>₹{totalExpenses.toFixed(2)}</Text>
    </View>
  )
}

export default ExpenseSummary

const styles = StyleSheet.create({})