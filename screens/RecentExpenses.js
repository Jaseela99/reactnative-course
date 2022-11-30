import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesCard from '../components/ExpensesCard'

const RecentExpenses = () => {
  return (
      <ExpensesCard periodName="Last 7 days"/>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})