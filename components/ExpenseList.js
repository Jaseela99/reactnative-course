import { StyleSheet,FlatList, Text,View } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses}) => {
  return <FlatList data={expenses} renderItem={(itemData)=>{
    return <ExpenseItem {...itemData.item}/>
  }}
  keyExtractor={(item)=>item.id}/>
}

export default ExpenseList

const styles = StyleSheet.create({})