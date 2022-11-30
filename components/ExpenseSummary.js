import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles'

const ExpenseSummary = ({periodName,expenses}) => {
    const totalExpenses=expenses.reduce((sum,expense)=>{
        return sum+expense.amount
    },0)

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>₹{totalExpenses.toFixed(2)}</Text>
    </View>
  )
}

export default ExpenseSummary

const styles = StyleSheet.create({
    summaryContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:16,
        backgroundColor:GlobalStyles.colors.gray100,
        elevation:2,
        borderRadius:10,
        alignItems:"center"
    },
    sum:{
        color:GlobalStyles.colors.white,
        fontSize:18,
        fontWeight:"bold",

    },
    period:{
        fontSize:16,
        color:GlobalStyles.colors.white,
    }
})