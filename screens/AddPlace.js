import { StyleSheet} from 'react-native'
import React from 'react'
import PlaceForm from "../components/PlaceForm"
const AddPlace = ({navigation}) => {
  const onAddPlace=(place)=>{
   navigation.navigate('AllPlaces',{
    place:place
   })
  }
  return (
    <PlaceForm onAddPlace={onAddPlace}/>
  )
}

export default AddPlace

const styles = StyleSheet.create({})