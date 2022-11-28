import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummyData'

const MealsScreen = () => {
  return (
    <View>
      <Text>MealsScreen</Text>
    </View>
  )
}

export default MealsScreen

const styles = StyleSheet.create({
    mealsContainer:{
        flex:1,
        padding:16
    }
})