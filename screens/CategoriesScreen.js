import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummyData'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = ({navigation}) => {
  
  const renderIteminFlatList=(itemData)=>{
    const handlePressCategories=()=>{
    navigation.navigate("Meals",{
      categoryId:itemData.item.id
    })
    }
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={handlePressCategories}/>
  }
  
  return (
    <View>
     <FlatList showsVerticalScrollIndicator={false}  data={CATEGORIES} renderItem={renderIteminFlatList} keyExtractor={(itemData)=>itemData.id} numColumns={2}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})