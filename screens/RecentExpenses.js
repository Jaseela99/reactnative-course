import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesCard from '../components/ExpensesCard'

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesCard periodName="Last 7 days"/>
    </View>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})