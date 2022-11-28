import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
// import {useRoute} from "@react-navigation/native"
import { MEALS } from '../data/dummyData'
import MealItem from '../components/MealItem'

const MealsScreen = ({route}) => {
  // const route=useRoute()
  const catId= route.params.categoryId
  const displayedMeals=MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId)>=0
  })

  const renderMeals=(itemData)=>{
  return <MealItem title={itemData.item.title}/>
  }
  return (
    <View>
      <FlatList data={displayedMeals} keyExtractor ={(item)=>item.id} renderItem={renderMeals}/>
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