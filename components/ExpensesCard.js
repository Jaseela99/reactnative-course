import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpenseSummary'
import { GlobalStyles } from '../constants/styles'



const ExpensesCard = ({expenses,periodName}) => {
  return (
    <View style={styles.cardContainer}>
        <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={periodName}/>
        <ExpenseList expenses={DUMMY_EXPENSES}/>
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
    }
})