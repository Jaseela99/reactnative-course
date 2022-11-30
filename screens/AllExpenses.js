import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpensesCard from '../components/ExpensesCard'

const AllExpenses = () => {
  return (
    <View>
     <ExpensesCard periodName="Total"/>
    </View>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})