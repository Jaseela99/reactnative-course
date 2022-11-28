import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummyData'
import CategoryGridTile from '../components/CategoryGridTile'


const renderIteminFlatList=(itemData)=>{
return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

const CategoriesScreen = () => {
  return (
    <View>
     <FlatList data={CATEGORIES} renderItem={renderIteminFlatList} keyExtractor={(itemData)=>itemData.id}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})