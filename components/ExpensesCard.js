import { StyleSheet, View,Text } from 'react-native'
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpenseSummary'
import { GlobalStyles } from '../constants/styles'



const ExpensesCard = ({expenses,periodName,fallBackText}) => {
  let content =<Text style={styles.infoText}>{fallBackText}</Text>
  if(expenses.length>0){
    content=<ExpenseList expenses={expenses}/>
  }
  
  return (
    <View style={styles.cardContainer}>
        <ExpenseSummary expenses={expenses} periodName={periodName}/>
       {content}
    </View>
  )
}

export default ExpensesCard

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary100,
    },
    infoText:{
      fontSize:18,
      color:GlobalStyles.colors.primary450,
      fontWeight:"bold",
      marginTop:33,
      textAlign:"center",
    }
})