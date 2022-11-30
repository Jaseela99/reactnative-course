import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpenseSummary'
import { GlobalStyles } from '../constants/styles'

const DUMMY_EXPENSES=[
    {
        id:'e1',
        description:"A Pair of shoes",
        amount:1059.99,
        date:new Date("2022-12-19")
    },
    {
        id:'e2',
        description:"electricity bill",
        amount:100,
        date:new Date("2022-12-01")
    },
    {
        id:'e3',
        description:"Wifi",
        amount:750,
        date:new Date("2022-12-02")
    },
    {
        id:'e4',
        description:"Purse",
        amount:599,
        date:new Date("2021-12-29")
    },
]

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