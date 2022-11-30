import { StyleSheet,FlatList, Text,View } from 'react-native'
import React from 'react'

const ExpenseList = ({expenses}) => {
  return <FlatList data={expenses} renderItem={(itemData)=>{
    return <View >
        <Text>{itemData.item.description}</Text>
        <Text>{itemData.item.amount}</Text>
    </View>
  }}
  keyExtractor={(item)=>item.id}/>
}

export default ExpenseList

const styles = StyleSheet.create({})