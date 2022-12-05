import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import CustomButton from '../components/UI/CustomButton'
import { colors } from '../constants/colors'
import { fetchPlaceDetails } from '../util/database'

const PlaceDetails = ({route,navigation}) => {
const [placeDetails,setPlaceDetails]=useState()
  const showOnMap=()=>{

  }
  selectedPlaceId=route.params.placeId
  useEffect(() => {
    const fetchPlaceData=async()=>{
      const data=await fetchPlaceDetails(selectedPlaceId)
      setPlaceDetails(data)
      navigation.setOptions({
        title:data.title
      })
    }
    fetchPlaceData()
  }, [selectedPlaceId])
  if (!placeDetails) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }
  
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri:placeDetails.imageUri}}/>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
        <Text style={styles.address}>{placeDetails.title}</Text>

        </View>
      <CustomButton icon="map" onPress={showOnMap}>View on map</CustomButton>
      </View>
    </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '40%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.primary800,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
})