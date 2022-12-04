import { StyleSheet,FlatList,View ,Text} from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'

const PlacesList = ({places}) => {
    if(!places||places.length===0){
        return <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>No Places added Yet</Text>
        </View>
    }

    const renderPlaces=({item})=>{
    return <PlaceItem place={item}/>
    }
  return (
    <FlatList data={places} keyExtractor={(itemData)=>itemData.id} renderItem={renderPlaces}/>
  )
}

export default PlacesList

const styles = StyleSheet.create({
    fallbackContainer:{
       flex:1,
       justifyContent:"center",
       alignItems:"center" 
    },
    fallbackText:{
        fontSize:16
    }
})